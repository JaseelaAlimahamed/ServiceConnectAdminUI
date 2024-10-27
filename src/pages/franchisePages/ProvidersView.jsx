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
    setServiceProvider({ ...editForm });
    setIsEditing(false);
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto mt-5 font-poppins">
    <div className="flex justify-between items-start">
      {/* Profile Picture */}
      <div className="w-40 h-40 bg-purple-200 rounded-lg">
        <img src={serviceProvider.image} alt="Profile" className="w-full h-full object-cover rounded-lg" />
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
