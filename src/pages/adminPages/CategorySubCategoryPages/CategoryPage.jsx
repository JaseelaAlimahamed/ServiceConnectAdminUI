import React from 'react'
import CategoryCount from '../../../components/adminComponents/CategorySubCategory/CategoryComponents/CategoryCount'
import CategoryList from '../../../components/adminComponents/CategorySubCategory/CategoryComponents/CategoryList'

const CategoryPage = () => {
  return (
    <div  className='bg-blue_bg p-6 h-screen '>
        <CategoryCount/>
        <CategoryList/>
    </div>
  )
}

export default CategoryPage