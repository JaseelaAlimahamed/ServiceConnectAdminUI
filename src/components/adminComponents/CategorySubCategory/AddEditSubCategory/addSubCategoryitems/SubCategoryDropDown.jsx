import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

const Dropdown = ({ options, selectedOption, onChange, title, buttonClass }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative z-50">
            <button
                onClick={toggleDropdown}
                className={`${buttonClass} px-4 py-2 rounded-full flex items-center justify-center`}
            >
                {selectedOption}
                {isOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-primary border rounded-md shadow-lg z-50">
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => {
                                onChange(option);
                                setIsOpen(false);
                            }}
                            className="block w-full px-2 py-1 text-left hover:bg-violet"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
