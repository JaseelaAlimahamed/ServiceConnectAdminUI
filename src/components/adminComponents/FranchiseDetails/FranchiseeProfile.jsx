import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FranchiseeProfile = () => {
    const [franchisee, setFranchisee] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const FranchiseeDetails = () => {
            const franchiseeData = {
                id: 3543324,
                name: 'Franchisee Name',
                about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                address: 'Santha Street, Kanoor',
                contact: '1244557875',
                email: 'Santha@email.com',
                whatsapp: '125547883',
                profilePicture: 'https://via.placeholder.com/250x200'
            };
            setFranchisee(franchiseeData);
        };

        FranchiseeDetails();
    }, []);


    const handleEdit = () => {
        navigate(`/edit-franchisee/${franchisee.id}`);
    };

    const handleDashboard = () => {
        navigate(`/admin/dashboard`);
    };

    if (!franchisee) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray flex items-center justify-center p-4">
            <div className="w-full  max-w-4xl bg-white shadow-md rounded-lg p-6 md:p-8">

                <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-start">

                        <div className="w-64 h-48 bg-purple-200 rounded-lg overflow-hidden">
                            <img
                                src={franchisee.profilePicture}
                                alt="Profile Picture"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Franchisee Info */}
                        <div className="mt-4 md:mt-0 md:ml-6">
                            <h2 className="text-2xl font-semibold">{franchisee.name}</h2>
                            <p className="text-gray-500">#id: {franchisee.id}</p><br/><br/>
                            <p className="mt-2 text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <button
                            className="bg-purple text-white px-4 py-2 rounded-lg "
                            onClick={handleEdit} >Edit
                        </button>
                    </div>
                 </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

                    <div className='bg-white  p-6 md:p-8'>
                        <h3 className="text-xl font-semibold mb-4">About</h3>
                        <p className="text-gray-600">{franchisee.about}</p>
                    </div>
                    
                    <div className='bg-white  p-6 md:p-8'>
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <p className="text-gray-600">Address: {franchisee.address}</p>
                        <p className="text-gray-600">Contact: {franchisee.contact}</p>
                        <p className="text-gray-600">Email: {franchisee.email}</p>
                        <p className="text-gray-600">Whatsapp: {franchisee.whatsapp}</p>
                    </div>
                </div>

                <div className="mt-8 p-6 md:p-8 text-end">
                    <button className="bg-purple text-white px-6 py-3 rounded-lg hover:bg-blue-500" onClick={handleDashboard}>
                        View Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FranchiseeProfile;

