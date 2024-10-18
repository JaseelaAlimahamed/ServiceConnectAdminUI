import { useState } from 'react';
import ProfileSidebar from '../../../components/adminComponents/adminProfileComponents/ProfileSideBar';
import EditProfileForm from '../../../components/adminComponents/adminProfileComponents/EditProfileForm';
import ProgressBar from '../../../components/adminComponents/adminProfileComponents/ProgressBar';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'Yash Ghori',
    location: 'Ahmedabad, Gujarat',
    country: 'India',
    role: 'Administrator',
    phone: '7048144031',
    email: 'yghori@asite.com',
    pdt: 'PDT-1',
    image: 'https://s3-alpha-sig.figma.com/img/04fb/29ee/118d396f344624b878b77f40697b426b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CmrFuFUTmgIm4xqrCLejmiqEsM3S5fENMqIQ0rsEQuJABiT9HCfsz4dtbotGUE2XDOly2tAS~5Tehy8cOwRE~jqKriAX~61qOoYsWpVIOGitO~hFfAqd7rxXi7ZWbPe4qyAPZsZ7rGIo7LhHZRavWmujgaQeziVwfhd~LOLQ2lW1ooakVgoMnY9P0YdXk1cqfsYm-tLQAcZcfU8VTwGks-edaZDmJ~JHXNPaVVM0UbSoup~o9njfJ3JI8WFp5aPniE~XB8DRnfaX4RUYWgncEtuskpgTZFCmapFRSodN8bzPx1OZXJwhB59FMeaSb36GDdjXPXrJSlDAMWxn0Xuljg__',
    workDone: '5w 2d'
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
  <div className="flex flex-col items-center gap-5 mt-5 md:flex-row md:items-start">
    {/* Profile Sidebar */}
    <div>
      <ProfileSidebar user={user} />
    </div>

    {/* Edit Profile Form */}
    <div  className="mt-8 sm:mt-0">
      <EditProfileForm user={user} onSubmit={handleFormSubmit} />
    </div>
  
    <div  className="mt-8 sm:mt-0">
      <ProgressBar workDone={user.workDone} />
    </div>
  </div>
  
</div>
  )
}
export default ProfilePage;
