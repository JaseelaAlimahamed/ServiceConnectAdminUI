import React from 'react';
const FranchiseeCard = ({ title, count, change, isPositive, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center w-full">
      {/* Render icon if provided */}
      {icon && (
        <div className="mb-2">
          {typeof icon === 'string' ? (
            <img src={icon} alt={`${title} Icon`} className="w-[2rem] aspect-square mx-auto" />
          ) : (
            <div className="mx-auto">{icon}</div> // If the icon is passed as a JSX element
          )}
        </div>
      )}
      <h2 className="text-gray-700 font-bold text-base mb-1">{title}</h2>
      <p className="text-2xl font-semibold mb-1">{count}</p>
      <p className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? '+' : ''}{change}% than last month
      </p>
    </div>
  );
};

export default FranchiseeCard;
