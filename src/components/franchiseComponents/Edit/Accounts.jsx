// import React from 'react'

// const Accounts = () => {
//   return (
//       <div className='bg-gray  min-h-scren  w-full h-full p-6'>
//       <div className='bg-primary max-w-full  min-full rounded-lg h-1/4  shadow-lg mx-5 my-5 p-2 '>
//       <h2 className='text-2xl font-semi-bold text-secondary mb-4'>Add Expense</h2>
     
     
//         <div className=' grid grid-cols-1 md:grid-cols-6 gap-4 mb-6'>
//             <input
//              type="text"
//             title=''
//             placeholder='Invoice No' 
//             className='border border-gray rounded-md px-4 py-2  focus:outline-none focus:ring focus:boder-fluracent_green  col-san-2'
//             />
//             <input
//              type="date"
//             title='date'
//             placeholder='' 
//             className='border border-gray rounded-md px-4 py-2  focus:outline-none focus:ring focus:boder-fluracent_green  col-san-2'
//             />
//             <input
//              type="text"
//             title='Description Remarks'
//             placeholder='' 
//             className='border border-gray rounded-md px-4 py-2  focus:outline-none focus:ring focus:boder-fluracent_green  col-san-2'
//             />
//              <input
//              type="text"
//             title='DR'
//             placeholder='' 
//             className='border border-gray rounded-md px-4 py-2  focus:outline-none focus:ring focus:boder-fluracent_green  col-san-2'
//             />
//              <input
//              type="text"
//             title=''
//             placeholder='CR' 
//             className='border border-gray rounded-md px-4 py-2  focus:outline-none focus:ring focus:boder-fluracent_green  col-san-2'
//             />

//         </div>  
      
//         {/* Buttons */}
       
          
//           <div className="flex items-right space-x-4">
//             <button className="border-dashed border-2 border-gray rounded-lg px-4 py-2 text-gray">
//               + Add Invoice
//             </button>
//             <button className="bg-purple text-primary  px-4 py-2 rounded-lg w-">
//               Add
//             </button>
//           </div>
//         </div>



//         {/* Table Section */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white rounded-lg shadow-lg">
//             <thead>
//               <tr className="bg-gray-200 text-left">
//                 <th className="py-2 px-4">Sl.No</th>
//                 <th className="py-2 px-4">Date</th>
//                 <th className="py-2 px-4">Invoice No</th>
//                 <th className="py-2 px-4">Description / Remarks</th>
//                 <th className="py-2 px-4">DR</th>
//                 <th className="py-2 px-4">CR</th>
//                 <th className="py-2 px-4">Invoice</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[1, 2, 3, 4].map((item, index) => (
//                 <tr key={index} className="">
//                   <td className="py-2 px-4">{index + 1}</td>
//                   <td className="py-2 px-4">xx/xx/xxxx</td>
//                   <td className="py-2 px-4">4954545</td>
//                   <td className="py-2 px-4">Paid cash</td>
//                   <td className="py-2 px-4">0</td>
//                   <td className="py-2 px-4">4954545</td>
//                   <td className="py-2 px-4">
//                     <div className="flex space-x-2">
//                       <button className="text-blue hover:text-blue">
//                         <i className="fas fa-eye"></i>
//                       </button>
//                       <button className="text-yellow hover:text-yellow">
//                         <i className="fas fa-edit"></i>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
       
//      </div>
     
      

      
//   )
// }

// export default Accounts
import React from 'react';
import { AiOutlineEye, AiOutlineEdit } from 'react-icons/ai'; // Importing react-icons

const Accounts = () => {
  return (
    <div className='bg-gray  min-h-scren  w-full h-full p-6'>
      <div className='bg-primary max-w-full  min-full rounded-lg h-1/4  shadow-lg mx-5 my-5 p-2 '>
      <h2 className='text-2xl font-semi-bold text-secondary mb-4'>Add Expense</h2>
     
     
     <div className=' grid grid-cols-1 md:grid-cols-6 gap-4 mb-6'>
          <input
             type="text"
            title=''
            placeholder='Invoice No' 
            className='border border-gray rounded-md px-4 py-2  focus:outline-none focus:ring focus:boder-fluracent_green  col-san-2'
            />
            <input
             type="date"
            title='date'
            placeholder='' 
            className='border border-gray rounded-md px-4 py-2  focus:outline-none focus:ring focus:boder-fluracent_green  col-san-2'
            />
            <input
             type="text"
            title='Description Remarks'
            placeholder='' 
            className='border border-gray rounded-md px-4 py-2  focus:outline-none focus:ring focus:boder-fluracent_green  col-san-2'
            />
             <input
             type="text"
            title='DR'
            placeholder='' 
            className='border border-gray rounded-md px-4 py-2  focus:outline-none focus:ring focus:boder-fluracent_green  col-san-2'
            />
             <input
             type="text"
            title=''
            placeholder='CR' 
            className='border border-gray rounded-md px-4 py-2  focus:outline-none focus:ring focus:boder-fluracent_green  col-san-2'
            />
    
        </div>  
      
        {/* Buttons */}
       
          
          <div className="flex items-right space-x-4">
            <button className="border-dashed border-2 border-gray rounded-lg px-4 py-2 text-gray">
              + Add Invoice
            </button>
            <button className="bg-purple text-primary  px-4 py-2 rounded-lg w-">
              Add
            </button>
          </div>
        </div>


        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-2 px-4">Sl.No</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Invoice No</th>
                <th className="py-2 px-4">Description / Remarks</th>
                <th className="py-2 px-4">DR</th>
                <th className="py-2 px-4">CR</th>
                <th className="py-2 px-4">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">xx/xx/xxxx</td>
                  <td className="py-2 px-4">4954545</td>
                  <td className="py-2 px-4">Paid cash</td>
                  <td className="py-2 px-4">0</td>
                  <td className="py-2 px-4">4954545</td>
                  <td className="py-2 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <AiOutlineEye /> {/* View Icon */}
                      </button>
                      <button className="text-yellow-500 hover:text-yellow-700">
                        <AiOutlineEdit /> {/* Edit Icon */}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

  );
};

export default Accounts;
