/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Hamburger from '../assets/Hamburger.svg'
import { useState } from 'react'
import $MICHEAL from '../assets/$MICHEAL.png'

function Mobile() {
  const [isMax, setIsMax] = useState(false); // Initialize isMax state as false

  const toggleHeight = () => {
    setIsMax((prevIsMax) => !prevIsMax); // Toggle the state value between true and false
  };

  const minHeight = 'h-14 items-center justify-center ';
  const maxHeight = 'h-96 items-top justify-start bg-black';

  const showmenu = 'flex';
  const hidemenu = 'hidden';

  return (

    <div className='my-3 mb-6 lg:hidden flex flex-col justify-center items-center py-2 border-2 border-[#FFEE55] rounded-xl w-72 bg-black'>
      <div className="inner w-60 flex justify-between align-middle items-center self-center mt-4  ">
        <a href="#" >
          <img src={$MICHEAL} alt="" className='w-36 mlf-3' />
        </a>
        <div onClick={toggleHeight} className='pt-5d'>
          <img src={Hamburger} alt="" className='bg-whitde w-10s self-startd' />
        </div>
      </div>
      <div className="text-[#EBF752] flex justify-center items-center py-2 w-60">
        <div className={`${isMax ? maxHeight : minHeight} w-60  rounded-xl flex flex-col justify-around  self-center ws-96 h-56 ${isMax ? showmenu : hidemenu}`}>
          <a href="#" target="_blank" rel="noopener noreferrer" className='hover:text-whitel text-left text-4xl hover:text-xl'>Home</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className='hover:text-whitel text-left text-4xl hover:text-xl'>About</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className='hover:text-whitel text-left text-4xl hover:text-xl'>dICKNomics</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className='hover:text-whitel text-left text-4xl hover:text-xl'>Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className='hover:text-whitel text-left text-4xl hover:text-xl'>Telegram</a>

        </div>
      </div>
    </div>
  )
}

export default Mobile