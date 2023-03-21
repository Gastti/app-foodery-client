import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container'
import Footer from '../../components/Footer';
import { useAuth } from '../../services/auth'
import WelcomeContent from './WelcomeContent';
import Subtitle from '../../components/Subtitle';
import Button from '../../components/Button';
import Divider from '../../components/Divider';

export default function WelcomePage() {
    const auth = useAuth();
    const [loading, setLoading] = React.useState(true);
    const [timeLeft, setTimeLeft] = React.useState(5);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (auth.user) {
            setLoading(false);
        }

        setTimeout(() => {
            navigate('/')
        }, 6000)


        const timer = setInterval(() => {
            setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
        }, 1000);

        return () => clearInterval(timer);

    }, [auth.user])

    console.log(timeLeft);

    return (
        <>
            <Container
                padding
                primary
                substyle={{ height: 'calc(100vh - 328.39px)' }}
                flex='row'
                justify='center'
                align='center'
            >
                <WelcomeContent>
                    {(!loading && auth.user) && <Subtitle>Welcome, <span>{auth.user.username}</span>!</Subtitle>}
                    <p>We are glad to have you with us, we hope you enjoy your ride.</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                        <Button
                            color='primary'
                            to='/order'
                        >
                            Make an Order
                        </Button>
                        <Button
                            to='/'
                        >
                            Go Home
                        </Button>
                    </div>
                    <Divider />
                    <p>You will be redirected in <span>{timeLeft}</span> seconds</p>
                </WelcomeContent>
            </Container>
            <Footer />
        </>
    )
}
