import React from 'react'
import { Container, IconButton } from '@material-ui/core'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    makeStyles,
    Fab,
} from '@material-ui/core'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    TextField,
    Button,
} from '@material-ui/core'
import PostAddIcon from '@material-ui/icons/PostAdd'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, editUser, deleteUser } from '../../actions'

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))

const UserManage = () => {
    const [userEdit, setUserEdit] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [tempVals, setTempVals] = React.useState('')
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const id = React.useRef(users[users.length - 1].id + 1)

    const classes = useStyles()

    const tempHolder = (tid) => {
        setUserEdit(true)
        const element = users.findIndex((elem) => elem.id === tid)
        setTempVals(users[element])
    }

    const submit = async (e) => {
        e.preventDefault()
        await setOpen(false)
        const tar = e.target
        const details = {
            id: id.current,
            name: tar.name.value,
            role: tar.role.value,
            isAdmin: tar.permissions.value === 'All' && true,
            permissions: tar.permissions.value,
        }
        await dispatch(addUser(details))
        id.current++
    }

    const handleUserEdit = (e) => {
        e.preventDefault()
        setUserEdit(false)
        const tar = e.target
        const editList = {
            id: parseInt(tar.id.value),
            name: tar.name.value,
            role: tar.role.value,
            isAdmin: tar.permissions.value === 'All' && true,
            permissions: tar.permissions.value,
        }
        setTempVals('')
        dispatch(editUser(editList))
    }

    return (
        <>
            <Fab
                color="secondary"
                aria-label="add"
                className={classes.fab}
                onClick={() => setOpen(true)}
            >
                <PostAddIcon />
            </Fab>
            <TableContainer
                component={Container}
                style={{ paddingLeft: '73px' }}
            >
                <Table size="small" stickyHeader={true}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <b>UserID</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>User Name</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>Role</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>Permissions</b>
                            </TableCell>
                            <TableCell align="center">
                                <b>edit/delete</b>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((val, i) => (
                            <TableRow key={i}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                >
                                    {val.id}
                                </TableCell>
                                <TableCell align="center">{val.name}</TableCell>
                                <TableCell align="center">{val.role}</TableCell>
                                <TableCell align="center">
                                    {val.permissions}
                                </TableCell>
                                {val.name !== 'admin' && (
                                    <TableCell align="center">
                                        <IconButton
                                            color="primary"
                                            size="small"
                                            onClick={() => tempHolder(val.id)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            color="secondary"
                                            size="small"
                                            onClick={() =>
                                                dispatch(deleteUser(val.id))
                                            }
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="form-dialog-title"
            >
                <form onSubmit={submit}>
                    <DialogTitle id="form-dialog-title">
                        Add new User
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter the details below:
                        </DialogContentText>

                        <TextField
                            required
                            fullWidth
                            name="name"
                            label="name"
                            helperText="Please enter Name"
                        />
                        <FormControl style={{ width: '150px' }}>
                            <InputLabel id="role">Role</InputLabel>
                            <Select labelId="role" name="role" required>
                                <MenuItem value="admin">admin</MenuItem>
                                <MenuItem value="account manager">
                                    account manager
                                </MenuItem>
                                <MenuItem value="client">client</MenuItem>
                                <MenuItem value="blocked">blocked</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl
                            style={{
                                marginLeft: '15px',
                                width: '150px',
                            }}
                        >
                            <InputLabel id="permissions">
                                Permissions
                            </InputLabel>
                            <Select labelId="permissions" name="permissions">
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Read">Read</MenuItem>
                                <MenuItem value="Write">Write</MenuItem>
                                <MenuItem value="Read/Write">
                                    Read/Write
                                </MenuItem>
                                <MenuItem value="None">None</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)} color="primary">
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<PostAddIcon />}
                            type="submit"
                        >
                            Add
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>

            {tempVals !== '' && (
                <Dialog
                    open={userEdit}
                    onClose={() => setUserEdit(false)}
                    aria-labelledby="User-edit"
                >
                    <form onSubmit={handleUserEdit}>
                        <DialogTitle id="User-edit">Edit details</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please edit the details below:
                            </DialogContentText>
                            <input
                                type="number"
                                hidden
                                readOnly
                                name="id"
                                value={tempVals.id}
                            />
                            <TextField
                                required
                                fullWidth
                                name="name"
                                label="name"
                                helperText="Please enter Name"
                                defaultValue={tempVals.name}
                            />
                            <FormControl style={{ width: '150px' }}>
                                <InputLabel id="role">Role</InputLabel>
                                <Select
                                    labelId="role"
                                    name="role"
                                    required
                                    defaultValue={tempVals.role}
                                >
                                    <MenuItem value="admin">admin</MenuItem>
                                    <MenuItem value="account manager">
                                        account manager
                                    </MenuItem>
                                    <MenuItem value="client">client</MenuItem>
                                    <MenuItem value="blocked">blocked</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl
                                style={{
                                    marginLeft: '15px',
                                    width: '150px',
                                }}
                            >
                                <InputLabel id="permissions">
                                    Permissions
                                </InputLabel>
                                <Select
                                    labelId="permissions"
                                    name="permissions"
                                    defaultValue={tempVals.permissions}
                                >
                                    <MenuItem value="All">All</MenuItem>
                                    <MenuItem value="Read">Read</MenuItem>
                                    <MenuItem value="Write">Write</MenuItem>
                                    <MenuItem value="Read/Write">
                                        Read/Write
                                    </MenuItem>
                                    <MenuItem value="None">None</MenuItem>
                                </Select>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={() => setUserEdit(false)}
                                color="primary"
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<PostAddIcon />}
                                type="submit"
                            >
                                Edit
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            )}
        </>
    )
}

export default UserManage
