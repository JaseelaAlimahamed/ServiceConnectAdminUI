import React, { useEffect, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import SearchBar from './SearchBar';
import DeleteModal from './DeleteModal';
import ViewModal from './ViewModal';
import DropButtons from './DropButtons';
import { Link } from 'react-router-dom';
import { categoryListGet} from '../../../../service/api/admin/GetApi';
import { categorydelete  } from '../../../../service/api/admin/DeleteApi';

const CategoryList = () => {
    // const mockCategories = [];
   
    const [categoriesList,setCategoriesList] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [viewCategory, setViewCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [deleteCategoryId, setDeleteCategoryId] = useState(null); 
    useEffect(() => {
       
        const fetchCategories = async () => {
            try {
                const response = await categoryListGet(); // Wait for the promise to resolve
                setCategoriesList(response.categories || []); // Set categories to resolved data
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
            
        };
      
        fetchCategories();
    }, [refresh]);

    
    
    // handle view
    const handleView = (category) => {
        setViewCategory(category);
        setIsViewModalOpen(true);
        
    };

    // Handle edit

    // Handle delete
    const handleDelete = () => {
        setIsModalOpen(false);
        try {
             categorydelete(deleteCategoryId);  // Make the delete request
            setRefresh(prev => !prev);  // Toggle the refresh state to trigger useEffect
            console.log('Deleted:', deleteCategoryId);
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };
    

    // Filter categories based on search query
    const filteredCategories = categoriesList.filter(category =>
        category && category.title.toLowerCase().includes(searchQuery.toLowerCase())
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
                    <DropButtons categories={filteredCategories} onCategorySelect={setSearchQuery}/>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {filteredCategories.map((category) => (
                    <div key={category.id} className="shadow-lg bg-blue_bg rounded-lg p-4 relative w-full">
                        <div className="bg-gray-200 rounded-t-lg w-full h-40">
                            <img
                                src={`${import.meta.env.VITE_API_URL}${category.image}`}

                                alt={category.title}
                                className="object-cover w-full h-full rounded-t-lg"
                            />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">{category.title}</h3>
                            <div className="flex justify-center gap-5 text-xl mt-2">
                                <button onClick={() => handleView(category)}><MdOutlineRemoveRedEye /></button>
                                <Link to={`/edit-Category/${category.id}`}><FaRegEdit /></Link>
                                <button onClick={() => {setIsModalOpen(true),setDeleteCategoryId(category.id)}}><FaRegTrashAlt /></button>
                               
                            </div>
                        </div>
                        <DeleteModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            onConfirm={() => handleDelete()}
                        />
                        
                    </div>
                ))}

                <div className="bg-blue_bg shadow-lg rounded-lg flex justify-center items-center p-4 w-full">
                    <Link to={'/Add-Category'} className="text-8xl font-bold text-gray-400"><BsPlusLg /></Link>
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
