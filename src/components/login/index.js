import React from 'react'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
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
                setrdval(users[findUser].isAdmin ? '/admin' : 'user')
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
        </Container>
    )
}
export default Login
