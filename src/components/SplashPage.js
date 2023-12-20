import React, { useRef, useState } from 'react';
import video from '../assets/video.mp4';
import audio from '../assets/audio.mp3';

const SplashPage = ({ onContinueClick }) => {
    const [audioPlayed, setAudioPlayed] = useState(false);
    const audioRef = useRef(null);

    const handleContinueClick = () => {
        if (!audioPlayed) {
            // Play the audio directly using the ref
            audioRef.current.play();
            setAudioPlayed(true);
        }

        // Call the provided onContinueClick callback
        onContinueClick();
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <video src={video} className="w-[500px] h-auto rounded" autoPlay muted playsInline loop alt="Video Description"></video>

            {/* Audio element with autoPlay attribute set to false */}
            <audio ref={audioRef} src={audio} autoPlay={false} />

            <div
                className="bg-[#ebf752]  text-black font-bold py-2 px-4 rounded cursor-pointer"
                onClick={handleContinueClick}
            >
                Click to Continue
            </div>
        </div>
    );
};

export default SplashPage;
