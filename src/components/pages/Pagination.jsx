import React from 'react'

const Pagination = ({pageHandler}) => {
 
    let pageNumbers = [1 ,2 , 3 ,4];

  return ( 
        <div className="flex">
                 <center>
            {pageNumbers.map((page)=>{
                return (
            <button onClick={()=>pageHandler(page)} key={page} className='bg-red-600 text-white hover:bg-slate-500 p-3 rounded-full m-2'>{page}</button>
                )
            })}
                 </center>
        </div>
  )
}

export default Pagination
