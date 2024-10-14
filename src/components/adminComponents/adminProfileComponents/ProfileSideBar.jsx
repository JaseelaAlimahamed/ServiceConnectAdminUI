// components/ProfileSidebar.jsx
const ProfileSidebar = ({ user }) => (
  <div className="w-[270px] h-[427px] p-4 bg-white rounded-lg shadow-md text-center  overflow-hidden">
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


    <div className="mt-4 mx-2 sm:mx-10"> {/* Use mx for horizontal margin */}
  <p className="inline-flex items-center mt-2 hover:border-t hover:border-b hover:border-gray-300 p-4">
    <span className="mr-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    </span>
    {user.role}
  </p> <br/>

  <p className="inline-flex items-center mt-2 hover:border-t hover:border-b hover:border-gray-300 p-4">
    <span className="mr-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
      </svg>
    </span>
    {user.phone}
  </p> <br/>

  <p className="inline-flex items-center mt-2 hover:border-t hover:border-b hover:border-gray-300 p-4">
    <span className="mr-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    </span>
    {user.email}
  </p>

  <br />

  <p className="inline-flex items-center mt-2 hover:border-t hover:border-b hover:border-gray-300 p-4">
    <span className="mr-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    </span>
    {user.pdt}
  </p>
</div>
</div>

);

export default ProfileSidebar;
