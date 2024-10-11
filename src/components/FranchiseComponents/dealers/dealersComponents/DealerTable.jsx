import React from 'react';

function DealerTable({tableHeadings , tableData , page}) {

  return (
  <div className="px-5 pt-5  bg-gray-100">
    <div className="overflow-auto rounded-t-lg shadow hidden md:block">
      <table className="w-full rounded-xl bg-white">
        <thead className="bg-gray-50 border-b border-[#DBDBDB]">
        <tr>
          <th className={`w-20 p-3 text-sm font-semibold tracking-wide text-left`}><input type='checkbox'></input></th>
          {tableHeadings.map((data) => {
            return(
              <th key={data} className={`p-3 text-sm text-dark_blue font-semibold tracking-wide ${data === "Name"?"text-left" :"text-center"}`}>{data}</th>
            )
          })}
        </tr>
        </thead>
        <tbody className="divide-y divide-[#DBDBDB]">
            {tableData.map(({checkBox , name , id , serviceProviders , location , contact , status , actionIcon}) => (
            <tr key={id} className="bg-white">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                {checkBox}
              </td>
              <td className="p-3 text-sm font-bold text-dark_blue gap-2 whitespace-nowrap text-center flex items-center ">
                {page === "dealers" && <div className='w-10 h-10 rounded-full bg-blue_gray'></div>}
                {name}
              </td>
              <td className="p-3 text-sm text-violet font-semibold whitespace-nowrap text-center">{id}</td>
              <td className="p-3 text-sm text-dark_blue whitespace-nowrap text-center">{serviceProviders}</td>
              <td className="p-3 text-sm text-dark_blue whitespace-nowrap text-center">{location}</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap text-center">{contact}</td>
              <td className="p-3 text-sm  whitespace-nowrap text-center">
                <span
                  className={`p-1.5 text-xs font-medium tracking-wider text-white ${status != "Active" ? 'bg-orange': "bg-fluracent_green"} rounded-full `}>{status}</span>
              </td>
              <td className="p-3 text-lg  text-light_gray whitespace-nowrap text-center cursor-pointer ">{actionIcon}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
      {tableData.map(({checkBox , name , id , serviceProviders , location , contact , status , actionIcon}) => (
        <div key={id} className="bg-white space-y-3 p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2 text-sm justify-between">
            <div>
              {checkBox}
            </div>
          <div className="text-gray-500">{id}</div>
          <div>
          <span
              className={`p-1.5 text-xs font-medium tracking-wider text-white ${status != "Active" ? 'bg-orange': "bg-fluracent_green"} rounded-full `}>{status}</span>
          </div>
          </div>
          <div className="text-sm text-gray-700">
            {name} - {location}
          </div>
          <div className="text-sm font-medium text-black">
            {`Service Providers - ${serviceProviders}`}
          </div>
          <div className="text-sm font-medium text-black flex justify-between">
            {contact}
            <div>
              {actionIcon}  
           </div> 
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default DealerTable

