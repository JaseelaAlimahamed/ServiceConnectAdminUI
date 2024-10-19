import React from "react";

import AddExpense from "./AddExpense";

import AddExpenseComponent from "./AddExpenseComponent";
const AccountPage = () => {
  return (
    <div className="bg-blue_bg p-6 h-screen ">
      <AddExpenseComponent />
      <AddExpense />
    </div>
  );
};

export default AccountPage;
