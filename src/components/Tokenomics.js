import React from 'react'
import supply from '../assets/supply.png'
import teamsupply from '../assets/teamsupply.png'
import tokenomics from '../assets/tokenomics.png'

function Tokenomics() {
    return (
        <div className='p-4 flex flex-col items-center ' id='tokenomics'>
            <img src={tokenomics} alt="" className='w-fit' />
            <img src={supply} alt="" className='w-fit self-start' />
            <img src={teamsupply} alt="" className='w-fit self-end' />
        </div>
    )
}

export default Tokenomics