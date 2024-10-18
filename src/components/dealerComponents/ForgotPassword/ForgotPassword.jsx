import React, { useState } from 'react';
import InputField from '../../reUsableComponents/InputFieldComponent';
import SubmitButton from '../../reUsableComponents/SubmitButton';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isOtpShow,setIsOtpShow] =useState(false)
    const handleSubmitEmail = (e) => {
      e.preventDefault();
      console.log({ email });
        
    };
  
    return (
      <div className='bg-primary h-screen text-black flex flex-col justify-center items-center px-4'>
        <form className='flex flex-col gap-4 w-full max-w-sm font-default' onSubmit={handleSubmitEmail}>
          <h2 className='text-xl font-semibold ml-3'>Enter the your email</h2> 
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SubmitButton text="Sign In" />
        </form>
        <form className='flex flex-col gap-4 w-full max-w-sm font-default' onSubmit={handleSubmit}>
        <h2 className='text-xl font-semibold ml-3'>Login to your account</h2>
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isPassword={true}
          showPassword={showPassword}
          toggleShowPassword={() => setShowPassword(!showPassword)}
        />

        <div className='flex justify-between p-2'>
          <p>
            <input type="checkbox" /> Remember Me
          </p>
          <a href="">Forgot Password...!</a>
        </div>

        <SubmitButton text="Sign In" />
      </form>
      </div>
    );
  };
  

export default ForgotPassword;
