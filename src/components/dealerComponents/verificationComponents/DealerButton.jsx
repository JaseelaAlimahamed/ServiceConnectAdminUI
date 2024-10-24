const ButtonComponent = ({ children, onClick, className }) => {
  return (
    <button
      className={`w-full container py-3 px-4 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
