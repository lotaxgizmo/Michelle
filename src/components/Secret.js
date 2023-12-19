import React from 'react'
import secret from '../assets/secret.png'
import secretsmall from '../assets/secretsmall.png'
import jerknow from '../assets/jerknow.png'

function Secret() {
    return (
        <div className='p-4 flex flex-col justify-center items-center'>
            <img src={secretsmall} alt="" className='w-fit lg:hidden' />
            <img src={secret} alt="" className='w-fit hidden lg:flex' />
            <img src={jerknow} alt="" className='w-fit p-5 lg:self-end' />
        </div>
    )
}

export default Secret