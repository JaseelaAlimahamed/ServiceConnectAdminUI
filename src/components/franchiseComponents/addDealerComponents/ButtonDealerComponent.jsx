import react from 'react'


const ButtonDealerComponent = ({ title, className}) => {
    return (
        <button className={className}>
        {title}
      </button>
    );
  };
  
  export default ButtonDealerComponent;