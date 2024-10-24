import ExpenseTable from "./financeTable/ExpenseTable";
import SubscriptionTable from "./financeTable/SubscriptionTable";

const TableItems = () => {
  return (
    <div className="flex flex-row gap-3 text-dark_blue">
      <SubscriptionTable />
      <ExpenseTable />
    </div>
  );
};

export default TableItems;
