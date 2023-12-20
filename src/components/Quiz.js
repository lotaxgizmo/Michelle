import React from 'react'
import nuts from '../assets/nuts.png'
import quiz from '../assets/QUIZ.png'

function Quiz() {
    return (
        <div className='flex flex-col items-center'>
            <img src={quiz} alt="" className='mb-10' />
            <img src={nuts} alt="" className='w-fit' />
        </div>
    )
}

export default Quiz