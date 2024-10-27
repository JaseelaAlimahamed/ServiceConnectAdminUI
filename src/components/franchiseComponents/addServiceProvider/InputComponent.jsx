import React from "react";


const InputComponent = ({
    label,
    type,
    name,
    value,
    onChange,
    placeholder,
    required,
    className,
}) => {
    return (
        <div>
            {label &&(
                <label htmlFor={name} className={className}>
                    {label}
                </label>
            )}{' '}
            <input
                type = {type}
                name = {name}
                value = {value}
                onChange = {onChange}
                placeholder = {placeholder}
                required = {required}
                className = {className}
            />
        </div>
    )
}
  
export default InputComponent;