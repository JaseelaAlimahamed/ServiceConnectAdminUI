
const ActionButtons = ({ handleSave, handleSaveDraft, handleDelete }) => {
  return (
    <div className="flex md:flex-row flex-col md:absolute md:mt-0 justify-end bottom-0 right-0 mr-2 p-4 space-y-2 md:space-y-0 md:justify-end justify-center">
      <button
        onClick={handleDelete}
        className="w-full md:w-24 h-10 border bg-red text-primary px-3 py-1 rounded-full flex justify-center items-center"
      >
        Delete
      </button>

      <button
        onClick={handleSaveDraft}
        className="w-full md:w-36 h-10 border border-violet text-violet px-3 py-1 rounded-full flex justify-center items-center"
      >
        Save as Draft
      </button>

      <button
        onClick={handleSave}
        className="w-full md:w-24 h-10 bg-violet text-primary px-3 py-1 rounded-full flex justify-center items-center"
      >
        Save
      </button>
    </div>
  );
};

export default ActionButtons;
