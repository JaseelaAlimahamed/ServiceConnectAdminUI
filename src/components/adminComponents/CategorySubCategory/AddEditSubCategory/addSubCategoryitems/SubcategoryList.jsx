import SubCategoryCard from '../addSubCategoryitems/Cards';

const SubCategoryList = ({ categories, onView, onEdit, onDelete }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((subcategory) => (
                <SubCategoryCard 
                    key={subcategory.id} 
                    subcategory={subcategory} 
                    onView={onView} 
                    onEdit={onEdit} 
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default SubCategoryList;
