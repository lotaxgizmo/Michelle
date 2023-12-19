import React from 'react'
import proof from '../assets/proof.png'

import obamic from '../assets/obamic.png'

function Proof() {
    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <img src={proof} alt="" className="w-fit" />
            <div className="gallery border-2 border-[#EBF752] rounded-2xl lg:rounded-[60px] py-20 w-full flex flex-col
            items-center align-middle justify-center">
                <img src={obamic} alt="" className="w-52 lg:w-fit py-2" />
                <img src={obamic} alt="" className="w-52 lg:w-fit py-2" />
                <img src={obamic} alt="" className="w-52 lg:w-fit py-2" />
                <img src={obamic} alt="" className="w-52 lg:w-fit py-2" />


            </div>
        </div>
    )
}

export default Proof