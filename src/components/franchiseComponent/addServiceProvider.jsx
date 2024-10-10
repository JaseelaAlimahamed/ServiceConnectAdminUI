import React, { useRef, useState } from "react";
import FormComponent from "./formComponent";
import InputComponent from "./inputComponent";


function AddServiceProvider(){

    const fieldConfig = [
        {
            name : 'fullname',
            placeholder : 'Full Name',
            type : 'text',
            required : true,
            className : 'my-3 p-3 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-black',
        },
        {
            name : 'address',
            placeholder : 'Address',
            type : 'text',
            required : true,
            className : 'my-3 p-3 w-full bg-white border-none rounded-xl flex placeholder:text-black',
        },
        {
            name : 'dob',
            placeholder : 'Enter Your date of birth ',
            type : 'date',
            required : true,
            className : 'my-3 p-3 w-full  bg-white border-none rounded-xl flex placeholder:text-black',
        },
        {
            name : 'email',
            placeholder : 'Email',
            type : 'email',
            required : true,
            className : 'my-3 p-3 w-full block bg-white border-none rounded-xl text-justify flex placeholder:text-black',
        },
        {
            name : 'mobile',
            placeholder : 'Mobile number',
            type : 'tel',
            required : true,
            className : 'my-3 p-3 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-black',
        },
        {
            name : 'franchiseename',
            placeholder : 'Franchisee Name',
            type : 'dropdown',
            option : ['franchisee name 1','franchisee name 2','franchisee name 3'],
            required : true,
            className : 'my-3 p-3 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-black'
        },
        {
            name : 'password',
            placeholder : 'Password',
            type : 'password',
            required : true,
            className : 'my-3 p-3 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-black'
        },
        {
            name : 'gender',
            placeholder : 'Gender',
            type : 'dropdown',
            option : ['Male','Female'],
            required : true,
            className : 'my-3 p-3 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-black ',
        },
        {
            name : 'housename',
            placeholder : 'House name',
            type : 'text',
            required : true,
            className : 'my-3 p-3 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-black',
        },
        {
            name : 'landmark',
            placeholder : 'Landmark',
            type : 'text',
            required : true,
            className : 'my-3 p-3 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-black ',
        },
        {
            name : 'pincode',
            placeholder : 'Pincode',
            type : 'text',
            required : true,
            className : 'my-3 p-3 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-black',
        },
        {
            name : 'district',
            placeholder : 'District',
            type : 'text',
            required : true,
            className : 'my-3 p-3 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-black ',
        },
        {
            name : 'state',
            placeholder : 'State',
            type : 'text',
            required : true,
            className : 'my-3 p-3 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-black',
        },
        {
            name : 'verificationId',
            placeholder : 'Verification ID',
            type : 'dropdown',
            option : ['Aadhar','Voter-ID','Passport','Pan-card'],
            required : true,
            className : 'my-3 p-3 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-black',
        },
        {
            name : 'verificationNo',
            placeholder : 'Verification Number',
            type : 'text',
            required : true,
            className : 'my-3 p-3 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-black',
        },
        {
            name : 'type',
            placeholder : 'Type',
            type : 'dropdown',
            option : ['type 1','type 2','type 3','type 4'],
            required : true,
            className : 'my-3 p-3 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-black',
        },
    ];

    const [formData, setFormData] = useState({
        photo:'',
        fullname:'',
        address:'',
        dob:'',
        email:'',
        mobile:'',
        gender:'',
        housename:'',
        landmark:'',
        pincode:'',
        district:'',
        state:'',
    })

    const inputRef = useRef(null);
    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return(
            <div className=" h-max m-5 bg-lite_blue2 rounded-b-md shadow-md">

                <div className=" h-1/6 bg-dark_blue rounded-t-md">
                    <h1 className="text-primary text-2xl py-2 px-3 text-justify m-auto">Service Provider Details</h1>
                </div>

                <div className="justify-start md:flex gap-8 grid">

                    <div className="w-48 h-52 px-8" onClick={handleImageClick}>
                        <h1 className="text-dark_blue text-lg font-semibold">Photo *</h1>

                        <div className="bg-primary w-40 h-40 flex justify-center items-center rounded-md border border-[#A098AE] border-dashed">
                            <p className="text-center text-[#A098AE] text-sm">Drag and drop or click here to select file</p>
                        </div>

                        <input type="file" ref={inputRef} className='hidden' />
                        
                    </div>

                    <div className="px-8">
                        <FormComponent
                            fieldConfig = {fieldConfig}
                            onSubmit = {HandleSubmit}
                            handlerChange = {handleChange}  
                        />
                    </div> 
                </div>
            </div>
    )
};
export default AddServiceProvider;