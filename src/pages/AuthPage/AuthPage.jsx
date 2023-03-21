import React from 'react'
import Container from '../../components/Container'
import { useAuth } from '../../services/auth';
import SignInForm from './SignInForm';
import Footer from '../../components/Footer';
import AuthHeadboard from './AuthHeadboard';
import SignUpForm from './SignUpForm';
import { Navigate } from 'react-router-dom';

export default function AuthPage() {
    const auth = useAuth();
    const [activeForm, setActiveForm] = React.useState('signin');

    const handleActiveForm = (value) => {
        setActiveForm(value);
    }

    if (auth.user) {
        return <Navigate to="/" />
    }

    return (
        <>
            <Container
                primary
                padding
                flex='column'
                align='center'
                justify='center'
                style={{ height: 'calc(100vh - 228.39px)' }}
                substyle={{ flexFlow: 'row wrap', gap: '50px' }}
            >
                <AuthHeadboard />
                {activeForm == 'signin'
                    ? <SignInForm handleActiveForm={handleActiveForm} />
                    : <SignUpForm handleActiveForm={handleActiveForm} />
                }
            </Container>
            <Footer />
        </>
    )
}
