import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../actions'
import { Redirect } from 'react-router-dom'

const Login = () => {
    const [rdval, setrdval] = React.useState('')

    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)

    const handleSubmit = (e) => {
        e.preventDefault()
        let tempName = e.target.name.value
        let findUser = users.findIndex((elem) => elem.name === tempName)
        if (findUser !== -1) {
            if (users[findUser].role !== 'blocked') {
                dispatch(
                    login({
                        name: users[findUser].name,
                        isAdmin: users[findUser].isAdmin,
                    }),
                )
                setrdval(
                    users[findUser].isAdmin
                        ? '/DD-User-management/admin'
                        : '/DD-User-management/user',
                )
            } else alert('blocked user')
        } else {
            alert('No user found')
        }
    }

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit} style={{ marginTop: 100 }}>
                <TextField
                    required
                    fullWidth
                    name="name"
                    label="Name"
                    helperText="Please enter your Name"
                />
                <TextField
                    type="password"
                    required
                    fullWidth
                    name="pass"
                    label="Password"
                    helperText="Please enter your password"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    startIcon={<SendIcon />}
                >
                    Login
                </Button>
            </form>
            {rdval !== '' ? <Redirect to={rdval} /> : null}
            <p>
                * For admin login Enter name as admin and any password.
                <br />* Admin page have two sidebar buttons for adding charts
                for visualization and user management.
                <br />* For user login enter name other than admin and which is
                already in user management visible in admin panel, pre included
                example of name is Nyal.
                <br />* If user is blocked from admin panel, alert will show
                about the blocked or if user not found.
            </p>
        </Container>
    )
}
export default Login
