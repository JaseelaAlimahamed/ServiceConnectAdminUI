const ButtonComponent = ({ children, onClick, className }) => {
  return (
    <button
      className={`w-full container text-white py-2 px-3 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
