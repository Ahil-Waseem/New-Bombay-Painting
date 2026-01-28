import React, { useRef, useState } from "react";
import "./HeroVideo.css";

const HeroVideo = ({
  videoSrc,
  heading,
  subText,
  btnText,
  btnLink,
}) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="hero-video-section">
      <video
        ref={videoRef}
        className="hero-video"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="hero-overlay"></div>

      {/* Sound Button */}
      <button className="sound-btn" onClick={toggleSound}>
        {isMuted ? "🔇 Sound Off" : "🔊 Sound On"}
      </button>

      <div className="hero-content">
        <h2 className="hero-heading">{heading}</h2>
        <p>{subText}</p>

        {btnText && (
          <a href={btnLink} className="hero-btn">
            {btnText}
          </a>
        )}
      </div>
    </section>
  );
};

export default HeroVideo;
