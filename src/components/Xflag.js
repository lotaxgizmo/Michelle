import React from 'react'
import whiteflag from '../assets/whiteflag.png'
import yellowflag from '../assets/yellowflag.png'
import bothflag from '../assets/bothflag.png'
import beardmichelle from '../assets/beardmichelle.png'
import zero from '../assets/zero.png'
import muscle from '../assets/muscle.png'

function Xflag() {
    return (
        <div className='relative mb-10 flex flex-col justify-center align-middle items-center'>
            <img src={bothflag} alt="" />
            <img src={beardmichelle} alt="" className='w-56 lg:absolute left-0 bottom-96 [-150px]' />
            <img src={zero} alt="" className='w-fit lg:absolute right-0 bottom-96 [-150px]' />
            <img src={muscle} alt="" className='w-fit lg:absolute  bottom-0 left-[500px] [-150px]' />
        </div>
    )
}

export default Xflag