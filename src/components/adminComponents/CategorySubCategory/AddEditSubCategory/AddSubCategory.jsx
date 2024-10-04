
import  { useState } from 'react'; 
import { BsPlusLg } from 'react-icons/bs';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SubCategory = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sortOpen, setSortOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Sort');
    const [selectedStatus, setSelectedStatus] = useState('Cleaning');
    const [searchQuery, setSearchQuery] = useState('');

    const mockCategories = [
        { id: 1, name: "Home Cleaning", image: "https://via.placeholder.com/250x150", description: "Services to maintain and enhance your home." },
        { id: 2, name: "Deep Cleaning", image: "https://via.placeholder.com/250x150", description: "Cleaning and organizing services for households." },
        { id: 3, name: "Carpet Cleaning", image: "https://via.placeholder.com/250x150", description: "Financial services including bookkeeping and tax preparation." },
        { id: 4, name: "Bathroom Cleaning", image: "https://via.placeholder.com/250x150", description: "Healthcare services for various medical needs." },
        { id: 5, name: "Green Cleaning", image: "https://via.placeholder.com/250x150", description: "Healthcare services for various medical needs." }
    ];

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleSort = () => setSortOpen(!sortOpen);

    const handleSortChange = (newSort) => {
        setSelectedSort(newSort);
        setSortOpen(false);
    };

    const handleStatusChange = (newStatus) => {
        setSelectedStatus(newStatus);
        setDropdownOpen(false);
    };

    const filteredCategories = mockCategories.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDelete = (id) => {
        console.log(`Deleting item with id: ${id}`);
    };

    const handleEdit = (id) => {
        console.log(`Editing item with id: ${id}`);
    };

    const handleView = (name) => {
        console.log(`Viewing item: ${name}`);
    };

    const handleAddNewItem = () => {
        console.log("Adding a new item");
    };

    return (
        <div className='bg-primary p-6 shadow-lg rounded-lg max-w-5xl mx-auto'>
            <div className="flex flex-col md:flex-row justify-between items-center mb-5">
                <h1 className="text-3xl text-dark_blue font-bold mb-4 md:mb-0">Cleaning</h1>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="relative z-50">
                        <button
                            onClick={toggleSort}
                            className="w-32 h-10 border border-violet text-violet px-4 py-2 rounded-full flex items-center justify-center"
                        >
                            {selectedSort}
                            {sortOpen ? (
                                <FaChevronUp className="ml-2 text-violet" />
                            ) : (
                                <FaChevronDown className="ml-2 text-violet" />
                            )}
                        </button>
                        {sortOpen && (
                            <div className="absolute right-0 mt-1 w-48 bg-primary border-violet rounded-md shadow-lg z-50">
                                <button
                                    onClick={() => handleSortChange('High Price')}
                                    className="block w-full px-2 py-1 text-left hover:bg-violet"
                                >
                                    High Price
                                </button>
                                <button
                                    onClick={() => handleSortChange('Low Price')}
                                    className="block w-full px-2 py-1 text-left hover:bg-violet"
                                >
                                    Low Price
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Status Button */}
                    <div className="relative z-50">
                        <button
                            onClick={toggleDropdown}
                            className='w-32 h-10 bg-violet text-primary border border-violet- px-4 py-2 rounded-full flex items-center justify-center'
                        >
                            {selectedStatus}
                            <span className="ml-2">
                                {dropdownOpen ? <FaChevronUp className="text-primary" /> : <FaChevronDown className="text-primary" />}
                            </span>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-1 w-48 bg-primary border rounded-md shadow-lg z-50">
                                <button
                                    onClick={() => handleStatusChange('House')}
                                    className="block w-full px-2 py-1 text-left hover:bg-violet"
                                >
                                    House
                                </button>
                                <button
                                    onClick={() => handleStatusChange('Workplace')}
                                    className="block w-full px-2 py-1 text-left hover:bg-violet"
                                >
                                    Workplace
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCategories.map((subcategory) => (
                    <div key={subcategory.id} className="shadow-lg bg-blue_bg rounded-lg p-4 relative w-full hover:shadow-xl transition-shadow duration-300">
                        <div className="bg-gray rounded-t-lg w-full h-40">
                            <img
                                src={subcategory.image}
                                alt={subcategory.name}
                                className="object-cover w-full h-full rounded-t-lg"
                            />
                        </div>
                        <div className="mt-4 text-center">
                            <h3 className="text-lg font-semibold">{subcategory.name}</h3>
                            <div className="flex justify-center gap-5 text-xl mt-2">
                                <button onClick={() => handleView(subcategory.name)} className="hover:text-violet-700">
                                    <MdOutlineRemoveRedEye />
                                </button>
                                <button onClick={() => handleEdit(subcategory.id)} className="hover:text-violet-700">
                                    <FaRegEdit />
                                </button>
                                <button onClick={() => handleDelete(subcategory.id)} className="hover:text-violet-700">
                                    <FaRegTrashAlt />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                <div onClick={handleAddNewItem} className="bg-blue_bg shadow-lg rounded-lg flex flex-col justify-center items-center p-4 w-full hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                    <button className="text-8xl font-bold text-id_gray mb-4"><BsPlusLg /></button>
                    <div className="flex justify-center gap-5 text-xl">
                        <button className="hover:text-violet"><MdOutlineRemoveRedEye /></button>
                        <button className="hover:text-violet"><FaRegEdit /></button>
                        <button className="hover:text-violet"><FaRegTrashAlt /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;
