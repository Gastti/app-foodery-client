import React from 'react'
import Container from '../../components/Container'
import { useAuth } from '../../services/auth';

export default function AuthPage() {
    const auth = useAuth();

    const [userdata, setUserdata] = React.useState({
        username: '',
        password: ''
    })

    const handleOnChange = (e) => {
        e.preventDefault();
        setUserdata({ ...userdata, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        auth.login(userdata.username, userdata.password);
    }

    return (
        <Container primary padding>
            <h1>Login</h1>
            <br />
            <form onSubmit={handleOnSubmit}>
                <label>Username</label>
                <input
                    value={userdata.username}
                    name="username"
                    onChange={handleOnChange}
                />

                <label>Password</label>
                <input
                    value={userdata.password}
                    name="password"
                    onChange={handleOnChange}
                />

                <button type='submit'>Login</button>
            </form>
            <button onClick={auth.logout}>Logout</button>
        </Container>
    )
}
