const Buttons = ({ handleDelete, handleSave,handleEdit,id}) => {
    return (
      <div className="flex justify-end items-end mt-4 space-x-3">
        {/* Delete Button */}
        <button
          onClick={handleDelete}
          className="bg-red text-primary border border-red   px-3 py-1 rounded-full flex"
        >
          Delete
        </button>
        {id?
        <button
          onClick={handleEdit}
          className="w-24 bg-violet text-primary border border-violet  px-3 py-1 rounded-full flex"
        >
           Update
        </button>:
        <button
          onClick={handleSave}
          className="w-24 bg-violet text-primary border border-violet  px-3 py-1 rounded-full flex"
        >
          Save
        </button>}
      </div>
    );
  };
  
  export default Buttons;
  