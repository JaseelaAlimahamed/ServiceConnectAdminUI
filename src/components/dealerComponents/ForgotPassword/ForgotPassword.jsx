import React, { useState } from 'react';
import logo from "/LOGO.png";
import InputField from '../../reUsableComponents/InputFieldComponent';
import SubmitButton from '../../reUsableComponents/SubmitButton';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isOtpShow,setIsOtpShow] =useState(true)
    const [isPasswordShow, setIsPasswordShow] = useState(true);
    const [otp, setOtp] = useState('');
    const [rePassword, setRePassword] = useState('');
    const handleOtpChange = async (e) => {
        setOtp({otp});
        await setIsPasswordShow(false)
      };
    const handleNewPassword = async (e) => {
        if (password === rePassword){
          console.log({password,rePassword});
        }
      }
    const handleSubmitEmail = async (e) => {
      e.preventDefault();
      console.log({ email });
      await  setIsOtpShow(false)
    };
  
    return (
      <div className='bg-primary h-screen text-black flex flex-col justify-center items-center px-4'>
       <div className='mt-5 text-center flex'>
        <img src={logo} alt="logo" className='w-20 h-24 mx-auto me-3' />
        <h1 className='text-2xl font-bold mt-2 me-3'>Service Connect</h1>
      </div>
        {isOtpShow ? 
        <form className='flex flex-col gap-4 w-full max-w-sm font-default' onSubmit={handleSubmitEmail}>
          <h2 className='text-xl font-semibold ml-3'>Enter the your email</h2> 
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SubmitButton text="Sign In" />
        </form> : <div> 
            { isPasswordShow ?  
         <div>
         <form className='flex flex-col gap-4 w-full max-w-sm font-default' onSubmit={handleOtpChange}>
          <h2 className='text-xl font-semibold ml-3'>Enter the your otp</h2> 
          <InputField
            type="text"
            placeholder="enter the otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <SubmitButton text="Submit" />
        </form>
        </div> :
        <form className='flex flex-col gap-4 w-full max-w-sm font-default' onSubmit={handleNewPassword}>
          <h2 className='text-xl font-semibold ml-3'>Enter the your new password</h2>
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isPassword={true}
          showPassword={showPassword}
          toggleShowPassword={() => setShowPassword(!showPassword)}
          />
        <h2 className='text-xl font-semibold ml-3'>re-password</h2>
        <InputField
          type="password"
          placeholder="Password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          isPassword={true}
  
          
          />

        <SubmitButton text="Submit" />
      </form> 
        } 

       </div>
      }
      </div>
    );
  };
  

export default ForgotPassword;
