import React, { useState } from 'react';
import { FaPlus, FaEnvelope } from 'react-icons/fa';

const RecentActivities = ({RecentActivities}) => {
  console.log(RecentActivities)
  // Initialize user data using state
  const [users, setUsers] = useState([
    { id: 1, name: 'Samantha William', location: 'Kochi', isActive: false },
    { id: 2, name: 'Tony Soap', location: 'Kochi', isActive: true },
    { id: 3, name: 'Karen Hope', location: 'Kochi', isActive: false },
    { id: 4, name: 'Jordan Nico', location: 'Kochi', isActive: false },
    { id: 5, name: 'Nadila Adja', location: 'Kochi', isActive: false },
  ]);

  // handle view more

  const handleViewMore = () =>{
    alert("true")
  }
  const handleViewActivity = () =>{
    alert("true")
  }
  return (
    <div className="w-full ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-dark_blue">Recent Activities</h2>
        <button className="p-2 bg-dark_blue text-primary rounded-full">
          <FaPlus className="h-5 w-5" />
        </button>
      </div>

      <p className="text-sm text-light_gray mb-4">
        You have <span className="font-semibold text-purple-500">{RecentActivities.length}</span> New Users
      </p>

      {/* Activity List */}
      <ul className="space-y-4">
        {RecentActivities&&RecentActivities.map((user) => (
          <li key={user.id} onClick={handleViewActivity} className="flex justify-between items-center cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-light_gray rounded-full"></div>
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-light_gray">{user.location}</p>
              </div>
            </div>
            <button
              className={`p-2 rounded-full ${
                user.isActive
                  ? 'bg-dark_blue text-primary'
                  : 'border border-light_gray text-light_gray'
              }`}
            >
              <FaEnvelope />
            </button>
          </li>
        ))}
      </ul>

      {/* View More Button */}
      {RecentActivities.length>0&&<button onClick={handleViewMore} className="mt-8 w-full bg-blue_gray text-violet font-bold py-2 rounded-full">
        View More
      </button>}
    </div>
  );
};

export default RecentActivities;
