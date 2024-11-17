import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import DealerSearchBar from '../dealers/DealerSearchBar';
import DealerDropdown from '../dealers/DealerDropdown';
import AddDealerButton from '../dealers/AddDealerButton';
import Modal from './Modal';

function DealerDetailsList({tableHeadings , tableData , page , filter , dropdownValues}) {
    const [showActionOverlay , setShowActionOverlay] = useState("");
    console.log(showActionOverlay)

    const [showOverlay , setShowOverlay] = useState(false);

    const handleOverlay = () => {
        setShowOverlay(true);
    };
    const handleCloseOverlay = () => {
        setShowOverlay(false);
    };

  return (

    <>
    {filter && <div className='flex flex-col justify-between pt-5 px-5 font-poppins gap-4  lg:flex-row lg:gap-0'>
        <div><DealerSearchBar/></div>    
        <div className='flex items-center gap-4 flex-col md:flex-row md:justify-between '><DealerDropdown values={dropdownValues}/><AddDealerButton/></div>    
    </div>}
  <div className="px-5 pt-5  bg-gray-100">
    <div className="overflow-auto rounded-lg shadow hidden md:block">
      <table className="w-full rounded-xl bg-white">
        <thead className="bg-gray-50 border-b border-[#DBDBDB]">
        <tr>
          <th className={`w-20 p-3 text-sm font-semibold tracking-wide text-left`}><input type='checkbox'></input></th>
          {tableHeadings.map((data) => {
            return(
              <th key={data} className={`p-3 text-sm text-dark_blue font-semibold tracking-wide ${data === "Dealer Name"?"text-left" :"text-center"}`}>{data}</th>
            )
          })}
        </tr>
        </thead>
        <tbody className="divide-y divide-[#DBDBDB]">
            {tableData.map(({checkBox , name  ,id, totalService , totalRevenue , contact , status , actionIcon}) => (
            <tr key={id} className="bg-white">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {checkBox}
              </td>
              <td 
              onClick={handleOverlay} 
              className="p-3 text-xs lg:text-sm font-bold text-dark_blue gap-2 cursor-pointer whitespace-nowrap text-center flex items-center ">
                <div className='w-10 h-10 rounded-full bg-blue_gray'></div>
                <span>{name}</span>
              </td>
              <td className="p-3 text-sm text-dark_blue whitespace-nowrap text-center">{totalService}</td>
              <td className="p-3 text-sm text-dark_blue  whitespace-nowrap text-center"> 
                <div className='flex items-center justify-center'>
                    <MdOutlineCurrencyRupee />
                    <span>{totalRevenue}</span>
                </div>
              </td>
              <td className="p-3 text-xs text-gray-700 whitespace-nowrap text-center">{contact}</td>
              <td className="p-3 text-xs  whitespace-nowrap text-center">
                <span
                  className={`p-1.5 text-xs font-medium tracking-wider text-white ${status != "Active" ? 'bg-orange': "bg-fluracent_green"} rounded-full `}>{status}</span>
              </td>
              <td className="p-3 text-lg relative text-light_gray  text-center  ">
                <div 
                className='cursor-pointer relative'
                onClick={() => setShowActionOverlay(showActionOverlay === id ? "" : id)}
>
                {actionIcon}
                </div>
                {showActionOverlay === id && <div className={` bg-white fixed z-50 w-32  shadow-md rounded-lg overflow-hidden text-sm flex flex-col right-2 `}>
                    <Link className="bg-primary cursor-pointer capitalize hover:bg-slate-100 px-7 py-1 " >view</Link>
                    <Link className="bg-primary cursor-pointer capitalize hover:bg-slate-100 px-7 py-1 " >edit</Link>
                    <Link className="bg-primary cursor-pointer capitalize hover:bg-slate-100 px-7 py-1">delete</Link>
                </div>}
              </td>
            </tr>
            ))}
            <Modal
            isOpen={showOverlay}
            onClose={handleCloseOverlay}
            />
        </tbody>
      </table>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
      {tableData.map(({checkBox , name , id , totalService , totalRevenue , contact , status , actionIcon}) => (
        <div key={id}
        onClick={handleOverlay} 
        className="bg-white space-y-3 p-4 rounded-lg shadow cursor-pointer">
          <div className="flex items-center space-x-2 text-sm justify-between ">
            <div>
              {checkBox}
            </div>
          <div>
          <span
              className={`p-1.5 text-xs font-medium tracking-wider text-white ${status != "Active" ? 'bg-orange': "bg-fluracent_green"} rounded-full `}>{status}</span>
          </div>
          </div>
          <div className="text-sm text-gray-700">
            {name}
          </div>
          <div className="text-sm font-medium text-black">
            {`Total Service - ${totalService}`}
          </div>
          <div className="text-sm font-medium text-black">
            {`Total Revenue - ${totalRevenue}`}
          </div>
          <div className="text-sm font-medium text-black flex justify-between">
            {contact}
            <div className='relative text-center text-light_gray'>
            <div 
                className='cursor-pointer'
                onClick={() => setShowActionOverlay(showActionOverlay === id ? "" : id)}
                >
                {actionIcon}
                </div>
                {showActionOverlay === id && <div className={`absolute z-10 bg-white  right-3 shadow-md rounded-lg overflow-hidden flex flex-col `}>
                    <Link className="bg-primary cursor-pointer hover:bg-slate-100 capitalize px-7 py-1  " >view</Link>
                    <Link className="bg-primary cursor-pointer hover:bg-slate-100 capitalize px-7 py-1  " >edit</Link>
                    <Link className="bg-primary cursor-pointer hover:bg-slate-100 capitalize px-7 py-1">delete</Link>
                </div>}  
           </div> 
          </div>
        </div>
      ))}
      <Modal
            isOpen={showOverlay}
            onClose={handleCloseOverlay}
            />
    </div>
  </div>
  </>
  );
}

export default DealerDetailsList