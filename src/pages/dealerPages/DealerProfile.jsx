import { useState } from 'react';
import ProfileSidebar from 'src/components/DealerComponents/Components/DealerProfileSide.jsx';
import EditProfileForm from 'src/components/DealerComponents/Components/EditProfileForm.jsx';
import ProgressBar from 'src/components/DealerComponents/Componenents/DealerProgressBar.jsx';

const DealerProfilePage = () => {
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
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col items-center gap-4 mt-5 md:flex-row">
        {/* Profile Sidebar */}
        <div className="w-full md:w-4/12 lg:w-3/12 p-4">
          <ProfileSidebar user={user} />
        </div>

        {/* Edit Profile Form */}
        <div className="w-full md:w-8/12 lg:w-6/12 p-4">
          <EditProfileForm user={user} onSubmit={handleFormSubmit} />
        </div>
      </div>

      {/* Progress Bar (on a new row in medium size) */}
      <div className="flex justify-center w-full mt-5">
        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-3/12 p-4">
          <ProgressBar workDone={user.workDone} />
        </div>
      </div>
    </div>
  );
};

export default DealerProfilePage;
