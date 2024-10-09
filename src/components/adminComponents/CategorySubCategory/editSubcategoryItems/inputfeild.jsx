const InputField = ({ label, value, onChange }) => {
    return (
      <div className="flex flex-col space-y-2">
        <label className="text-gray-600">{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  };
  
  export default InputField;
  