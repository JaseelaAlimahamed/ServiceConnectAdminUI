import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const StatusDropdown = ({ status, dropdownOpen, toggleDropdown, handleStatusChange }) => {
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="border border-violet text-violet px-3 py-1 p-2 rounded-full flex items-center "
      >
       { status}
        {dropdownOpen ? (
          <FaChevronUp className="ml-1" />
        ) : (
          <FaChevronDown className="ml-1" />
        )}
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-white border rounded-md shadow-lg">
          <button
            onClick={() => handleStatusChange('Active')}
            className="block w-full px-2 py-1 text-left hover:bg-violet-100"
          >
            Active
          </button>
          <button
            onClick={() => handleStatusChange('Inactive')}
            className="block w-full px-2 py-1 text-left hover:bg-violet"
          >
            Inactive
          </button>
          <button
            onClick={() => handleStatusChange('Completed')}
            className="block w-full px-2 py-1 text-left hover:bg-violet"
          >
            Completed
          </button>
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;
