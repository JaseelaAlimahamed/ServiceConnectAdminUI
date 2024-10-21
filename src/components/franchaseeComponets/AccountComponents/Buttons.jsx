// Buttons.js
import { AiOutlinePlus } from 'react-icons/ai';

const Buttons = () => {
  return (
    <div className="flex flex-col items-center mb-3 w-full">
      <label className="block text-id_gray mb-2 justify-end space-y-0 text-sm">INVOICE</label>

      <div className="flex flex-col sm:flex-row w-full items-center sm:justify-end space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="border-dashed border-2 border-gray rounded-lg px-6 py-2 text-id_gray flex items-center sm:w-[220px] w-full h-8">
          <span className="mr-2 flex items-center justify-center w-3 h-3 rounded-full bg-id_gray text-primary"><AiOutlinePlus /></span> Add Invoice
        </button>
        <button className="bg-purple text-primary px-6 py-2 rounded-full sm:w-[220px] w-full h-8">Add</button>
      </div>
    </div>
  );
};

export default Buttons;
