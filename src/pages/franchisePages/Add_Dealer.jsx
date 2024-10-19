import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-datepicker/dist/react-datepicker.css';
import PhotoUpload from '../../components/FranchiseComponents/dealers/ProfilePhotoResuable';
import Button from '../../components/FranchiseComponents/dealers/ButtonReusable';



const AddNewDealer = () => {
  const [formData, setFormData] = useState({
    dealerProfile: null,  // Initial file state set to null
    fullName: '',
    address: '',
    FranchiseName:'',
    dob: '',
    email: '',
    phone1: '',
    phone2: '',
    password:'',
    gender: '',
    houseName: '',
    landmark: '',
    pincode: '',
    district: '',
    state: '',
    verificationId:'',
    verificationNo:'',
    idCopyfile:null,
    status:''
  });
  // Handle phone number update
  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
  };
  
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };


  // Handle generic input change including file input
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, file: files[0] }); // Handle file input
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle file directly from InputField for file upload
  const [fileName, setFileName] = useState('');
  const handleIDFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Set the file name when a file is selected
    }
  };

  const [selectedFile, setSelectedFile] = useState(null);

  // Form submission
  const onFormSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      fileName: formData.file ? formData.file.name : 'No file uploaded', // Include file name or note if not uploaded
    };
    console.log(submissionData); // Log the formData with the file name
  };

  return (   
      
      <div className="flex flex-col  max-w-full mt-4 mr-3 min-h-screen w-full bg-blue_bg">        
        <div className="flex flex-col container mx-auto mt-5 p-4 max-w-4xl justify-center  min-h-screen bg-white ">
        <form className="flex flex-col bg-primary  w-full rounded-none mx-auto"  onSubmit={onFormSubmit}>
          <div className='flex flex-col w-full m-5 md:flex-row gap-4 '>           
           <div className="flex justify-center">
           <div className='bg-blue_bg w-48 h-48 ml-8 mt-8 '>
              <PhotoUpload title="Photo*" />
            </div>
           </div>
          <div className="flex-1 w-3/4  ml-8 mt-8 mr-20 space-y-4 justify-center">
            <input  type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className='p-4 w-full rounded bg-blue_bg placeholder-secondary' required/>
            <input className='p-4 w-full rounded bg-blue_bg placeholder-secondary' type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            <input className='p-4 w-full rounded bg-blue_bg placeholder-secondary' type="text" name="franchiseName" placeholder="Franchise Name" value={formData.franchiseName} onChange={handleChange} />
            <input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} className='p-4 w-full rounded bg-blue_bg placeholder-secondary'/>
            <div className="relative">
            <PhoneInput country={'us'} value={formData.phone1 } onChange={handlePhoneChange} inputClass="w-[496px] h-6 p-4 pl-14 text-gray-900 bg-blue_bg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
             buttonClass="absolute left-0  h-full flex items-center justify-center "  containerClass="flex items-center" placeholder="+1 345-678-3456" inputStyle={{ width: '100%',height: '50px', padding: '16px',paddingLeft: '3.5rem',  backgroundColor: '#F3F4FF',  border:"none" }}inputProps={{
             required: true, autoFocus: false, name: "phone1"|| '', }}/>
             </div>
             <div className="relative">
            <PhoneInput country={'us'} value={formData.phone2 } onChange={handlePhoneChange} inputClass="w-[496px] h-6 p-4 pl-14 text-gray-900 bg-blue_bg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
             buttonClass="absolute left-0  h-full flex items-center justify-center "  containerClass="flex items-center" placeholder="+1 345-678-3456" inputStyle={{ width: '100%',height: '50px', padding: '16px',paddingLeft: '3.5rem',  backgroundColor: '#F3F4FF',  border:"none" }}inputProps={{
             required: true, autoFocus: false, name: "phone2"|| '', }}/>
             </div>   
             <div className="relative w-full bg-blue_bg">
             <input type={showPassword ? "text" : "password"} value={formData.password} name="password" onChange={handleChange} placeholder="Password" className='p-4 w-full rounded bg-blue_bg placeholder-secondary'/>
             {formData.password &&(<button type="button" onClick={togglePasswordVisibility} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700" >{showPassword ? "Hide" : "Show"}</button>)}
              </div>
            
            <input placeholder="Landmark" className='p-4 w-full rounded bg-blue_bg placeholder-secondary' type="text" name="landmark" value={formData.landmark} onChange={handleChange} />
            <input placeholder="Pincode" className='p-4 w-full rounded bg-blue_bg placeholder-secondary' type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
            <input placeholder="District" className='p-4 w-full rounded bg-blue_bg placeholder-secondary' type="text" name="district" value={formData.district} onChange={handleChange} />
            <input placeholder="State" className='p-4 w-full rounded bg-blue_bg placeholder-secondary' type="text" name="state" value={formData.state} onChange={handleChange} />
            <div className="relative w-full">
            <select id="verificationId" name="verificationId" value={formData.verificationId} onChange={handleChange}  className="w-full h-full p-4 pr-10 bg-blue_bg  border:none" required>
              <option value="Verification Id">Verification Id</option>
              <option value="aadhar">Aadhar Card</option>
              <option value="driving">Driving License</option>
              <option value="voter">Voter ID</option>
            </select>            
          </div>        
            <input placeholder="Verification No" className='p-4 w-full rounded bg-blue_bg placeholder-secondary' type="text" name="verificationNo" value={formData.verificationNo} onChange={handleChange} />
            <div className="relative  w-full">
              <div className="flex items-center justify-between w-full p-4 h-11 bg-blue_bg  rounded-md placeholder-gray-900">
              <span className="text-gray-900">{fileName ? fileName : 'ID Copy'}</span>      
              <div className="absolute right-4 inset-y-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4zm11 10H5v-2h10v2zm0-4H5V7h10v2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>            
            <input id="idCopy"  type="file" accept="image/*,application/pdf"   onChange={handleIDFileChange}  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"/>  
          </div> 
          <div className="relative w-full bg-blue_bg">
            <select id="status" name="status" value={formData.status} onChange={handleChange} className="w-full h-full p-4 pr-10 bg-blue_bg  border:none" required> 
              <option value="">Status </option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>            
          </div>
          </div>
          </div>
          <div className="flex justify-end mt-9 my-6 md:flex-row gap-4">
          <Button className="bg-red hover:bg-soft_red text-white font-bold py-2 px-7 mx-3 rounded-3xl " title = "Delete" type=""/>
          <Button className="bg-blue_bg hover:bg-text-white text-violet font-bold py-2 px-7 border-2 border-text-violet  mx-3 rounded-3xl border-violet" title = "Save as Draft" type=""/>
          <Button className="bg-violet hover:bg-blue-700 text-white font-bold py-2 px-7  mx-3 rounded-3xl "  title = "Submit" type="submit"/>
         </div>
        </form>      
      </div>
    </div>

   
  );
};

export default AddNewDealer;


