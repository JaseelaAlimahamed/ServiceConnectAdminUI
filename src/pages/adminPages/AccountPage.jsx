import React from "react";



import AddExpenseComponent from "../../components/adminComponents/accountPageComponents/AddExpenseComponent";

import ExpenseList from "../../components/adminComponents//accountPageComponents/ExpenseList";   

const AccountPage = () => {
  return (
    <div className="bg-blue_bg p-6 h-screen ">
      <AddExpenseComponent />
     <ExpenseList/>
    </div>
  );
};

export default AccountPage;
