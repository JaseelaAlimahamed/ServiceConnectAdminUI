import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import DropButtons from './DropButtons'
import { BsPlusLg } from 'react-icons/bs'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import DeleteModal from './DeleteModal'
import ViewModal from './ViewModal'
import { Link } from 'react-router-dom'
import { SubcategoryGet } from '../../../../service/api/admin/GetApi'
import { SubcategoryDelete } from '../../../../service/api/admin/DeleteApi'



const SubCategoryList = () => {
    const [subcategoryList,setSubCategoryList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [viewSubCategory, setViewSubCategory] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editService, setEditService] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
       
        const fetchCategories = async () => {
            try {
                const response = await SubcategoryGet(); // Wait for the promise to resolve
                setSubCategoryList(response || []); // Set subcategories to resolved data
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
            
        };
      
        fetchCategories();
    }, [refresh]);


    // handle view
    const handleView = (category) => {
        setViewSubCategory(category);
        setIsViewModalOpen(true);
    };
    // Handle delete
    const handleDelete = (categoryId) => {
        setIsModalOpen(false);
        SubcategoryDelete(categoryId)
        setRefresh(prev => !prev);
        console.log('Deleting:', categoryId);
        
    };




    // const filteredSubcategories = subcategoryList
    // ? subcategoryList.filter(subcategory =>
    //     subcategory.categoryId === selectedCategory.id &&
    //     subcategory && subcategory.name.toLowerCase().includes(searchQuery.toLowerCase())
    // )
    // : subcategoryList.filter(subcategory =>
    //     subcategory && subcategory.name.toLowerCase().includes(searchQuery.toLowerCase())
    // ); // Show all subcategories matching the search query when no category is selected

    return (
        <div>
            <div className='bg-white p-6 shadow-lg rounded-lg '>
                <div className="flex flex-col md:flex-row justify-between  gap-3 items-center mb-5">
                    <h1 className="text-3xl text-dark_blue font-bold mb-4">
                        {selectedCategory ? selectedCategory.name : "Sub Categories"}
                    </h1>

                    <div className="flex flex-grow md:max-w-md">
                        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    </div>

                    <div className="mt-4 md:mt-0">
                        <DropButtons onCategorySelect={setSelectedCategory} categories={subcategoryList} />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {subcategoryList.map((category) => (
                        <div key={category.id} className="shadow-lg bg-blue_bg rounded-lg p-4 relative w-full">
                            <div className="bg-gray-200 rounded-t-lg w-full h-40">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="object-cover w-full h-full rounded-t-lg"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">{category.title}</h3>
                                <div className="flex justify-center gap-5 text-xl mt-2">
                                    <button onClick={() => handleView(category)}><MdOutlineRemoveRedEye /></button>
                                    <Link to={`/edit-subcategory/${category.id}`} ><FaRegEdit /></Link>
                                    <button onClick={() => setIsModalOpen(true)}><FaRegTrashAlt /></button>
                                </div>
                                <DeleteModal
                                    isOpen={isModalOpen}
                                    onClose={() => setIsModalOpen(false)}
                                    onConfirm={() => handleDelete(category.id)}
                                />
                            </div>

                        </div>
                    ))

                    }
                    {/* Add Category Button */}
                    <div className="bg-blue_bg min-h-[250px] shadow-lg rounded-lg flex justify-center items-center p-4 w-full">
                        <Link to={'/add-subcategory'}  className="text-8xl font-bold text-medium_dark_gray"><BsPlusLg /></Link>
                    </div>
                </div>
            </div>
            {viewSubCategory && isViewModalOpen && (
                <ViewModal
                    isOpen={isViewModalOpen}
                    onClose={() => setIsViewModalOpen(false)}
                    category={viewSubCategory}
                />
            )}
        </div>
    )
}

export default SubCategoryList