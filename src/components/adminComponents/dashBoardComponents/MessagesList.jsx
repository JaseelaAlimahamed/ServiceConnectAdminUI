import React from 'react';

const MessagesList = () => {
  const messages = [
    { id: 1, name: "Samantha William", message: "Lorem ipsum dolor sit amet...", time: "12:45 PM" },
    { id: 2, name: "Tony Soap", message: "Lorem ipsum dolor sit amet...", time: "12:45 PM" },
    { id: 3, name: "Jordan Nico", message: "Lorem ipsum dolor sit amet...", time: "12:45 PM" },
    { id: 4, name: "Nadila Adja", message: "Lorem ipsum dolor sit amet...", time: "12:45 PM" }
  ];
  const handleViewMore = () =>{
    alert("true")
  }
  const handleViewMessage = () =>{
    alert("true")
  }
  return (
    <div className="w-full">
     
        <h2 className="text-xl font-bold text-dark_blue mb-4 ">Messages</h2>
        
        {messages.map((msg, index) => (
          <div 
            key={msg.id} 
            className={`flex items-center justify-between mb-4 cursor-pointer ${index < messages.length - 1 ? 'border-b border-gray-300 pb-4' : ''}`}
            onClick={handleViewMessage}
          >
            <div className="flex items-center">
              <div className="bg-light_gray w-8 h-8 rounded-full"></div>
              <div className="ml-3">
                <p className="font-semibold text-dark_blue">{msg.name}</p>
                <p className="text-light_gray text-xs">{msg.message}</p>
              </div>
            </div>
            <p className="text-light_gray text-sm">{msg.time}</p>
          </div>
        ))}

        <div className="flex justify-center mt-8">
          <button onClick={handleViewMore} className="w-full bg-blue_gray text-violet font-bold px-6 py-2 rounded-full hover:bg-purple-200">
            View More
          </button>
        </div>
      </div>
    
  );
};

export default MessagesList;
