import React from 'react';

const FranchiseeCard = ({ title, count, change, isPositive, icon }) => {
  return (
    <div className="bg-primary rounded-lg shadow-md p-4 sm:p-6 text-center sm:text-left w-full flex items-center justify-between">
      {/* Icon */}
      {icon && (
        <div className="flex-shrink-0">
          {typeof icon === 'string' ? (
            <img src={icon} alt={`${title} Icon`} className="w-[3rem] aspect-square" />
          ) : (
            <div>{icon}</div>
          )}
        </div>
      )}
      
      {/* Content */}
      <div className="ml-4 flex-grow">
        <h2 className="text-violet font-bold text-base sm:text-lg mb-1">{title}</h2>
        <p className="text-xl sm:text-2xl font-semibold mb-1">{count}</p>
        <p className={`text-sm sm:text-base ${isPositive ? 'text-fluracent_green ' : 'text-red'}`}>
          {isPositive ? '+' : ''}{change}% than last month
        </p>
      </div>
    </div>
  );
};

export default FranchiseeCard;

