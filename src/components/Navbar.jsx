import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../productsData'


const Navbar = ({ setRequiredData }) => {

  const [search, setSearch] = useState('');
 

 const changeHandler = (e) =>{
  setSearch(e.target.value);
 } 

 const fetchData = () =>{
  const filteredData = PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  setRequiredData(filteredData);  
}


const submitHandler = (e) =>{
   e.preventDefault();
   fetchData();
}

  return (
    <div className='nav h-[20vh] navbar md:h-[60vh] w-full bg-cover bg-center bg-no-repeat '
      style={{ backgroundImage: `url(./belongings/nav.png)` }}>
      <div className="content flex flex-col justify-between h-full">

        <div className="title flex justify-between md:p-10">
          <div>
          <span className='text-4xl text-red-600 font-bold'>Mods</span>
          <span className='text-4xl text-white font-bold'>24</span>
          </div>

          <div className="icons ">
            <Link to="/about" className='h-[48px] w-[56px] material-symbols-outlined text-4xl bg-red-500 m-2 rounded-full 
             p-2' >shopping_cart</Link>
            <Link to="/profile" className='h-[48px] w-[56px] material-symbols-outlined text-4xl bg-red-500 m-2 rounded-full 
             p-2' >account_circle</Link>
          </div>

        </div>

        <div className="search flex justify-around my-2">
          <form onSubmit={submitHandler} >

            <input onChange={changeHandler} className='text-xl p-2 md:w-[500px] mx-2 rounded-full' type="text" value={search} 
            placeholder='ex:Camo Green Wrap' />
            <button type='submit' value="search" className="btn bg-red-500  text-xl p-2 font-bold mx-2 
            rounded-full hover:bg-slate-500">
              <span class="material-symbols-outlined">search</span></button>

          </form>
        </div>
      </div>
    </div >
  )
}

export default Navbar
