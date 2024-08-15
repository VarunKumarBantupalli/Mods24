import React from 'react'
import Card from '../card/Card'
import { PRODUCTS } from '../../productsData'
import Pagination from '../pages/Pagination'
import { useState } from 'react'

const Body = ({ requiredData }) => {


    const data = requiredData.length >= 1 ? requiredData : PRODUCTS;
    const [perpage, setPerpage] = useState(data.slice(0, 12));
    const pageHandler = (pageNumber) => {
        setPerpage(data.slice((pageNumber - 1) * 12, pageNumber * 12));

    }
    return (
        <div>
            {requiredData.length >= 1 ?
                <div>
                    <div className='bg-black text-white text-xs font-semibold flex justify-center'>
                        <span>Note:We are currently able to deal Wraps,Alloys,brakepads & exhausts only</span>
                    </div>
                    <div className='cards grid-cols-2  md:grid-cols-3  grid'>
                        {data.map((product) => {
                            return <Card key={product.id} product={product} />
                        })}
                    </div>
                </div>
                :
                <div>
                    <div className='bg-black text-white text-xs font-semibold flex justify-center'>
                        <span>Note:We are currently able to deal Wraps,Alloys,brakepads & exhausts only</span>
                    </div>
                    < div className='cards grid-cols-2  md:grid-cols-3  grid '>
                        {perpage.map((product) => {
                            return <Card key={product.id} product={product} />
                        })}
                    </div>
                    <div className='flex items-center justify-center w-full mt-4'>
                        <Pagination pageHandler={pageHandler} />
                    </div>
                </div>
            }


        </div>
    )
}

export default Body
