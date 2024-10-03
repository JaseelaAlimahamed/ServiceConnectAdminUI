

import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../../layouts/AdminLayout'
import UserManagement from '../../pages/adminPages/managementPages/UserManagement'
import EditSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/EditSubCategory'
import AddSubCategory from '../../components/adminComponents/CategorySubCategory/AddEditSubCategory/AddSubCategory'

import EditAddFranchiseeType from '../../components/franchaseeComponets/Edit/Add Franchasee Type'


function RouteAdmin() {



  return (
    <Routes>
      <Route element={<AdminLayout/>}>
        <Route path='usermanagement' element={<UserManagement/>}/>
           

              <Route path='editsubcategory' element={<EditSubCategory/>}/>
              <Route path='addsubcategory' element={<AddSubCategory/>}/>
              <Route path='Editaddfranchiseetype' element={<EditAddFranchiseeType />}/>

      </Route>
    </Routes>

  )
} 

export default RouteAdmin