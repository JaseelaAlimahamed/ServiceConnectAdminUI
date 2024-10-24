import React from 'react'
import UserManagementCard from '../../adminComponents/userManagement/UserManagementCard';
import Table from '../../../components/reUsableComponents/Table';


const UserManagement = () => {

    const tableConfig = {type:"usermanagement", title:""}


  const tableDataConfig = [
       
    {
        name: "Samanta William",
        id: "#129876543",
        date: "May 25, 2024",
        totalCompletedWork: "10",
        location: "Sydney",
        image:"/tableimage.png",
        contact: { phone: "123456789", mail: "michael.smith@example.com" },
        status: "Active"
    },
    
    {
        name: "Michael Smith",
        id: "#122345343",
        date: "December 25, 2023",
        image:"/tableimage.png",
        totalCompletedWork: "10",
        location: "Sydney",
        contact: { phone: "123456789", mail: "michael.smith@example.com" },
        status: "Not Active"
    },
    {
        name: "Samanta Willam",
        id: "#134567985",
        date: "March 25, 2022",
        image:"/tableimage.png",
        totalCompletedWork: "5",
        location: "Mumbai",
        contact: { phone: "123469798", mail: "samantha@gmail.com" },
        status: "Active"
    },
    {
        name: "John Doe",
        id: "#125538065",
        date: "April 10, 2022",
        image:"/tableimage.png",
        totalCompletedWork: "8",
        location: "New York",
        contact: { phone: "987654321", mail: "john.doe@example.com" },
        status: "Not Active"
    },
    {
        name: "Emily Clarke",
        id: "#127838765",
        date: "May 15, 2022",
        image:"/tableimage.png",
        totalCompletedWork: "7",
        location: "London",
        contact: { phone: "456789012", mail: "emily.clarke@example.com" },
        status: "Active"
    },
    {
        name: "Michael Smith",
        id: "#129846543",
        date: "June 20, 2022",
        image:"/tableimage.png",
        totalCompletedWork: "10",
        location: "Sydney",
        contact: { phone: "123456789", mail: "michael.smith@example.com" },
        status: "Active"
    }
];

const tableColConfig = ["Name","ID","Date","Total Completed Services","Location","Contact","Status","Action"]

const cardConfig = [
  {title:"22K",subtitle:"Total Users", iconBg:"bg-[#6F4FF2]"},
  {title:"82K",subtitle:"Online", iconBg:"bg-[#50BB25]"},
  {title:"200",subtitle:"Service Requests", iconBg:"bg-[#F9D62C]"},
  {title:"89",subtitle:"Lead Requests", iconBg:"bg-[#28B5E1]"},
  {title:"89",subtitle:"Active Services", iconBg:"bg-[#167F71]"},
  {title:"89",subtitle:"Complaints", iconBg:"bg-[#DC3546]"},
]

  return (
    <div className="w-full font-poppins px-6 pb-10 ">
      <div className="flex flex-wrap gap-2 pb-10">
        {cardConfig.map((item) => (
          <UserManagementCard item={item} />
        ))}
      </div>

      <Table
        tableColConfig={tableColConfig}
        tableDataConfig={tableDataConfig}
        tableConfig={tableConfig}
      />     
    </div>
  );
}


export default UserManagement