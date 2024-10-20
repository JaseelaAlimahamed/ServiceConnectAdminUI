
import React, { useState } from 'react';
import { TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const PaymentHistory = () => {



  const payments = [
    {
      id: '#123456789',
      date: '2 March 2021, 13:45 PM',
      amount: '$50,036',
      status: 'Complete',
      statusColor: 'text-green-500',
    },
    {
      id: '#123456789',
      date: '2 March 2021, 13:45 PM',
      amount: '$50,036',
      status: 'Pending',
      statusColor: 'text-gray-400',
    },
    {
      id: '#123456789',
      date: '2 March 2021, 13:45 PM',
      amount: '$50,036',
      status: 'Canceled',
      statusColor: 'text-red-500',
    },
    {
      id: '#123456789',
      date: '2 March 2021, 13:45 PM',
      amount: '$50,036',
      status: 'Complete',
      statusColor: 'text-green-500',
    },
    {
      id: '#123456789',
      date: '2 March 2021, 13:45 PM',
      amount: '$50,036',
      status: 'Complete',
      statusColor: 'text-green-500',
    },
    {
      id: '#123456789',
      date: '2 March 2021, 13:45 PM',
      amount: '$50,036',
      status: 'Complete',
      statusColor: 'text-green-500',
    },
    {
      id: '#123456789',
      date: '2 March 2021, 13:45 PM',
      amount: '$50,036',
      status: 'Complete',
      statusColor: 'text-green-500',
    },
    {
      id: '#123456789',
      date: '2 March 2021, 13:45 PM',
      amount: '$50,036',
      status: 'Complete',
      statusColor: 'text-green-500',
    },
    {
      id: '#123456789',
      date: '2 March 2021, 13:45 PM',
      amount: '$50,036',
      status: 'Complete',
      statusColor: 'text-green-500',
    },
    {
      id: '#123456789',
      date: '2 March 2021, 13:45 PM',
      amount: '$50,036',
      status: 'Complete',
      statusColor: 'text-green-500',
    },
    {
      id: '#123456789',
      date: '2 March 2021, 13:45 PM',
      amount: '$50,036',
      status: 'Complete',
      statusColor: 'text-green-500',
    },
  ];
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  // Get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = payments.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(payments.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => {
      if(pageNumber >= 1 && pageNumber <= totalPages){
          setCurrentPage(pageNumber);
      }
  };

  //set pagenation range (3)
  const getPaginatinRange = () => {
      const range = [];
      const start = Math.max(1, currentPage - 1);
      const end = Math.min(totalPages, currentPage + 1);

      for (let i=start; i<=end; i++){
          range.push(i);
      }
      console.log(range)
      return range
  };
  

  
  
  

  return (
    <div>
      {/* Updated header section similar to the "Registered Services" design */}
      <div className="bg-white rounded-lg shadow-md p-6 max-w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#303972] mb-4 sm:mb-0">Payment History</h1>
        </div>

        {/* Payment List */}
        {currentItems.map((payment, index) => (
          <div key={index} className="flex flex-col md:flex-row md:justify-between py-4 space-y-2 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-red rounded-full flex items-center justify-center">
                <TrendingUp className="text-white" size={24} />
              </div>
              <span className="font-bold text-[#303972]">{payment.id}</span>
            </div>
            <div className="text-gray-500">{payment.date}</div>
            <div className="font-bold text-[#303972]">{payment.amount}</div>
            <div className={`${payment.statusColor} font-bold`}>{payment.status}</div>
          </div>
        ))}
         <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-500"> Showing {indexOfFirstItem + 1}-
            {indexOfLastItem > payments.length
                ? payments.length
                : indexOfLastItem}{" "}
            of {payments.length} data</p>
        <div className="flex items-center space-x-2">
          <button disabled={currentPage === 1} onClick={()=>{paginate(currentPage-1)}} className="p-2 bg-gray-200 rounded-full">
            <ChevronLeft size={20} />
          </button>
          {getPaginatinRange().map((page,index)=>{
            return <button key={index} onClick={()=>{paginate(page)}}  className={`w-8 h-8 ${page===currentPage? 'bg-indigo-600  text-white' : 'bg-white text-blue-700'} rounded-full flex items-center justify-center`}>{page}</button>
          })}
           
        
          
          
          
          <button disabled={currentPage===totalPages} onClick={()=>{paginate(currentPage+1)}} className="p-2 bg-gray-200 rounded-full">
          <ChevronRight  size={20}  />
          </button>
        </div>
      </div>
      </div>

      {/* Pagination */}
     
    </div>
  );
};

export default PaymentHistory;
