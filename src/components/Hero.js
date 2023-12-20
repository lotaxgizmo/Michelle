import React, { useState } from 'react';
import raydium from '../assets/raydium.png'
import jerknow from '../assets/jerknow.png'
import jerklater from '../assets/jerklater.png'
import heromain from '../assets/heromain.png'
import ca from '../assets/ca.png'
import $Michael from '../assets/$Michael.png'
import mainmichelle from '../assets/mainmichelle.svg'
import michellemuscle from '../assets/michellemuscle.svg'
import obahead from '../assets/obahead.svg'

function Hero() {

    const textToCopy = 'BGhxD7svTFHjLgB8S62dF5TbBExuMx64JD4WKuQnQdNX';
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);

        // Reset the "Copied" state after a short delay
        setTimeout(() => {
            setIsCopied(false);
        }, 1500);
    };

    return (
        <div className='flex flex-col p-4 items-center mt-24 lg:mt-36 relative'>
            <img src={heromain} alt="" className='w-fit mb-4 lg:mb-8' />
            <img src={$Michael} alt="" className='w-fit mb-4 lg:mb-8' />
            <button className='text-[#EBF752] text-lg block z-10. mt-2 ' onClick={handleCopyClick}>
                <img src={ca} alt="" className='w-fit mb-4' />

                {isCopied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
            <div className="flex flex-col lg:flex-row">
                <img src={jerknow} alt="" className='w-fit p-5' />
                <img src={jerklater} alt="" className='w-fit p-5' />
            </div>
            <img src={raydium} alt="" className='w-fit p-5' />
            <img src={obahead} alt="" className='w-fit absolute left-0 top-[-150px] hidden lg:flex' />
            <img src={mainmichelle} alt="" className='w-fit lg:absolute left-0 bottom-36 [-150px]' />
            <img src={michellemuscle} alt="" className='w-fit lg:absolute right-0 bottom-36 [-150px]' />
        </div>
    )
}

export default Hero