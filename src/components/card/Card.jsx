import React from 'react';
import { useCart } from '../../context/CartContext';

const Card = ({ product }) => {

    const {addToCart} = useCart();
    const { id, name, image, price } = product;

    const handleAddToCart = () =>{
        addToCart(product);
    }

    return (
        <div className="card-container m-3 md:flex md:items-center rounded-lg shadow-md border border-gray-300">
            <img className="h-[300px] w-[200px] object-cover rounded-l-lg" src={image} alt={id} />
            <div className="flex flex-col p-4">
                <span className="text-xl font-bold mb-2">{name}</span>
                <span className="text-xl font-bold mb-2">{price}00 ₹</span>
                <button onClick={handleAddToCart} className="btn text-xl font-bold p-2 rounded-full hover:bg-slate-500 bg-red-600 text-white shadow-md">Add to Cart</button>
            </div>
        </div>
    );
};

export default Card;
