import React, { useEffect, useState } from "react";
import InputComponent from "./inputComponent";



const FormComponent = ({fieldConfig, handleSubmit, handleChange}) =>{
    
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const initialFormData = fieldConfig.reduce((acc,field) => {
            acc[field.name] = '';
            return acc;
        }, {});
        setFormData(initialFormData);
    },[fieldConfig]);

    return(
        <div>
            <form onSubmit={handleSubmit}>
                {
                fieldConfig.map((field) => {
                    if(field.type==='dropdown'){
                        return(                            
                            <select className={field.className} name={field.name} value={field.v}>
                                <option selected disabled>{field.placeholder}</option>
                                {field.option.map((field) => <option className={field.className}>{field}</option>)}
                            </select>                          
                    )}
                    else{
                    return(
                        <InputComponent 
                            key={field.name}
                            name={field.name}
                            label={field.label}
                            type={field.type}
                            //value={formData[field.value] || ''}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required={field.required}
                            className={field.className}
                        />
                    )}
                })}

                
                
            </form>
        </div>
    )
}
export default FormComponent;