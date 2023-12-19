import React from 'react'
import raydium from '../assets/raydium.png'
import jerknow from '../assets/jerknow.png'
import jerklater from '../assets/jerklater.png'
import heromain from '../assets/heromain.png'
import ca from '../assets/ca.png'
import $Michael from '../assets/$Michael.png'

function Hero() {
    return (
        <div className='flex flex-col p-4 items-center mt-24 lg:mt-10'>
            <img src={heromain} alt="" className='w-fit mb-4 lg:mb-8' />
            <img src={$Michael} alt="" className='w-fit mb-4 lg:mb-8' />
            <img src={ca} alt="" className='w-fit mb-4' />
            <div className="flex flex-col lg:flex-row">
                <img src={jerknow} alt="" className='w-fit p-5' />
                <img src={jerklater} alt="" className='w-fit p-5' />
            </div>
            <img src={raydium} alt="" className='w-fit p-5' />
        </div>
    )
}

export default Hero