import React from 'react'
import Table from '../../../components/reUsableComponents/Table'

const UserManagement = () => {

    const tableConfig = {type:"usermanagement", title:""}


  const tableDataConfig = [
       
    {
        name: "Samanta William",
        id: "#129876543",
        date: "may 25, 2024",
        totalCompletedWork: "10",
        location: "Sydney",
        image:"/tableimage.png",
        contact: { phone: "123456789", mail: "michael.smith@example.com" },
        status: "Active"
    },
    
    {
        name: "Michael Smith",
        id: "#122345343",
        date: "december 25, 2023",
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
    
  
    
  return (
      <div className="w-full bg-[#F3F4FF] p-10">
      <Table
        tableColConfig={tableColConfig}
        tableDataConfig={tableDataConfig}
        tableConfig={tableConfig}
      />
     
    </div>
    



  )
}


export default UserManagement