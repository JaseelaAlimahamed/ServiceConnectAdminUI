
import EditIcon from '../../../assets/icons/EditSubCategory.svg';
import InvoiceIcon from '../../../assets/icons/Invoice.svg';

const DataTable = () => {
  const data = [1, 2, 3, 4];

  return (
    <div className="overflow-x-auto mt-6 h-full">
      <table className="w-1/3 sm:w-[90%] bg-primary rounded-lg shadow-lg">
        <thead>
          <tr className="bg-primary text-left font-small text-secondary w-full sm:w-[90%] border-b border-b-id_gray rounded-lg">
            <th className="py-2 px-4">
              <input type="checkbox" />
            </th>
            <th className="py-2 px-4">Sl.No</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Invoice No</th>
            <th className="py-2 px-4">Description Remarks</th>
            <th className="py-2 px-4">DR</th>
            <th className="py-2 px-4">CR</th>
            <th className="py-2 px-4">Invoice</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-none text-sm text-secondary">
              <td className="py-2 px-4">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">xx/xx/xxxx</td>
              <td className="py-2 px-4">4954545</td>
              <td className="py-2 px-4">Paid cash</td>
              <td className="py-2 px-4">0</td>
              <td className="py-2 px-4">4954545</td>
              <td className="py-2 px-4">
                <div className="flex space-x-8">
                  <button className="text-sky_blue hover:text-dark_blue">
                    <img src={InvoiceIcon} alt="Invoice Icon" className="h-5 w-5" />
                  </button>
                  <button className="text-yellow hover:text-dark_yellow">
                    <img src={EditIcon} alt="Edit Icon" className="h-5 w-5" />
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

export default DataTable;
