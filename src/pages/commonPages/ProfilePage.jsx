import { useState, useEffect } from 'react';
import ProfileSidebar from '../../components/commonComponents/profileComponents/ProfileSideBar';
import EditProfileForm from '../../components/commonComponents/profileComponents/EditProfileForm';
import ProgressBar from '../../components/commonComponents/profileComponents/ProgressBar';
import { getUserProfile } from '../../service/api/admin/GetApi'; // Import the API call

const ProfilePage = () => {
  const [user, setUser] = useState(null); // Initially set user as null 
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors

  // Fetch user data from the API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserProfile(); // Fetch user profile
        setUser(data); // Update the state with fetched data
      } catch (err) {
        setError('Error fetching profile data'); // Set error if API call fails
      } finally {
        setLoading(false); // Set loading to false after data is fetched or error occurs
      }
    };

    fetchUserData();
  }, []); // Empty array means this will run once when the component mounts

  // If loading, show a loading spinner or message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there is an error, display the error message
  if (error) {
    return <div>{error}</div>;
  }

  // Ensure the user data is available before rendering the profile
  if (!user) {
    return <div>No user data available</div>;
  }

  const handleFormSubmit = (data) => {
    console.log(data);
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };

  return (
    <div className="container mx-auto p-10 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start mt-5">

        <div className="p-2">
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

