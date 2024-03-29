import React from 'react'
import Container from '../../components/Container'
import { useAuth } from '../../hooks/useAuth';
import SignInForm from './SignInForm';
import AuthHeadboard from './AuthHeadboard';
import SignUpForm from './SignUpForm';
import { Navigate } from 'react-router-dom';

export default function AuthPage() {
    const { user } = useAuth();
    const [activeForm, setActiveForm] = React.useState('signin');

    const handleActiveForm = (value) => {
        setActiveForm(value);
    }

    if (user) {
        return <Navigate to="/welcome" />
    }

    return (
        <>
            <Container
                primary
                padding
                flex='column'
                align='center'
                justify='center'
                style={{ height: '100%' }}
                substyle={{ flexFlow: 'row wrap', gap: '50px', marginTop: '120px' }}
            >
                <AuthHeadboard />
                {activeForm == 'signin'
                    ? <SignInForm handleActiveForm={handleActiveForm} />
                    : <SignUpForm handleActiveForm={handleActiveForm} />
                }
            </Container>
        </>
    )
}
