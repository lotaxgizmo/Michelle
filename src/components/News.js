import React from 'react'
import newssection from '../assets/newssection.png'
import obamic from '../assets/obamic.png'
function News() {
    return (
        <div className='flex justify-center items-center flex-col'>
            <img src={newssection} alt="" className='lg:w-[1180px] w-[329px]' />
            <img src={obamic} alt="" className='lg:w-[788px] w-[329px] mt-36 ' />
        </div>
    )
}

export default News