import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container'
import Footer from '../../components/Footer';
import { useAuth } from '../../hooks/useAuth'
import WelcomeContent from './WelcomeContent';
import WelcomeTitle from './WelcomeTitle';
import Button from '../../components/Button';
import Divider from '../../components/Divider';

export default function WelcomePage() {
    const { user } = useAuth();
    const [loading, setLoading] = React.useState(true);
    const [timeLeft, setTimeLeft] = React.useState(5);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (user) {
            setLoading(false);
        }

        const redirectTimer = setTimeout(() => {
            navigate('/');
        }, 6000)


        const timer = setInterval(() => {
            setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
        }, 1000);

        const handleNavigation = () => {
            clearTimeout(redirectTimer);
        }

        window.addEventListener('beforeunload', handleNavigation);

        return () => {
            clearInterval(timer);
            window.removeEventListener('beforeunload', handleNavigation);
            clearTimeout(redirectTimer);
        }

    }, [user])

    return (
        <>
            <Container
                padding
                primary
                style={{ height: 'calc(100vh - 228.39px)' }}
                flex='row'
                justify='center'
                align='center'
            >
                <WelcomeContent>
                    {(!loading && user) && <WelcomeTitle>Welcome, <span>{user.username}</span>!</WelcomeTitle>}
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
