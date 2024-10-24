import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const SubCategoryCard = ({ subcategory, onView, onEdit, onDelete }) => {
    return (
        <div className="shadow-lg bg-blue_bg rounded-lg p-4 relative w-full hover:shadow-xl transition-shadow duration-300">
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
                    <button onClick={() => onView(subcategory.name)} className="hover:text-violet">
                        <MdOutlineRemoveRedEye />
                    </button>
                    <button onClick={() => onEdit(subcategory.id)} className="hover:text-violet">
                        <FaRegEdit />
                    </button>
                    <button onClick={() => onDelete(subcategory.id)} className="hover:text-violet">
                        <FaRegTrashAlt />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryCard;
