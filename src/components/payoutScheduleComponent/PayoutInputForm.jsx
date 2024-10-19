import React, { useState } from 'react'
import SelectInpute from './SelectInpute'
import { FaSync } from 'react-icons/fa'; 

const PayoutInputForm = () => {

  const [username,setUserName] = useState('');
  const [userType,setUserType] = useState(''); 
  const [paymentMethod,setPayMentMethod] = useState('');
  const [payoutSchedule,setPayoutSchedule] = useState('');
  const [accountHolder,setAccountHolder] = useState('');
  const [bankBranch,setBankBranch] = useState('');
  const [manualPayment,setManualPayment] = useState('');
  const [bankName,setBankName] = useState('');
  const [accountNumber,setaccoutNumber] = useState('');
  const [ifscCode,setIfcCode] = useState('');
  const [status,setStatus] = useState('');
  const [autopayment,setAutoPayment] = useState('');
  
  const configUserType = [
    {option: "UserName"}, {option: "ID"}, {option: "Group"}, {option: "Location"}
  ];

  const configuserName = [
    {option: "UserName"}, {option: "ID"}, {option: "Group"}, {option: "Location"}
  ];
  
  const configpayoutSchedule = [
    {option: 'Daily'}, {option: 'Weekly'}, {option: 'Monthly'}, {option: 'Yearly'}
  ];

  const configpaymentMethod = [
    {option: "Google Pay"}, {option: "PhonePay"}, {option: "Paytm"}
  ];

  const handleDelete = () => {
    console.log("deleted");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username, userType, paymentMethod, payoutSchedule,
      accountHolder, accountNumber, autopayment, bankBranch,
      bankName, manualPayment, ifscCode, status
    });
  };

  return (
    <div className='relative w-full shadow-sm bg-white h-auto mb-20 rounded-lg mt-10 mx-auto p-4 lg:p-8'>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-20 pt-6">
          {/* Left Column */}
          <div className='flex gap-3 flex-col'>
            <label className='block text-sm font-medium text-gray-700 '>User Type</label>
            <SelectInpute
              name="usertype"
              id="usertype"
              option={configUserType}
              selectOption="UserName/ID/Group/Location"
              onchange={(e) => setUserType(e.target.value)}
            />
            
            <label className='block text-sm font-medium text-gray-700 mt-4'>UserName/ID</label>
            <SelectInpute
              name="username"
              id="username"
              option={configuserName}
              selectOption="UserName/ID/Group/Location"
              onchange={(e) => setUserName(e.target.value)}
            />
            
            <div className='flex items-center gap-2 mt-4'>
              <input type="checkbox" />
              <label className='block text-sm font-medium text-gray-700'>Auto Payout Schedule</label>
            </div>
            <SelectInpute
              name="payout"
              id="payout"
              option={configpayoutSchedule}
              selectOption="Daily/Weekly/Monthly/Yearly"
              onchange={(e) => setPayoutSchedule(e.target.value)}
            />

            <div className='flex items-center gap-2 mt-4'>
              <input type="checkbox" />
              <label className='block text-sm font-medium text-gray-700'>Manual Payout Schedule</label>
            </div>

            {/* Responsive Date/Time */}
            <div className='flex gap-4 mt-5' >
              <p className='bg-slate-100 text-blue-700 rounded-lg p-2 text-sm'>Jun 10, 2024</p>
              <p className='bg-slate-100 text-blue-700 rounded-lg p-2 text-sm'>9:41 AM</p>
            </div>

            <label className='block text-sm font-medium text-gray-700 mt-4'>Payment Method</label>
            <SelectInpute
              name="paymentMethod"
              id="paymentMethod"
              option={configpaymentMethod}
              selectOption="Value"
              onchange={(e) => setPayMentMethod(e.target.value)}
            />

            <label className='block text-sm font-medium text-gray-700'>Account Holder Name</label>
            <input
              type="text"
              className='block w-full border rounded-lg shadow-sm p-1 placeholder-gray-500'
              placeholder='Value'
              value={accountHolder}
              onChange={(e) => setAccountHolder(e.target.value)}
            />

            <label className='block text-sm font-medium text-gray-700'>Bank Branch</label>
            <input
              type="text"
              className='block w-full border rounded-lg shadow-sm p-1 placeholder-gray-500'
              placeholder='Value'
              value={bankBranch}
              onChange={(e) => setBankBranch(e.target.value)}
            />
          </div>

          {/* Right Column */}
          <div className='flex gap-3 flex-col pt-8'>
            <button className='bg-id_gray p-2 w-full md:w-44 rounded-md  text-sm text-white flex items-center justify-center'>
              CHECK BALANCE <FaSync className="text-white ml-3 text-sm" size={20} />
            </button>

            <div className='w-full md:w-80 rounded-lg bg-custom_gray h-40 p-6'>
              <p className='text-white mb-3'>Lasso Kayne</p>
              <p className='text-white mb-3'>4551 5667 8886 7775</p>
              <div className='flex justify-between items-center mb-3'>
                <p className='text-white'>Account Balance</p>
                <p className='text-2xl text-white'>$121,000</p>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <input type="checkbox" />
              <label className='block text-sm font-medium text-gray-700'>Auto Payment</label>
            </div>
            <SelectInpute
              name="autopayment"
              id="autopayment"
              option={configpayoutSchedule}
              selectOption="Daily/Weekly/Monthly/Yearly"
              onchange={(e) => setAutoPayment(e.target.value)}
            />

            <div className='flex items-center gap-2'>
              <input type="checkbox" />
              <label className='block text-sm font-medium text-gray-700'>Manual Payment</label>
            </div>
            <input
              type="text"
              className='block w-full border rounded-lg shadow-sm p-1 placeholder-gray-500'
              placeholder='Amount'
              value={manualPayment}
              onChange={(e) => setManualPayment(e.target.value)}
            />

            <label className='block text-sm font-medium text-gray-700'>Bank Name</label>
            <input
              type="text"
              className='block w-full border rounded-lg shadow-sm p-2 placeholder-gray-500'
              placeholder='Value'
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />

            <label className='block text-sm font-medium text-gray-700'>Account Number</label>
            <input
              type="text"
              className='block w-full border rounded-lg shadow-sm p-1 placeholder-gray-500'
              placeholder='Value'
              value={accountNumber}
              onChange={(e) => setaccoutNumber(e.target.value)}
            />

            <label className='block text-sm font-medium text-gray-700'>IFSC Code</label>
            <input
              type="text"
              className='block w-full border rounded-lg shadow-sm p-1 placeholder-gray-500'
              placeholder='Value'
              value={ifscCode}
              onChange={(e) => setIfcCode(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center mt-10 mb-10">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-full font-normal text-violet border-2 border-violet text-lg p-2 bg-primary"
          >
            <option value="Active">Status</option>
            <option value="completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <button
            type='button'
            onClick={handleDelete}
            className="bg-red text-white px-12 py-3 rounded-full focus:outline-none hover:bg-red"
          >
            Delete
          </button>
          <button
            type='submit'
            className="bg-purple text-white px-14 py-3 rounded-full focus:outline-none hover:bg-purple"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PayoutInputForm;
