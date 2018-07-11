import React from 'react';

export const renderField = ({ input, label, type, className, meta: { touched, error } }) => (
    <div className={className}>
        <label htmlFor={label}>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control"/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

export const renderFieldWithPrefix = ({ input, label, type, prefix, className, meta: { touched, error } }) => (
    <div className={className}>
        <label htmlFor={label}>{label}</label>
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">{prefix}</span>
            </div>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)