import React, { useState } from 'react';
import SplashPage from './components/SplashPage';
import Hero from './components/Hero'
import Xflag from './components/Xflag'
import News from './components/News'
import Secret from './components/Secret'
import Tokenomics from './components/Tokenomics'
import Quiz from './components/Quiz'
import Proof from './components/Proof'
import Header from './components/Header'

const MainSite = () => {
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
  );
};

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleContinueClick = () => {
    setShowIntro(false);
  };

  return (
    <div>
      {showIntro ? (
        <SplashPage onContinueClick={handleContinueClick} />
      ) : (
        <MainSite />
      )}
    </div>
  );
};

export default App;
