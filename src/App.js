import React from 'react'
import Hero from './components/Hero'
import Xflag from './components/Xflag'
import News from './components/News'
import Secret from './components/Secret'
import Tokenomics from './components/Tokenomics'
import Quiz from './components/Quiz'
import Proof from './components/Proof'
import Header from './components/Header'

function App() {
  return (
    <div className='bg-black h-full w-full '>
      <Header />
      <Hero />
      <Xflag />
      <News />
      <Secret />
      <Quiz />
      <Tokenomics />
      <Proof />
      <Proof />
    </div>
  )
}

export default App