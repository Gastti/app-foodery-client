import React from 'react'
import Container from '../../components/Container'
import { useAuth } from '../../services/auth';
import SignInForm from './SignInForm';
import Footer from '../../components/Footer';
import AuthHeadboard from './AuthHeadboard';
import SignUpForm from './SignUpForm';

export default function AuthPage() {
    const [activeForm, setActiveForm] = React.useState('signin');

    const handleActiveForm = (value) => {
        setActiveForm(value);
    }

    return (
        <>
            <Container
                primary
                padding
                flex='row'
                align='center'
                justify='center'
                style={{ paddingTop: '100px'}}
                substyle={{flexFlow: 'row wrap', gap: '50px'}}
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