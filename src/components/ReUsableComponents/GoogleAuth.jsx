import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleLoginButton = () => {

    const handleGoogleLogin = async () => {
        try {
            //api call
            console.log('Google login is working!');

        } catch (error) {
            console.log('Google login failed!', error);
        }
    };

    return (
        <div>
            <button
                onClick={handleGoogleLogin}
                className="flex justify-center bg-primary shadow-lg rounded-full p-3 hover:bg-slate-300"
            >
                <FcGoogle className="text-2xl" />
            </button>
        </div>
    );
};

export default GoogleLoginButton;
