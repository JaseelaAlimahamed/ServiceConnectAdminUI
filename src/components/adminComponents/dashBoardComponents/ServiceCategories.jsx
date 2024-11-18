import React from 'react'
import { useNavigate } from 'react-router-dom'


const ServiceCategories = ({Categories}) => {

    const mockCategories = [
        { id: 1, name: "Home Services", image: "https://media.istockphoto.com/id/1457385092/photo/an-asian-young-technician-service-man-wearing-blue-uniform-checking-cleaning-air-conditioner.jpg?s=612x612&w=0&k=20&c=Tqu5jMzD1TKFO1Fvow6d0JMDsEGU8T3kToP706bQFQI=", description: "Services to maintain and enhance your home." },
        { id: 2, name: "House Keeping", image: "https://media.istockphoto.com/id/1417833172/photo/professional-cleaner-holding-a-basket-of-cleaning-products.jpg?s=612x612&w=0&k=20&c=bqhz1jDqSxEQB1OAvm9DP_7SWNKR2F8t7Mzfr4Hchm4=", description: "Cleaning and organizing services for households." },
        { id: 3, name: "Accounting", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT388bhanKIqfnQLGVV-2K2KdiabCdBHpU4A&s", description: "Financial services including bookkeeping and tax preparation." },
        { id: 4, name: "Doctor", image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww", description: "Healthcare services for various medical needs." },
    ]

  const navigate = useNavigate()    

  const handleCategory = ()=>{
    navigate('/admin/categories')
  }
  return (
   <div className="w-full">
     
    <h2 className="text-xl font-bold text-dark_blue mb-8 ">Service Categories</h2>
    
    {Categories.slice(0, 3).map((category,index) => (
      <div key={category.index} className="relative w-full flex flex-col gap-10">
      <h1 className='mt-3 text-lg text-violet'>{category.title}</h1>
      <div className="bg-light_gray rounded-t-lg w-full h-40">
          <img
              src={category.image}
              alt={category.title}
              className="object-cover w-full h-full rounded-t-lg"
          />
      </div>
      </div>
    ))}

    <div className="flex justify-center mt-4">
      <button onClick={handleCategory} className="w-full bg-blue_gray text-violet font-bold px-6 py-2 rounded-full hover:bg-purple-200">
        View More
      </button>
    </div>
  </div>
  )
}

export default ServiceCategories