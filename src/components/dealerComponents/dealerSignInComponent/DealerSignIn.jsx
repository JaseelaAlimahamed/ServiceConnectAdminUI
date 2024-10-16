import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "/LOGO.png";
import InputField from '../../reUsableComponents/InputFieldComponent';
import SubmitButton from '../../reUsableComponents/SubmitButton';

const DealerSignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    navigate('/dealer/dashboard')
  };

  return (
    <div className='bg-primary h-screen text-black flex flex-col justify-center items-center px-4'>
      <div className='mt-5 text-center flex'>
        <img src={logo} alt="logo" className='w-20 h-24 mx-auto me-3' />
        <h1 className='text-2xl font-bold mt-2 me-3'>Service Connect</h1>
      </div>

      <form className='flex flex-col gap-4 w-full max-w-sm font-default' onSubmit={handleSubmit}>
        <h2 className='text-xl font-semibold ml-3'>Welcome Back Dealer.!</h2>

        <InputField
          type="email"
          placeholder="Email"
          value={email}
          color='bg-light_gray placeholder-white text-white'
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          type="password"
          placeholder="Password"
          color='bg-light_gray placeholder-white text-white'
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

export default DealerSignIn;