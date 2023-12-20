import React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'

function Header() {
    return (
        <div className='mt-5`'>
            <Desktop />
            <div className='Header flex justify-center align-center w-full self-center fixed top-1 z-20'>
                <Mobile />
            </div>
        </div>
    )
}

export default Header