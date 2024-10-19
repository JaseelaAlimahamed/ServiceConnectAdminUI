import React from 'react';
import payouticon from '../../assets/AdminAssets/payoutIcon1.png';
import payouticonF from '../../assets/AdminAssets/payoutIcon2.png';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { FaBell } from 'react-icons/fa';

const PaymentScheduleTable = () => {

  const configData = [
    {name: "Alll Dealers", image: payouticonF, payment: "Monthly"},
    {name: "Alll Franchisee", image: payouticon, payment: "Monthly"},
    {name: "Alll Service Provider", image: payouticon, payment: "Weekly"},
    {name: "Thomas", image: payouticon, payment: "Service Provider .Fab 26"},
    {name: "Banu - Service Provider", image: payouticon, payment: "Service Provider .Fab 15"}
  ];

  const handelEdit =(index,name)=>{
    console.log(index+"||"+name)
  }
  const handelDelete =(index,name)=>{
    console.log(index+"||"+name)
  }

  return (
    <div className='shadow-lg bg-white h-auto w-full font-poppins rounded-lg mx-auto'>
      <table className="w-full bg-white rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-lg text-left text-orange font-sans p-4">Payment Schedule</th>
            <th className="text-left"></th>
          </tr>
        </thead>
        <tbody>
          {configData.map((data, index) => (
            <tr key={index} >
              {/* Data Row */}
              <td className="py-3">
                <div className="flex items-center gap-4 px-4">
                  {/* Profile Image with Notification Icon */}
                  <div className='relative'>
                    <img src={data.image} alt="" className='rounded-full w-10 h-10 object-cover' />
                    <div className="absolute top-0 right-0">
                      <FaBell className="text-white text-1xl bg-blue-700 rounded-full p-1 shadow-lg" />
                    </div>
                  </div>
                  {/* Name and Payment Info */}
                  <div>
                    <span className="text-lg font-sans block">{data.name}</span>
                    <p className="text-xs text-id_gray">{data.payment}</p>
                  </div>
                </div>
              </td>
              {/* Action Buttons */}
              <td className="py-3">
                <div className="flex items-center gap-4 justify-end pr-4">
                  {/* Status Indicator (dummy for now) */}
                  <div className='bg-orange p-1 rounded-full'></div>
                  {/* Edit and Delete Buttons */}
                  <button className="text-gray-700" onClick={handelEdit(index,data.name)}>
                    <FaRegEdit size={20} />
                  </button>
                  <button className="text-gray-700" onClick={handelDelete(index,data.name)}>
                    <FaRegTrashAlt size={20} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentScheduleTable;
