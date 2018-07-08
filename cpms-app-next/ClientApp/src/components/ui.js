import React from 'react';

export const renderField = ({ input, label, type, className, meta: { touched, error } }) => (
    <div {...className}>
        <label htmlFor="firstName">First name</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control"/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)