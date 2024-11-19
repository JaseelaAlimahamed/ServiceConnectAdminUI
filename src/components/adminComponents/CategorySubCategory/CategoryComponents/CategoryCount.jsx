import React, { useEffect, useState } from 'react'
import { ImUserTie } from 'react-icons/im'
import { LiaUserTieSolid } from 'react-icons/lia'
import Card from '../../../reUsableComponents/Card'
import { categoryListGet } from '../../../../service/api/admin/GetApi'
const CategoryCount = () => {

  const [categoriesTotal,setCategoriesTotal] = useState('')
  const [subcategoriesTotal,setSubCategoriesTotal] = useState('')
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
        try {
            const response = await categoryListGet(); // Wait for the promise to resolve
            setRefresh(prev=> !prev)
            setCategoriesTotal(response.total_categories || []); 
            setSubCategoriesTotal(response.total_subcategories || [])
           
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    fetchCategories();
}, [refresh]);

  return (
    <div className="flex flex-col justify-center items-center lg:justify-normal md:justify-normal xl:justify-normal  lg:flex-row md:flex-row xl:flex-row gap-10 mb-8">
        {/* Small fixed width for cards to prevent full-width expansion */}
        <div className="flex-grow-0 flex-shrink-0 w-[12rem]">
          <Card
            variant="small"
            title={categoriesTotal}
            subtitle="Categories"
            iconBg="bg-dark_blue"
            icon={<ImUserTie style={{color:'white'}} />}
          />
        </div>

        <div className="flex-grow-0 flex-shrink-0 w-[12rem]">
          <Card
            variant="small"
            title={subcategoriesTotal}
            subtitle="Sub-Categories"
            iconBg="bg-orange"
            icon={<LiaUserTieSolid  style={{color:'white'}} />}           
          />
        </div>
       
      </div>
  )
}

export default CategoryCount