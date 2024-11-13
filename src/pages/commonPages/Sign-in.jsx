import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "/LOGO.png";
import InputField from '../../components/reUsableComponents/InputFieldComponent';
import SubmitButton from '../../components/reUsableComponents/SubmitButton';
import { changeRole, loginUser, setAccessToken } from '../../Redux/feathers/auth';
import { useDispatch, useSelector } from 'react-redux';
import { signInDealer } from '../../service/api/dealer/PostApi';
import { signInFranchise } from '../../service/api/franchise/PostApi';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'admin',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state for displaying messages
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {role} = useSelector(state => state.auth)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (name === 'role') {
      dispatch(changeRole(value)); // Dispatch changeRole action when role changes
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(''); // Reset error

    try {
      let response;

      if (formData.role === 'dealer') {
        response = await signInDealer(formData);
      } else if (formData.role === 'franchise') {
        response = await signInFranchise(formData);
      } else {
        setError('Invalid role selected');
        setLoading(false);
        return;
      }
      // Check if the API call was successful
      if (response) {
        dispatch(loginUser(response.data));
        console.log('Sign-in successful:', response);
        navigate('/dashboard');
      } else {
        setError(response.data.non_field_errors || 'Sign-in failed');
      }
    } catch (err) {
      console.error('Error during sign-in:', err);
      setError(err.non_field_errors ||'An error occurred during sign-in. Please try again.');
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className='bg-primary h-screen text-black flex flex-col justify-center items-center px-4'>
      <div className='mt-5 text-center flex'>
        <img src={logo} alt="logo" className='w-20 h-24 mx-auto me-3' />
        <h1 className='text-2xl font-bold mt-2 me-3'>Service Connect</h1>
      </div>

      <form className='flex flex-col gap-4 w-full max-w-sm font-default' onSubmit={handleSubmit}>
        <h2 className='text-xl font-semibold ml-3'>Login to your account</h2>
        {role}
        <InputField
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          isPassword={true}
          showPassword={showPassword}
          toggleShowPassword={() => setShowPassword(!showPassword)}
        />

        <div className='flex flex-col gap-2 w-full'>
          <label className='ml-3 text-gray-700'>Select Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className='p-2 border border-gray-300 rounded-md'
          >
            <option value="admin">Admin</option>
            <option value="dealer">Dealer</option>
            <option value="franchise">Franchise</option>
          </select>
        </div>

        <div className='flex justify-between p-2'>
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            /> Remember Me
          </label>
          <a href="">Forgot Password...!</a>
        </div>

        {error && <p className=" text-center text-red"> {error}</p>}
        <SubmitButton text={loading ? "Signing In..." : "Sign In"} disabled={loading} /> {/* Disable button while loading */}
      </form>
    </div>
  );
};

export default SignIn;
