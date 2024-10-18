import ExpenseTable from "./FinanceTable/ExpenseTable";
import SubscriptionTable from "./FinanceTable/SubscriptionTable";

const TableItems = () => {
  return (
    <div className="flex flex-row gap-6">
      <SubscriptionTable />
      <ExpenseTable />
    </div>
  );
};

export default TableItems;
