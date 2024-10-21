import ProfilePhone from '../../../assets/icons/ProfilePhone.svg'
import ProfileRole from '../../../assets/icons/ProfileRole.svg'
import ProfileEmail from '../../../assets/icons/ProfileEmail.svg'
import ProfilePdt from '../../../assets/icons/ProfilePdt.svg'


const ProfileSidebar = ({ user }) => (
  <div className="w-[270px] p-4 bg-white rounded-lg shadow-md text-center  overflow-hidden">
    <div className="flex flex-col items-center">


    <div className="relative w-[170px] h-[170px]">
     {/* Pink border around the image */}
    <div className="absolute inset-0 rounded-full border-[3px] border-[#ED2590] transition-all duration-300"></div>
  
    {/* Responsive image with smooth transition */}
    <img 
    src={user.image || 'https://via.placeholder.com/150'}  
    alt={`Profile picture of ${user.name}`} 
    className="w-full h-full rounded-full object-cover transition-all duration-300 p-2"
    />
  </div>


      
      <div className="mt-4">
        <span className="-mt-5 font-roboto text-base sm:text-lg font-bold leading-6 tracking-wide text-center">{user.name}</span><br />
        <span className="mt-5 font-roboto text-sm sm:text-base font-normal leading-6 tracking-wide text-center">{user.location}</span><br />
        <span className="font-roboto text-sm sm:text-base font-normal leading-6 tracking-wide text-center">{user.country}</span>
      </div>
    </div>


    <div className="mt-4 sm:mx-10">
  <p className="inline-flex items-center mt-2 hover:border-t hover:border-b hover:border-gray-300 p-4 max-w-fit">
    <span className="mr-2 flex-shrink-0">
    <img src={ProfileRole} alt="Role Icon" className="w-6 h-6" />
    </span>
    {user.role}
  </p> <br/>

  <p className="inline-flex items-center mt-2 hover:border-t hover:border-b hover:border-gray-300 p-4 max-w-fit">
    <span className="mr-2 flex-shrink-0">
    <img src={ProfilePhone} alt="Phon Icon" className="w-6 h-6" />
    </span>
    {user.phone}
  </p> <br/>

  <p className="inline-flex items-center mt-2 hover:border-t hover:border-b hover:border-gray-300 p-4 max-w-fit">
    <span className="mr-2 flex-shrink-0">
    <img src={ProfileEmail} alt="Email Icon" className="w-6 h-6" />
    </span>
    {user.email}
  </p>

  <br />

  <p className="inline-flex items-center mt-2 hover:border-t hover:border-b hover:border-gray-300 p-4 max-w-fit">
    <span className="mr-2 flex-shrink-0">
      <img src={ProfilePdt} alt="PT icon" className='w-6 h-6' />
    </span>
    {user.pdt}
  </p>
</div>
</div>

);

export default ProfileSidebar;
