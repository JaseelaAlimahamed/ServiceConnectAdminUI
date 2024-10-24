import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import SearchBar from './SearchBar';
import DeleteModal from './DeleteModal';
import ViewModal from './ViewModal';
import DropButtons from './DropButtons';



const CategoryList = () => {
    const mockCategories = [
        { id: 1, name: "Home Services", image: "https://media.istockphoto.com/id/1457385092/photo/an-asian-young-technician-service-man-wearing-blue-uniform-checking-cleaning-air-conditioner.jpg?s=612x612&w=0&k=20&c=Tqu5jMzD1TKFO1Fvow6d0JMDsEGU8T3kToP706bQFQI=", description: "Services to maintain and enhance your home." },
        { id: 2, name: "House Keeping", image: "https://media.istockphoto.com/id/1417833172/photo/professional-cleaner-holding-a-basket-of-cleaning-products.jpg?s=612x612&w=0&k=20&c=bqhz1jDqSxEQB1OAvm9DP_7SWNKR2F8t7Mzfr4Hchm4=", description: "Cleaning and organizing services for households." },
        { id: 3, name: "Accounting", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT388bhanKIqfnQLGVV-2K2KdiabCdBHpU4A&s", description: "Financial services including bookkeeping and tax preparation." },
        { id: 4, name: "Doctor", image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww", description: "Healthcare services for various medical needs." },
        { id: 5, name: "Cleaning", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYwsB7tFesBcUN0oqUGNvhUfjJ1XjSedMVeQ&s", description: "Deep cleaning services for residential and commercial spaces." },
        { id: 6, name: "Plumbing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzMFWcfyZO_obht-E5yf45A_ET28HQA2PaA&s", description: "Services for installation and repair of plumbing systems." },
        { id: 7, name: "Electrical", image: "https://t4.ftcdn.net/jpg/01/70/17/97/360_F_170179753_piUSFjn4xlwAKaIU14gs6FnCVij2wckc.jpg", description: "Wiring and electrical services for homes and businesses." },
        { id: 8, name: "Gardening", image: "https://via.placeholder.com/300", description: "Landscape design and garden maintenance services." },
        { id: 9, name: "Carpentry", image: "https://via.placeholder.com/300", description: "Custom woodwork and furniture building services." },
        { id: 10, name: "Moving Services", image: "https://via.placeholder.com/300", description: "Assistance with residential and commercial moving." },
    ];
    

    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [editService, setEditService] = useState(null);
    const [viewCategory, setViewCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // handle view
    const handleView = (category) => {
        setViewCategory(category);
        setIsViewModalOpen(true);
    };

    // Handle edit
    const handleEdit = (category) => {
        setEditService(category);
        console.log("Editing Category:", category);
        alert(`Editing ${category.id}`)
    };

    // Handle delete
    const handleDelete = (categoryId) => {
        setIsModalOpen(false);
        console.log('Deleting:', categoryId);
        alert(`Deleteing ${categoryId}`)
    };

    // Filter categories based on search query
    const filteredCategories = mockCategories.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='bg-white p-6 shadow-lg rounded-lg '>
            <div className="flex flex-col md:flex-row justify-between items-center mb-5">
                <h1 className="text-3xl text-dark_blue font-bold mb-4 md:mb-0">Categories</h1>
                
                {/* SearchBar with search query state */}
                <div className="flex flex-grow md:max-w-md">
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </div>

                <div className="mt-4 md:mt-0">
                    <DropButtons />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {filteredCategories.map((category) => (
                    <div key={category.id} className="shadow-lg bg-blue_bg rounded-lg p-4 relative w-full">
                        <div className="bg-gray-200 rounded-t-lg w-full h-40">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="object-cover w-full h-full rounded-t-lg"
                            />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">{category.name}</h3>
                            <div className="flex justify-center gap-5 text-xl mt-2">
                                <button onClick={() => handleView(category)}><MdOutlineRemoveRedEye /></button>
                                <button onClick={() => handleEdit(category)}><FaRegEdit /></button>
                                <button onClick={() => setIsModalOpen(true)}><FaRegTrashAlt /></button>
                            </div>
                        </div>
                        <DeleteModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            onConfirm={() => handleDelete(category.id)}
                        />
                    </div>
                ))}

                {/* Add Category Button */}
                <div className="bg-blue_bg shadow-lg rounded-lg flex justify-center items-center p-4 w-full">
                    <button className="text-8xl font-bold text-gray-400"><BsPlusLg /></button>
                </div>
            </div>

            {viewCategory && isViewModalOpen && (
                <ViewModal
                    isOpen={isViewModalOpen}
                    onClose={() => setIsViewModalOpen(false)}
                    category={viewCategory}
                />
            )}
        </div>
    );
};

export default CategoryList;
