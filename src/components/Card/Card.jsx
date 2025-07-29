import React from 'react';

const Card = ({ jersey }) => {
  return (
    <div className="bg-white border rounded hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <img
        src={jersey.image}
        alt={jersey.name}
        className="w-full h-100 md:h-75 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{jersey.name}</h3>
      </div>
    </div>
  );
};

export default Card;
