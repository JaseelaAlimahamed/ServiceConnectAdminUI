

const DescriptionInput = ({ description, setDescription }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-48 p-1 mx-3 border border-id_gray rounded-md text-id_gray h-8 placeholder-id_gray"
      />
    </div>
  );
};

export default DescriptionInput;
