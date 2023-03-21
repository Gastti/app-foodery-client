import React from 'react'
import FormContainer from './FormContainer';
import { Formik, Form } from 'formik'
import CustomField from '../../components/CustomField';
import FormButton from '../../components/FormButton';
import { useAuth } from '../../services/auth';
import Divider from '../../components/Divider';
import CustomFormError from '../../components/CustomFormError';

export default function SignInForm({ handleActiveForm }) {
    const auth = useAuth();

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={(values) => {
                    let errors = {};
                    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

                    if (!values.email) {
                        errors.email = 'Please enter an email'
                    } else if (!regexEmail.test(values.email)) {
                        errors.email = 'Please enter a valid email'
                    }

                    if (!values.password) {
                        errors.password = 'Please enter a password'
                    } else if (values.password.length < 8 || values.password.length > 20) {
                        errors.password = 'The password must contain between 8 and 20 characters.'
                    } else if (!regexPassword.test(values.password)) {
                        errors.password = 'The password must contain at least one lowercase letter, one uppercase letter, and one number'
                    }

                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {
                    auth.signin(values.email, values.password)
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <CustomField
                            type="text"
                            name="email"
                            placeholder="Email or Username"
                            error={errors.email}
                        />
                        <CustomField
                            type="password"
                            name="password"
                            placeholder="Password"
                            error={errors.password}
                        />
                        {auth.error && <CustomFormError style={{ marginBottom: '15px' }} message='Email/Password are incorrect' />}
                        <FormButton
                            type='submit'
                            color='primary'
                            size='lg'
                            align='center'
                            disabled={auth.loading}
                        >
                            Sign In
                        </FormButton>
                    </Form>
                )}
            </Formik>
            <div><a href='#'>Did you forget your password?</a></div>
            <Divider />
            <div><p>You don't have an account?</p></div>
            <FormButton
                size='lg'
                align='center'
                onClick={() => handleActiveForm('signup')}
            >
                Sign Up
            </FormButton>
        </FormContainer>
    )
}
