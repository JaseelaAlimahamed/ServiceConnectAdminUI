import { useState } from 'react';
import ProfileSidebar from '../../components/adminComponents/adminProfileComponents/ProfileSideBar';
import EditProfileForm from '../../components/adminComponents/adminProfileComponents/EditProfileForm';
import ProgressBar from '../../components/adminComponents/adminProfileComponents/ProgressBar';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'Yash Ghori',
    location: 'Ahmedabad, Gujarat',
    country: 'India',
    role: 'Administrator',
    phone: '7048144031',
    email: 'yghori@asite.com',
    pdt: 'PDT-1',
    image: 'https://s3-alpha-sig.figma.com/img/04fb/29ee/118d396f344624b878b77f40697b426b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fVkuMCoy3jvsSqaqSHsGSMuyQFe~R-1sg7J2W-Bg-yHUlV-gdShxTpbUoKhdetgjUH4WDlOZ1IUfC0z~s8kaOuWqTrdN5aGzR8Zmosfz-0DR3N4UKb1p6SBLSaB4cuYBb-F~gAUArziWHdn2tKs3NKvOQhRvTpARy5gTMpea0Z-hkcKhrdmkSm-Sfh-KkiNnyhbuoZ~kfFTgqsiX3f-Bol8aVNPk1hHc-Wk~CUUavuoUFcPgtYxzYmIAfMwiwpukojbVDA8RV~toLSMPMl0CnbStlrs25dRMIAcbwxMCj4VAnt7~ip818ls4CcXdfspGxOP3s7f3pGrYUIvg1Q-EuQ__',
    workDone: '5w 2d'
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };

  return (
    <div className="container mx-auto p-10 bg-gray-50 min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start mt-5">
    {/* Profile Sidebar */}
    <div className="p-2">
      <ProfileSidebar user={user} />
    </div>

    {/* Edit Profile Form */}
    <div className="p-2">
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
