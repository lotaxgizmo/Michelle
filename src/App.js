import React, { useState } from 'react';
import video from './assets/video.mp4';
import audio from './assets/audio.mp3';
import Header from './components/Header';
import Hero from './components/Hero'
import Xflag from './components/Xflag'
import News from './components/News'
import Secret from './components/Secret'
import Tokenomics from './components/Tokenomics'
import Quiz from './components/Quiz'
import Proof from './components/Proof'

const SplashPage = ({ onContinueClick }) => {
  const [audioPlayed, setAudioPlayed] = useState(false);

  const handleClick = () => {
    if (!audioPlayed) {
      const audioElement = new Audio(audio);
      audioElement.play().then(() => {
        setAudioPlayed(true);
        // Call the provided onContinueClick callback after audio is played
        onContinueClick();
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <video src={video} className="w-[500px] h-auto rounded" autoPlay muted playsInline loop alt="Video Description"></video>

      <div
        className="bg-[#EBF752] text-black font-bold py-2 px-4 rounded cursor-pointer"
        onClick={handleClick}
      >
        {audioPlayed ? 'Click to Continue' : 'Click to Continue'}
      </div>
    </div>
  );
};

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
  const [showIntro, setShowIntro] = React.useState(true);

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