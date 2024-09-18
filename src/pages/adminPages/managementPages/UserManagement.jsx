import React, { useState } from 'react'
import Table from '../../../components/reUsableComnponent/Table'

const UserManagement = () => {

const tableConfig = {type:"usermanagement", title:""}


  const tableDataConfig = [
    
       
    {
        name: "Samanta William",
        id: "#124567985",
        id: "#129876543",
        date: "may 25, 2024",
        totalCompletedWork: "10",
        location: "Sydney",
        contact: { phone: "123456789", mail: "michael.smith@example.com" },
        status: "active"
    },
    
    {
        name: "Michael Smith",
        id: "#129876543",
        date: "december 25, 2023",
        totalCompletedWork: "10",
        location: "Sydney",
        contact: { phone: "123456789", mail: "michael.smith@example.com" },
        status: "active"
    },
    {
        name: "Samanta Willam",
        id: "#124567985",
        date: "March 25, 2022",
        totalCompletedWork: "5",
        location: "Mumbai",
        contact: { phone: "123469798", mail: "samantha@gmail.com" },
        status: "active"
    },
    {
        name: "John Doe",
        id: "#125678965",
        date: "April 10, 2022",
        totalCompletedWork: "8",
        location: "New York",
        contact: { phone: "987654321", mail: "john.doe@example.com" },
        status: "notActive"
    },
    {
        name: "Emily Clarke",
        id: "#127898765",
        date: "May 15, 2022",
        totalCompletedWork: "7",
        location: "London",
        contact: { phone: "456789012", mail: "emily.clarke@example.com" },
        status: "acive"
    },
    {
        name: "Michael Smith",
        id: "#129876543",
        date: "June 20, 2022",
        totalCompletedWork: "10",
        location: "Sydney",
        contact: { phone: "123456789", mail: "michael.smith@example.com" },
        status: "active"
    },
    {
        name: "Jessica Parker",
        id: "#124123789",
        date: "July 5, 2022",
        totalCompletedWork: "6",
        location: "Toronto",
        contact: { phone: "987123456", mail: "jessica.parker@example.com" },
        status: "notActive"
    },
    {
        name: "David Johnson",
        id: "#128912345",
        date: "August 30, 2022",
        totalCompletedWork: "9",
        location: "Berlin",
        contact: { phone: "654321987", mail: "david.johnson@example.com" },
        status: "active"
    },
    {
        name: "Sophia Lee",
        id: "#126543210",
        date: "September 14, 2022",
        totalCompletedWork: "12",
        location: "Tokyo",
        contact: { phone: "321654987", mail: "sophia.lee@example.com" },
        status: "acive"
    },
    {
        name: "Daniel Garcia",
        id: "#123654789",
        date: "October 1, 2022",
        totalCompletedWork: "4",
        location: "Paris",
        contact: { phone: "147852369", mail: "daniel.garcia@example.com" },
        status: "active"
    },
    {
        name: "Olivia Brown",
        id: "#124987321",
        date: "November 22, 2022",
        totalCompletedWork: "15",
        location: "San Francisco",
        contact: { phone: "789456123", mail: "olivia.brown@example.com" },
        status: "notActive"
    },
    {
        name: "Liam Wilson",
        id: "#123456798",
        date: "December 10, 2022",
        totalCompletedWork: "3",
        location: "Melbourne",
        contact: { phone: "963852741", mail: "liam.wilson@example.com" },
        status: "notActive"
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
  );
}


export default UserManagement
