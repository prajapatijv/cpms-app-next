import React from 'react';

export const renderField = ({ input, label, type, className, maxLength, meta: { touched, error, warning } }) => (
    <div className={className}>
        <label htmlFor={label}>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control"/>
            {touched &&
                ((error && <small className="error text-danger">{error}</small>) ||
                (warning && <small className="warning">{warning}</small>))}
        </div>
    </div>
)

export const renderFieldWithPrefix = ({ input, label, type, prefix, className, meta: { touched, error, warning} }) => (
    <div className={className}>
        <label htmlFor={label}>{label}</label>
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">{prefix}</span>
            </div>
            <input {...input} placeholder={label} type={type} className="form-control" />
        </div>
        {touched &&
            ((error && <small className="error text-danger">{error}</small>) ||
                (warning && <small className="warning">{warning}</small>))}
    </div>
)

//Validations

export const required = value => (value || typeof value === 'number' ? undefined : 'Required')
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

//Min Value
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined


//Max Length
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength30 = maxLength(30)
export const maxLength50 = maxLength(50)

//Min Length
const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength8 = minLength(8)


export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

export const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined

export const alphaSpaces = value =>
    value && /[^a-zA-Z ]/i.test(value)
        ? 'Only alphabets characters'
        : undefined

export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Invalid phone number, must be 10 digits'
        : undefined
