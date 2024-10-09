const DropdownInput = ({ value, onChange, options }) => {
    return (
      <div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-48 p-1 mx-3 border border-id_gray rounded-md text-id_gray h-8"
        >
          <option value="">Select Service Type</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default DropdownInput;
  