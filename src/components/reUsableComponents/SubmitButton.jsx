import React from "react";
import arrow from "/arrow.svg";

const SubmitButton = ({ text, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="bg-dark_blue flex justify-between items-center p-3 text-black rounded-full mt-4"
    >
      <h1 className="text-white ml-3 text-xl">{text}</h1>
      <img
        src={arrow}
        alt="arrow"
        className="w-12 bg-white rounded-full py-3 px-3"
      />
    </button>
  );
};

export default SubmitButton;
