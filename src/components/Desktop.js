/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import $MICHEAL from "../assets/$MICHEAL.png";
import jerknow from "../assets/jerknow.png";

function Desktop() {
  return (
    <div className="hidden lg:flex justify-center items-center py-2 my-5 text-[#EBF752]">
      <div className="flex justify-around items-center self-center w-full h-14 px-3">
        <a href="#">
          <img src={$MICHEAL} alt="" className="w-fit ml-3" />
        </a>
        <div className="rounded-xl flex justify-around items-center self-center w-96">
          <a href="#" className="hover:text-whitel hover:text-xl">
            Home
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-whitel hover:text-xl">
            About
          </a>
          <a href="#tokenomics" target="_blank" rel="noopener noreferrer" className="hover:text-whitel hover:text-xl">
            dICKNomics
          </a>
          <a href="#" className="hover:text-whitel hover:text-xl">
            Twitter
          </a>
          <a href="#" className="hover:text-whitel hover:text-xl">
            Telegram
          </a>
        </div>
        <img src={jerknow} alt="" className='w-fit p-5' />
      </div>
    </div>
  );
}

export default Desktop;
