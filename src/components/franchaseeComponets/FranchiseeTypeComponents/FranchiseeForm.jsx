const FranchiseeForm = ({ formData, handleInputChange }) => {
  return (
    <div className="flex-1 bg-primary rounded-lg shadow-lg p-8  max-w-xl  h-[300px] mt-1"> 
      <h2 className="text-xl font-semibold mb-1 text-secondary pb-4">Franchisee Type</h2>
      <div className="space-y-3">
        {['Grama panchayat', 'Details', 'Rate', 'Currency'].map((label, index) => (
          <div key={index} className="flex justify-center text-secondary">
            <input
              type="text"
              placeholder={label}
              className="w-full:w-64  p-2 bg-gray text-center placeholder-secondary"
            />
          </div>
        ))}
      </div>
    </div> 
  );
};

export default FranchiseeForm;

