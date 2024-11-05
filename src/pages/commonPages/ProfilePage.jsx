import { useState } from 'react';
import ProfileSidebar from '../../components/commonComponents/profileComponents/ProfileSideBar';
import EditProfileForm from '../../components/commonComponents/profileComponents/EditProfileForm';
import ProgressBar from '../../components/commonComponents/profileComponents/ProgressBar';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'Yash Ghori',
    location: 'Ahmedabad, Gujarat',
    country: 'India',
    role: 'Administrator',
    phone: '7048144031',
    email: 'yghori@asite.com',
    pdt: 'PDT-1',
    image: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
    workDone: '5w 2d'
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };

  return (
    <div className="container mx-auto p-10 bg-gray-50 min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start mt-5">
    {/* Profile Sidebar */}
    <div className="p-">
      <ProfileSidebar user={user} />
    </div>

    {/* Edit Profile Form */}
    <div className="p-2 col-span-2">
      <EditProfileForm user={user} onSubmit={handleFormSubmit} />
    </div>

    {/* Progress Bar */}
    <div className="p-2">
      <ProgressBar workDone={user.workDone} />
    </div>
  </div>
</div>

  );
};

export default ProfilePage;
