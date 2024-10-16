import React, { useRef, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import FormComponent from "./formComponent";


function AddServiceProvider(){

    const fieldConfig = [
        {
            name : 'fullname',
            placeholder : 'Full Name',
            type : 'text',
            required : true,
            className : 'my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]',
        },
        {
            name : 'address',
            placeholder : 'Address',
            type : 'text',
            required : true,
            className : 'my-3 p-2 h-10 w-full bg-white border-none rounded-xl flex placeholder:text-[#505050]',
        },
        {
            name : 'dob',
            type : 'date',
            placeholder : 'Date of Birth',
            required : true,
            className : 'my-3 p-2 h-10 w-full bg-white border-none rounded-xl flex text-[#505050] focus:placeholder',
        },
        {
            name : 'email',
            placeholder : 'Email',
            type : 'email',
            required : true,
            className : 'my-3 p-2 h-10 w-full block bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]',
        },
        {
            name : 'mobile',
            placeholder : 'Mobile number',
            type : 'tel',
            required : true,
            className : 'my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]',
        },
        {
            name : 'franchiseename',
            placeholder : 'Franchisee Name',
            type : 'dropdown',
            option : ['franchisee name 1','franchisee name 2','franchisee name 3'],
            required : true,
            className : 'my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050] list-item'
        },
        {
            name : 'password',
            placeholder : 'Password',
            type : 'password',
            required : true,
            className : 'my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]'
        },
        {
            name : 'gender',
            placeholder : 'Gender',
            type : 'dropdown',
            option : ['Male','Female'],
            required : true,
            className : 'my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]',
        },
        {
            name : 'housename',
            placeholder : 'House name',
            type : 'text',
            required : true,
            className : 'my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]',
        },
        {
            name : 'landmark',
            placeholder : 'Landmark',
            type : 'text',
            required : true,
            className : 'my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050] ',
        },
        {
            name : 'pincode',
            placeholder : 'Pincode',
            type : 'text',
            required : true,
            className : 'my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]',
        },
        {
            name : 'district',
            placeholder : 'District',
            type : 'text',
            required : true,
            className : 'my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050] ',
        },
        {
            name : 'state',
            placeholder : 'State',
            type : 'text',
            required : true,
            className : 'my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]',
        },
        {
            name : 'verificationId',
            placeholder : 'Verification ID',
            type : 'dropdown',
            option : ['Voter-ID','Passport','Pan-card','License'],
            required : true,
            className : 'my-3 p-2 h-10 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]',
        },
        {
            name : 'verificationNo',
            placeholder : 'Verification Number',
            type : 'text',
            required : true,
            className : 'my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]',
        },
        {
            name : 'type',
            placeholder : 'Type',
            type : 'dropdown',
            option : ['Cleaning','Repairing','Electrical','Masonry'],
            required : true,
            className : 'my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]',
        },
    ];

    const buttonConfig = [
        {
            type : 'button',
            children : 'Delete',
            className : 'my-6  h-12 px-8 py-2 flex bg-[#E20000] border-2 text-white text-md rounded-3xl lg:w-18 hover:bg-white hover:text-[#E20000]',
        },
        {
            type : 'submit',
            children : 'Save as Draft',
            className : 'my-4  h-12 px-4 py-2 flex bg-white border-2 text-[#4D44B5] rounded-3xl text-sm sm:text-md hover:bg-[#4D44B5] hover:text-white',
        },
        {
            type : 'submit',
            children : 'Submit',
            className : 'my-4  h-12 px-4 py-2 flex bg-[#4D44B5] border-2 text-white text-md rounded-3xl hover:bg-white hover:text-[#4D44B5]',
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
        <div className="min-h-screen p-6">
            <div className="max-w-6xl mt-4 mx-auto bg-lite_blue2 rounded-b-md shadow-md">

                <div className="  bg-[#4D44B5] rounded-t-md">
                    <h1 className="text-primary text-2xl py-2 px-3 text-justify m-auto">Service Provider Details</h1>
                </div>

                <div className="justify-center sm:justify-normal sm:flex grid">

                    <div className="w-fit h-52 mx-auto mt-8 grid sm:mx-8 cursor-pointer" onClick={handleImageClick}>
                        <h1 className="text-dark_blue text-lg font-semibold">Photo *</h1>

                        <div className="bg-primary w-40 h-40 p-2 flex justify-center items-center rounded-md border-2 border-[#C1BBEB] border-dashed">
                            <p className="text-center text-[#A098AE] text-sm">Drag and drop or click here to select file</p>
                        </div>

                        <input type="file" ref={inputRef} className='hidden' />
                        
                    </div>

                    <div className="mx-auto sm:mx-4 mt-8 sm:w-96 sm:px-auto md:px-auto">
                        <FormComponent
                            fieldConfig = {fieldConfig}
                            onSubmit = {HandleSubmit}
                            handlerChange = {handleChange}  
                        />
                        <p className="font-semibold text-sm flex justify-center p-2">#Other info as required</p>
                    </div> 
                </div>

            </div>
            <div className="max-w-6xl flex gap-2 justify-center items-center mx-auto sm:gap-8 sm:justify-end">
                {
                    buttonConfig.map((btn) => (
                        <ButtonComponent
                            key = {btn.key}
                            type = {btn.type}
                            children = {btn.children}
                            className = {btn.className}
                        />
                    ))
                }
            </div>
        </div>
    )
};
export default AddServiceProvider;