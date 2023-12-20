import React from 'react'
import proof from '../assets/proof.png'
import obamic from '../assets/obamic.png'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'


function Proof() {
    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <img src={proof} alt="" className="w-fit" />
            <div className="gallery border-2 border-[#EBF752] rounded-2xl lg:rounded-[60px] py-20 w-full flex flex-col
            items-center align-middle justify-center">
                <div className="flex">
                    <img src={pic1} alt="" className="w-52 lg:w-fit p-2" />
                    <img src={pic2} alt="" className="w-52 lg:w-fit p-2" />
                </div>
                <img src={pic3} alt="" className="w-52 lg:w-fit p-2" />
                <img src={pic4} alt="" className="w-52 lg:w-fit p-2" />
                <img src={pic5} alt="" className="w-52 lg:w-fit p-2" />
                <img src={pic6} alt="" className="w-52 lg:w-fit p-2" />

            </div>
        </div>
    )
}

export default Proof