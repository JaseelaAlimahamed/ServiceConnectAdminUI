import { useState, useEffect } from 'react';

import ProfileSidebar from '../../components/adminProfileComponents/ProfileSideBar';
import EditProfileForm from '../../components/adminProfileComponents/EditProfileForm';
import ProgressBar from '../../components/adminProfileComponents/ProgressBar';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'Yash Ghori',
    location: 'Ahmedabad, Gujarat',
    country: 'India',
    role: 'Administrator',
    phone: '+91 7048144031',
    email: 'yghori@asite.com',
    pdt: 'PDT-1',
    image: 'https://s3-alpha-sig.figma.com/img/04fb/29ee/118d396f344624b878b77f40697b426b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fVkuMCoy3jvsSqaqSHsGSMuyQFe~R-1sg7J2W-Bg-yHUlV-gdShxTpbUoKhdetgjUH4WDlOZ1IUfC0z~s8kaOuWqTrdN5aGzR8Zmosfz-0DR3N4UKb1p6SBLSaB4cuYBb-F~gAUArziWHdn2tKs3NKvOQhRvTpARy5gTMpea0Z-hkcKhrdmkSm-Sfh-KkiNnyhbuoZ~kfFTgqsiX3f-Bol8aVNPk1hHc-Wk~CUUavuoUFcPgtYxzYmIAfMwiwpukojbVDA8RV~toLSMPMl0CnbStlrs25dRMIAcbwxMCj4VAnt7~ip818ls4CcXdfspGxOP3s7f3pGrYUIvg1Q-EuQ__',
    workDone: '5w 2d'
  });

  const handleFormSubmit = (data) => {
    // Logic to update the profile
    console.log(data);
    // Update the user state with new data (if necessary)
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };

  return (
    <div className="flex flex-col items-center md:flex-row lg:flex-row gap-4 p-6 bg-gray-50 min-h-screen">
  <div className="w-full md:w-1/4 lg:w-1/4 flex justify-center">
    <ProfileSidebar user={user} />
  </div>
  <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center">
    <EditProfileForm user={user} onSubmit={handleFormSubmit} />
  </div>
  <div className="w-full md:w-1/4 lg:w-1/4 flex justify-center">
    <ProgressBar workDone={user.workDone} />
  </div>
</div>

  );
};

// PropTypes validation
ProfilePage.propTypes = {
  // Define prop types if necessary for child components
};

export default ProfilePage;
