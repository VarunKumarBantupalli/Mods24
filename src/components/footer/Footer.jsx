import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="bg-red-600 grid-cols-3 p-2 flex justify-around hover:text-blue text-red sticky">
            <ul>
                <h1 className='font-bold text-black text-xl my-2'>About</h1>
                <li  className='text-xs underline hover:text-sm hover:text-blue  p-2'>About Us</li>
                <li  className='text-xs underline hover:text-sm hover:text-blue  p-2'>Contact Us</li>
                <li  className='text-xs underline hover:text-sm hover:text-blue text-red p-2'>FAQ</li>
            </ul>

            <ul>
                <h1 className='font-bold text-black text-xl my-2'>Policy</h1>
                <li  className='text-xs underline hover:text-sm hover:text-blue  p-2'>Privacy Policy</li>
                <li  className='text-xs underline hover:text-sm hover:text-blue  p-2'>Refund Policy</li>
                <li  className='text-xs underline hover:text-sm hover:text-blue  p-2'>Webs Policy</li>
            </ul>

            <ul>
                <h1 className='font-bold text-black text-xl my-2'>Support</h1>
                <li className='text-xs underline hover:text-sm hover:text-blue  p-2'>Jobs</li>
                <li className='text-xs underline hover:text-sm hover:text-blue  p-2'>Articles</li>
                <li className='text-xs underline hover:text-sm hover:text-blue  p-2'>Brands</li>
            </ul>
                         

                  
        </div>
    </div>
  )
}

export default Footer
