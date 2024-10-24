

const TitleInput = ({ title, setTitle }) => {
  return (
    <div>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-48 p-1 mx-3 border border-id_gray rounded-md text-id_gray h-8 placeholder-id_gray"
      />
    </div>
  );
};

export default TitleInput;
