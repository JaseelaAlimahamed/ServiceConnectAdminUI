import React from "react";
import PropTypes from "prop-types";
import FranchiseeCard from "../FranchiseManagement/FranchiseeCard";

const TransactionCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
      {data.length > 0 ? (
        data.map((item, index) => (
          <FranchiseeCard
            key={index}
            title={item.title}
            icon={item.icon}
            count={item.count}
            change={item.change}
            isPositive={item.isPositive}
          />
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

// PropTypes validation
TransactionCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      count: PropTypes.number.isRequired,
      change: PropTypes.number.isRequired,
      isPositive: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TransactionCard;
