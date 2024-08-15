import React from 'react';
import { useCart } from '../../context/CartContext';
import CartCard from './CartCard';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, totalPrice, removeFromCart } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="flex flex-col h-screen">
      {cart.length > 0 ? (
        <>
          <div className='h-[10vh] items-center bg-red-600 text-white w-[100vw] flex justify-center'>
            <h1 className='text-4xl font-bold'>Your Cart</h1>
          </div>

          <div className='items flex justify-around flex-1 overflow-y-auto' >
            <div>
              {cart.map((product) => (
                <CartCard
                  key={product.id}
                  product={product}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center bg-gray-400 w-[100vw] sticky bottom-0">
            <div className='flex flex-col justify-center'>
              <h1 className='font-bold text-2xl text-white'>Your total is {totalPrice}00/-</h1>
              <div className='flex flex-row m-2'>
                <Link to='/'><button className="btn m-2 p-3 rounded-xl font-bold text-xl bg-red-600 hover:bg-slate-500 text-white">Add More</button></Link>
                <button className="btn m-2 p-3 rounded-xl font-bold text-xl bg-red-600 hover:bg-slate-500 text-white">Check Out</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='h-screen w-[100vw] bg-cover bg-center bg-no-repeat text-white flex justify-center'
          style={{ backgroundImage: `url(./belongings/park.png)` }}>
          <h1 className='font-bold text-4xl '>Your Lot is Empty :( </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
