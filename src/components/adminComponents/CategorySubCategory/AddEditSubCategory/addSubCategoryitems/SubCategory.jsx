import { useState } from 'react';
import Dropdown from '../addSubCategoryitems/SubCategoryDropDown';
import SubCategoryList from '../addSubCategoryitems/SubcategoryList';

const SubCategory = () => {
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

    const filteredCategories = mockCategories.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSortChange = (newSort) => setSelectedSort(newSort);
    const handleStatusChange = (newStatus) => setSelectedStatus(newStatus);

    const handleDelete = (id) => console.log(`Deleting item with id: ${id}`);
    const handleEdit = (id) => console.log(`Editing item with id: ${id}`);
    const handleView = (name) => console.log(`Viewing item: ${name}`);

    return (
        <div className='bg-primary p-6 shadow-lg rounded-lg max-w-5xl mx-auto'>
            <div className="flex flex-col md:flex-row justify-between items-center mb-5">
                <h1 className="text-3xl text-dark_blue font-bold mb-4 md:mb-0">Cleaning</h1>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <Dropdown 
                        options={['High Price', 'Low Price']}
                        selectedOption={selectedSort}
                        onChange={handleSortChange}
                        title="Sort"
                        buttonClass="w-32 h-10 border border-violet text-violet"
                    />
                    <Dropdown 
                        options={['House', 'Workplace']}
                        selectedOption={selectedStatus}
                        onChange={handleStatusChange}
                        title="Status"
                        buttonClass="w-32 h-10 bg-violet text-primary"
                    />
                </div>
            </div>

            <SubCategoryList 
                categories={filteredCategories} 
                onView={handleView} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
            />
        </div>
    );
};

export default SubCategory;
