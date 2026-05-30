import React from "react";
import "./VideoBanner.scss";
import videoBg from "../../assets/Image-23.png";

const VideoBanner = () => {
  const handlePlay = () => {
    window.open("https://www.youtube.com/watch?v=I-Y5FHI4JXc", "_blank");
  };

  return (
    <section className="video-banner">
      <img src={videoBg} alt="" className="video-banner__bg" />
      <span className="video-banner__title">alto.</span>
      <button
        className="video-banner__play"
        onClick={handlePlay}
        aria-label="Assistir vídeo"
      >
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="29" stroke="white" strokeWidth="2" fill="rgba(255,255,255,0.15)" />
          <polygon points="24,18 44,30 24,42" fill="white" />
        </svg>
      </button>
      <div className="video-banner__caption">
        <p>no volume.</p>
        <p>na cor.</p>
        <p>na presença</p>
      </div>
    </section>
  );
};

export default VideoBanner;
