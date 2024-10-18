import React, { useState } from 'react';
import logo from "/LOGO.png";
import InputFieldComponent from '../../components/reUsableComponents/InputFieldComponent';
import SubmitButton from '../../components/reUsableComponents/SubmitButton';
//import InputFieldComponent from '../../ReUsableComponents/InputFieldComponent';
//import SubmitButton from '../../ReUsableComponents/SubmitButton';




const SignInPage = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className='bg-primary h-screen text-black flex flex-col justify-center items-center px-4 ' >
      
      <div className='mt-5 text-center flex'>
        <img src={logo} alt="logo" className='w-20 h-24 mx-auto me-3' />
        <h1 className='text-2xl font-bold mt-2 me-3'>Service Connect</h1>
      </div>

      <form className='flex flex-col gap-4 w-full max-w-sm font-default' onSubmit={handleSubmit}>
        <h2 className='text-xl font-semibold ml-3'>Welcome to your Franchise account</h2>
        <InputFieldComponent
          type="email"
          placeholder=" &#x2709; Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          color='bg-custom_gray placeholder-white text-white'
        />
        <InputFieldComponent
          type={showPassword ? "text" : "password"}
          placeholder="&#x1F512; Password "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isPassword={true}
          showPassword={showPassword}
          toggleShowPassword={() => setShowPassword(!showPassword)}
          color='bg-custom_gray border-2 border-gray-900  placeholder-white text-white'
        />
        <div className='flex justify-between p-2'>
          <p className='hover:text-blue-700'>
            <input type="checkbox" /> Remember Me
          </p>
          <a href="" className='hover:text-blue-700'>Forgot Password !</a>
        </div>
        <SubmitButton text="Sign In" />

      </form>

    </div>
  );
};

export default SignInPage;