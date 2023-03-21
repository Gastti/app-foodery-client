import React from 'react'
import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import CustomFormError from '../CustomFormError';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    & > label {
        font-family: var(--f-ubuntu);
        font-weight: 400;
        font-size: 1.3rem;
    }

    & > input {
        font-size: 1rem;
        background-color: transparent;
        border: 1px solid #e7e7e7;
        padding: 15px;
        border-radius: 7px;
        color: #000;

        :focus {
            outline: none;
        }
    }
`

export default function CustomField({ label, type, id, name, placeholder, error }) {
    return (
        <Container>
            <label>{label}</label>
            <Field
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
            />
            <ErrorMessage
                name={name}
                component={() => (<CustomFormError message={error} />)}
            />
        </Container>
    )
};