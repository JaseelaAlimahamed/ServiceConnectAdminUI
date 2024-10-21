import React from "react";
import { AiFillStar } from "react-icons/ai";

const Review = ({ name, date, rating, content, imageUrl }) => (
  <div className="bg-white max-w-full">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center">
        <img
          src={imageUrl}
          className="w-12 h-12 rounded-full mr-4"
          alt={`${name}'s avatar`}
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                size={20}
                className={i < rating ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
      </div>
      <span className="text-sm text-blue-600">{date}</span>
    </div>
    <p className="text-gray-700">{content}</p>
  </div>
);

const ReviewList = () => {
  const reviews = [
    {
      name: "Helene Moore",
      date: "June 5, 2019",
      rating: 4,
      content:
        "The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7\" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.",
      imageUrl: "/path/to/helene-moore-image.jpg",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-full">
      {reviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewList;
