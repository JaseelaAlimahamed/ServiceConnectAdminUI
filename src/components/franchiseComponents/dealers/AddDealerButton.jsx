import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';

function AddDealerButton({ path }) {
  return (
    <Link
      to={`${path}/add-new`} // Construct the route dynamically
      className="flex items-center justify-center bg-violet rounded-full hover:opacity-90 duration-300 px-14 h-12 gap-2"
    >
      <IoMdAdd className="text-white text-xl" />
      <span className="text-primary text-sm font-medium whitespace-nowrap">
        New Dealers
      </span>
    </Link>
  );
}

export default AddDealerButton;
