import React, { useState } from 'react'
import SearchBar from './SearchBar'
import DropButtons from './DropButtons'
import { BsPlusLg } from 'react-icons/bs'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import DeleteModal from './DeleteModal'
import ViewModal from './ViewModal'



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
const subCategories = [
    { id: 1, categoryId: 1, name: "Air Conditioning Repair", description: "Services to repair and maintain air conditioning units." },
    { id: 2, categoryId: 1, name: "Home Cleaning", description: "General cleaning services for homes." },
    { id: 3, categoryId: 1, name: "Pest Control", description: "Services to eliminate pests and insects from homes." },

    { id: 4, categoryId: 2, name: "Regular Cleaning", description: "Scheduled cleaning services for households." },
    { id: 5, categoryId: 2, name: "Deep Cleaning", description: "Thorough cleaning services focusing on hard-to-reach areas." },
    { id: 6, categoryId: 2, name: "Organizing Services", description: "Help with organizing spaces and decluttering." },

    { id: 7, categoryId: 3, name: "Tax Preparation", description: "Services to assist with preparing and filing taxes." },
    { id: 8, categoryId: 3, name: "Bookkeeping", description: "Management of financial records and accounts." },
    { id: 9, categoryId: 3, name: "Financial Consulting", description: "Advice on financial planning and management." },

    { id: 10, categoryId: 4, name: "General Check-ups", description: "Routine medical check-ups for various health concerns." },
    { id: 11, categoryId: 4, name: "Specialist Consultations", description: "Consultations with specialists for specific health issues." },
    { id: 12, categoryId: 4, name: "Emergency Services", description: "Immediate medical attention for urgent health needs." },

    { id: 13, categoryId: 5, name: "Residential Cleaning", description: "Cleaning services specifically for residential properties." },
    { id: 14, categoryId: 5, name: "Commercial Cleaning", description: "Cleaning services for offices and commercial spaces." },
    { id: 15, categoryId: 5, name: "Post-Construction Cleaning", description: "Cleaning services after construction or renovation." },

    { id: 16, categoryId: 6, name: "Pipe Installation", description: "Installation services for new plumbing systems." },
    { id: 17, categoryId: 6, name: "Leak Repair", description: "Services to repair leaking pipes and fixtures." },
    { id: 18, categoryId: 6, name: "Drain Cleaning", description: "Services to clear clogged drains." },

    { id: 19, categoryId: 7, name: "Wiring Installation", description: "Installation of electrical wiring for new constructions." },
    { id: 20, categoryId: 7, name: "Lighting Installation", description: "Installation of indoor and outdoor lighting." },
    { id: 21, categoryId: 7, name: "Electrical Repairs", description: "Repair services for faulty electrical systems." },

    { id: 22, categoryId: 8, name: "Garden Maintenance", description: "Regular maintenance services for gardens." },
    { id: 23, categoryId: 8, name: "Landscape Design", description: "Design and planning services for outdoor spaces." },
    { id: 24, categoryId: 8, name: "Lawn Care", description: "Services to maintain healthy and beautiful lawns." },

    { id: 25, categoryId: 9, name: "Custom Furniture", description: "Bespoke furniture creation services." },
    { id: 26, categoryId: 9, name: "Repair Services", description: "Repair and restoration of wooden furniture." },
    { id: 27, categoryId: 9, name: "Woodworking Classes", description: "Classes to learn woodworking skills." },

    { id: 28, categoryId: 10, name: "Residential Moving", description: "Assistance with moving households." },
    { id: 29, categoryId: 10, name: "Commercial Moving", description: "Moving services for businesses and offices." },
    { id: 30, categoryId: 10, name: "Packing Services", description: "Services to pack belongings securely for moving." },
];

const SubCategoryList = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [viewSubCategory, setViewSubCategory] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editService, setEditService] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // handle view
    const handleView = (category) => {
        setViewSubCategory(category);
        setIsViewModalOpen(true);
    };
    // Handle delete
    const handleDelete = (categoryId) => {
        setIsModalOpen(false);
        console.log('Deleting:', categoryId);
        alert(`Deleteing ${categoryId}`)
    };

    //Handle edit
    const handleEdit = (category) => {
        setEditService(category);
        console.log("Editing Category:", category);
        alert(`Editing ${category.name} `,)
    };


    const filteredSubcategories = selectedCategory
    ? subCategories.filter(subcategory =>
        subcategory.categoryId === selectedCategory.id &&
        subcategory.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : subCategories.filter(subcategory =>
        subcategory.name.toLowerCase().includes(searchQuery.toLowerCase())
    ); // Show all subcategories matching the search query when no category is selected

    return (
        <div>
            <div className='bg-white p-6 shadow-lg rounded-lg '>
                <div className="flex flex-col md:flex-row justify-between items-center mb-5">
                    <h1 className="text-3xl text-dark_blue font-bold mb-4">
                        {selectedCategory ? selectedCategory.name : "Categories"}
                    </h1>

                    {/* SearchBar with search query state */}
                    <div className="flex flex-grow md:max-w-md">
                        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    </div>

                    <div className="mt-4 md:mt-0">
                        <DropButtons onCategorySelect={setSelectedCategory} categories={mockCategories} />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {filteredSubcategories.map((category) => (
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
                        <button className="text-8xl font-bold text-medium_dark_gray"><BsPlusLg /></button>
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