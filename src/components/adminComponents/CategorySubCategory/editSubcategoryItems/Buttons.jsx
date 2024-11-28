
import DeleteModal from '../CategoryComponents/DeleteModal'

const Buttons = ({ handleDelete, handleSave,handleEdit,id,isModalOpen,setIsModalOpen,isSaveDisabled}) => {

  
    return (
      <div className="flex justify-end items-end mt-4 space-x-3">
        {/* Delete Button */}
        <button
         onClick={()=>{setIsModalOpen(true)}}
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
          disabled={isSaveDisabled}
          onClick={handleSave}
          className="w-24 bg-violet text-primary border border-violet  px-3 py-1 rounded-full flex"
        >
         {isSaveDisabled ? "Processing..." : "Save"}
        </button>}

       {id? <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => handleDelete(id)}
        />:""}
      </div>
    );
  };
  
  export default Buttons;
  