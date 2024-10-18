import { useState } from 'react';

const EditProfileForm = ({ user, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: user.name.split(' ')[0] || '',
    lastName: user.name.split(' ')[1] || '',
    email: user.email || '',
    phone: user.phone || '',
    password: '',
    nationality: user.country,
    designation: '',
    countryCode: '+1'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.countryCode + formData.phone,
      country: formData.nationality,
      designation: formData.designation,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white sm:w-[460px] md:w-[510px] rounded-lg shadow-md p-6 max-w-full mx-auto">
  <h1 className="font-nunito text-2xl sm:text-3xl leading-8 text-left">Edit Profile</h1>
  
  {/* Grid container */}
  <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2">
    
    <div className="relative">
      <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200">
        First Name
      </label>
      <input
        name="firstName"
        type="text"
        onChange={handleInputChange}
        value={formData.firstName}
        className="peer w-full h-14 p-2 px-4 pt-6 pb-1 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder=" "
      />
    </div>

    <div className="relative">
      <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200">
        Last Name
      </label>
      <input
        name="lastName"
        value={formData.lastName}
        type="text"
        onChange={handleInputChange}
        className="peer w-full h-14 p-2 px-4 pt-6 pb-1 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="relative">
      <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200">
        Email
      </label>
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        className="peer w-full h-14 p-2 px-4 pt-6 pb-1 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="relative flex">
      <select
        name="countryCode"
        value={formData.countryCode}
        onChange={handleInputChange}
        className="w-[80px] h-14 p-2 mr-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      >
        <option value="+1">+1</option>
        <option value="+91">+91</option>
        <option value="+81">+81</option>
        <option value="+86">+86</option>
      </select>

      <div className="relative flex-grow">
        <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200">
          Phone Number
        </label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="peer w-full h-14 p-2 px-4 pt-6 pb-1 rounded-r-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>

    <div className="relative">
      <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200">
        Password
      </label>
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        className="peer w-full h-14 p-2 px-4 pt-6 pb-1 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="relative">
      <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200">
        Nationality
      </label>
      <select
        name="nationality"
        value={formData.nationality}
        onChange={handleInputChange}
        className="peer w-full h-14 p-2 px-4 pt-6 pb-1 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      >
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Japan">Japan</option>
        <option value="China">China</option>
      </select>
    </div>

    <div className="relative">
      <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200">
        Designation
      </label>
      <select
        name="designation"
        value={formData.designation}
        onChange={handleInputChange}
        className="peer w-full h-14 p-2 px-4 pt-6 pb-1 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      >
        <option value="Intern UI">Intern UI</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Project Management">Project Management</option>
      </select>
    </div>

  </div>

  <div className="text-center mt-10">
    <button type="submit" className="mt-4 w-full sm:w-[195px] h-14 bg-[#5570F1] rounded-lg text-white py-2 px-4">Save</button>
  </div>
</form>

  );
};

export default EditProfileForm;
