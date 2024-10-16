import React from "react";


const ButtonComponent = ({
    type = 'button',
    children,
    onClick,
    disabled,
    loading,
    className,
}) => {
    return (
        <div className="mt-3">
            
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                loading={loading}
                className={className}
            >
                {children}
            </button>
        </div>
    );
};

export default ButtonComponent;