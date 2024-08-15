import React from 'react';

const CartCard = ({ product, handleRemoveFromCart }) => {
  const { id, name, image, price } = product;

  return (
     <div className="flex justify-between items-center mb-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <img 
        src={image} 
        alt={id} 
        className="w-24 h-24 object-cover rounded-md border border-gray-200 shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105" 
      />
      <div className="ml-4 flex flex-col items-end">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-lg text-gray-600">{price}00 ₹</p>
        <button 
          onClick={() => handleRemoveFromCart(id)} 
          className="text-white bg-red-600 hover:bg-red-700 font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
