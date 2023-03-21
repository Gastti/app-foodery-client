import React from 'react'
import FormContainer from './FormContainer';
import { Formik, Form } from 'formik'
import CustomField from '../../components/CustomField';
import FormButton from '../../components/FormButton';
import { useAuth } from '../../services/auth';
import Divider from '../../components/Divider';

export default function SignUpForm({ handleActiveForm }) {
    const auth = useAuth();

    return (
        <FormContainer>
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    username: '',
                    email: '',
                    password: ''
                }}
                validate={(values) => {
                    let errors = {};
                    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
                    const regexOnlyLetters = /^[a-zA-Z\u00C0-\u024F]+$/;
                    const regexUsername = /^[a-zA-Z0-9_-]+$/;

                    if (!values.first_name) {
                        errors.first_name = 'Please enter a first name'
                    } else if (values.first_name.length < 3 || values.first_name.length > 25) {
                        errors.first_name = 'First name must have between 3 and 25 characters';
                    } else if (!regexOnlyLetters.test(values.first_name)) {
                        errors.first_name = 'First name field can only contain letters';
                    }

                    if (!values.last_name) {
                        errors.last_name = 'Please enter a first name'
                    } else if (values.last_name.length < 3 || values.last_name.length > 25) {
                        errors.last_name = 'Last name must have between 3 and 25 characters';
                    } else if (!regexOnlyLetters.test(values.last_name)) {
                        errors.last_name = 'Last name field can only contain letters';
                    }

                    if (!values.username) {
                        errors.username = 'Please enter an username'
                    } else if (values.username.length < 5 || values.username.length > 20) {
                        errors.username = 'Username must contain between 5 and 20 characters'
                    } else if (!regexUsername.test(values.username)) {
                        errors.username = 'Username must contain only letters, numbers and dashes'
                    }

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
                    auth.signup(values.first_name, values.last_name, values.username, values.email, values.password)
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <CustomField
                            type="text"
                            name="first_name"
                            placeholder="First name"
                            error={errors.first_name}
                        />
                        <CustomField
                            type="text"
                            name="last_name"
                            placeholder="Last name"
                            error={errors.last_name}
                        />
                        <CustomField
                            type="text"
                            name="username"
                            placeholder="Username"
                            error={errors.username}
                        />
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
                        <FormButton
                            type='submit'
                            color='primary'
                            size='lg'
                            align='center'
                            disabled={auth.loading}
                        >
                            Create a new account
                        </FormButton>
                    </Form>
                )}
            </Formik>
            <Divider />
            <FormButton
                size='lg'
                align='center'
                onClick={() => handleActiveForm('signin')}
            >
                Sign In
            </FormButton>
        </FormContainer>
    )
}