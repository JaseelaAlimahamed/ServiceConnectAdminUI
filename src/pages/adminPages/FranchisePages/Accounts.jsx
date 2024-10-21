
import { useState } from 'react';
import InvoiceForm from '../../../components/franchaseeComponets/AccountComponents/InvoiceForm'
import Buttons from '../../../components/franchaseeComponets/AccountComponents/Buttons';
import DataTable from '../../../components/franchaseeComponets/AccountComponents/AccountTable';

const Accounts = () => {
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    if (dateValue) {
      const [year, month, day] = dateValue.split('-');
      setDate(`${day}/${month}/${year}`);
    } else {
      setDate('');
    }
  };

  return (
    <div className='bg-gray min-h-screen w-full h-full p-6'>
      <div className='bg-primary max-w-full rounded-lg shadow-lg p-8'>
        <h2 className='text-3xl font-semibold text-secondary mb-6'>Add Expense</h2>

        <div className='flex flex-col'>
          <InvoiceForm date={date} setDate={setDate} handleDateChange={handleDateChange} />
          <Buttons />
        </div>
      </div>

      <DataTable />
    </div>
  );
}

export default Accounts;
