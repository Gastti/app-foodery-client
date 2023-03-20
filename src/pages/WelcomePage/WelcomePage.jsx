import React from 'react'
import Container from '../../components/Container'
import { useAuth } from '../../services/auth'

export default function WelcomePage() {
    const auth = useAuth();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        if (auth.user) {
            setLoading(false);
        }
    }, [auth.user])

    return (
        <Container
            padding
            primary
        >
            {(!loading && auth.user) && <h1>Welcome, {auth.user.username}!</h1>}
        </Container>
    )
}
