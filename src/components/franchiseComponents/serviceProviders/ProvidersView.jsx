import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProvidersView() {
  const navigate = useNavigate();
  
  // Demo data for service provider
  const [serviceProvider, setServiceProvider] = useState({
    id: '#256986256',
    name: 'John Doe',
    image: '/profile-pic.png',
    contact: {
      phone: '+1234567890',
      mail: 'john.doe@example.com',
    },
    registeredService: 'Plumbing',
    location: 'New York, USA',
    activejobs: '5',
    status: 'Active',
    descrption:'Much Better'
  });

  const [isEditing, setIsEditing] = useState(false);

  // State to hold edited form values
  const [editForm, setEditForm] = useState({ ...serviceProvider });

  // Function to handle the change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Function to save the edited data
  const handleSave = () => {
    setServiceProvider({ ...editForm }); // Update service provider with edited data
    setIsEditing(false); // Exit edit mode
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto mt-5 font-poppins">
    <div className="flex justify-between items-start">
      {/* Profile Picture */}
      <div className="w-40 h-40 bg-purple-200 rounded-lg">
        {/* <img src={serviceProvider.image} alt="Profile" className="w-full h-full object-cover rounded-lg" /> */}
        <svg fill="#000000" height="100px" width="100px" xmlns="http://www.w3.org/2000/svg" viewBox="-84.45 -84.45 571.06 571.06" xmlSpace="preserve" stroke="#000000" strokeWidth="10" className='bg-gray'>
            <g>
              <path d="M201.08,49.778c-38.794,0-70.355,31.561-70.355,70.355c0,18.828,7.425,40.193,19.862,57.151 c14.067,19.181,32,29.745,50.493,29.745c18.494,0,36.426-10.563,50.494-29.745c12.437-16.958,19.862-38.323,19.862-57.151 C271.436,81.339,239.874,49.778,201.08,49.778z M201.08,192.029c-13.396,0-27.391-8.607-38.397-23.616 c-10.46-14.262-16.958-32.762-16.958-48.28c0-30.523,24.832-55.355,55.355-55.355s55.355,24.832,55.355,55.355 C256.436,151.824,230.372,192.029,201.08,192.029z"></path>
              <path d="M201.08,0C109.387,0,34.788,74.598,34.788,166.292c0,91.693,74.598,166.292,166.292,166.292 s166.292-74.598,166.292-166.292C367.372,74.598,292.773,0,201.08,0z M201.08,317.584c-30.099-0.001-58.171-8.839-81.763-24.052 c0.82-22.969,11.218-44.503,28.824-59.454c6.996-5.941,17.212-6.59,25.422-1.615c8.868,5.374,18.127,8.099,27.52,8.099 c9.391,0,18.647-2.724,27.511-8.095c8.201-4.97,18.39-4.345,25.353,1.555c17.619,14.93,28.076,36.526,28.895,59.512 C259.25,308.746,231.178,317.584,201.08,317.584z M296.981,283.218c-3.239-23.483-15.011-45.111-33.337-60.64 c-11.89-10.074-29.1-11.256-42.824-2.939c-12.974,7.861-26.506,7.86-39.483-0.004c-13.74-8.327-30.981-7.116-42.906,3.01 c-18.31,15.549-30.035,37.115-33.265,60.563c-33.789-27.77-55.378-69.868-55.378-116.915C49.788,82.869,117.658,15,201.08,15 c83.423,0,151.292,67.869,151.292,151.292C352.372,213.345,330.778,255.448,296.981,283.218z"></path>
              <path d="M302.806,352.372H99.354c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h203.452c4.142,0,7.5-3.358,7.5-7.5 C310.307,355.73,306.948,352.372,302.806,352.372z"></path>
              <path d="M302.806,387.161H99.354c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h203.452c4.142,0,7.5-3.358,7.5-7.5 C310.307,390.519,306.948,387.161,302.806,387.161z"></path>
            </g>
          </svg>
      </div>

      {/* Display or Edit Name */}
      <div className="flex-1 ml-6">
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editForm.name}
            onChange={handleChange}
            className="text-xl font-bold text-gray-800 border-b border-gray-300"
          />
        ) : (
          <h2 className="text-2xl font-bold text-gray-800">{serviceProvider.name}</h2>
        )}
        <p className="text-gray-500 mb-4">{serviceProvider.id}</p>
        <p className="text-gray-500 mb-4"> {serviceProvider.registeredService}</p>

      </div>

      {/* Edit and Save Buttons */}
      {isEditing ? (
        <button className="bg-green-600 text-white rounded-full px-4 py-2" onClick={handleSave}>
          Save
        </button>
      ) : (
        <button
          className="bg-blue-600 text-white rounded-full px-4 py-2"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      )}
    </div>

    {/* About and Contact Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {/* About Section */}
      <div>
        <h3 className="font-semibold text-lg text-gray-700 mb-3">About</h3>
        {isEditing ? (
          <textarea
            name="descrption"
            placeholder='About'
            value={editForm.descrption}
            onChange={handleChange}
            className="w-full border-b border-gray-300 p-2"
          />
        ) : (
          <p className="text-gray-600">{serviceProvider.descrption}</p>
        )}
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="font-semibold text-lg text-gray-700 mb-3">Contact</h3>
        {isEditing ? (
          <>
            <input
              type="text"
              name="location"
              placeholder='Location'
              value={editForm.location}
              onChange={handleChange}
              className="w-full border-b border-gray-300 mb-2 p-2"
            />
            <input
              type="text"
              name="contact.phone"
              placeholder='Contact'
              value={editForm.contact.phone}
              onChange={(e) =>
                setEditForm((prevForm) => ({
                  ...prevForm,
                  contact: { ...prevForm.contact, phone: e.target.value },
                }))
              }
              className="w-full border-b border-gray-300 mb-2 p-2"
            />
            <input
              type="email"
              name="contact.mail"
              placeholder='Email'
              value={editForm.contact.mail}
              onChange={(e) =>
                setEditForm((prevForm) => ({
                  ...prevForm,
                  contact: { ...prevForm.contact, mail: e.target.value },
                }))
              }
              className="w-full border-b border-gray-300 mb-2 p-2"
            />
           
             <input
              type="text"
              name="status"
              value={editForm.status}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-2"
            />
          </>
        ) : (
          <>
            <p className="text-gray-600">
              <strong>Location: </strong>{serviceProvider.location}
            </p>
            <p className="text-gray-600">
              <strong>Phone: </strong>{serviceProvider.contact.phone}
            </p>
            <p className="text-gray-600">
              <strong>Email: </strong>{serviceProvider.contact.mail}
            </p>
            <p className="text-gray-600">
              <strong>Status: </strong>{serviceProvider.status}
            </p>
          </>
        )}
      </div>
    </div>
  </div>
  );
}

export default ProvidersView;
