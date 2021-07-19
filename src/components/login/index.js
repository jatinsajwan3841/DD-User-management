import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import SendIcon from '@material-ui/icons/Send'
import { useDispatch } from 'react-redux'
import { login } from '../../actions'
import { Redirect } from 'react-router-dom'

const Login = () => {
    const [isAdmin, setisAdmin] = React.useState(false)
    const [rdval, setrdval] = React.useState('')

    const dispatch = useDispatch()

    const handleChange = () => setisAdmin(!isAdmin)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isAdmin) {
            if (
                e.target.name.value === 'admin' &&
                e.target.pass.value === 'admin'
            ) {
                dispatch(login({ name: 'admin', isAdmin: isAdmin }))
                setrdval('/admin')
            } else setrdval('/404')
        } else {
            dispatch(login({ name: e.target.name.value, isAdmin: isAdmin }))
            setrdval('/user')
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
                <FormControlLabel
                    control={
                        <Switch
                            checked={isAdmin}
                            onChange={handleChange}
                            name="Admin"
                        />
                    }
                    label="Admin ?"
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
        </Container>
    )
}
export default Login
