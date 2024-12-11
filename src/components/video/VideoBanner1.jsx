import React from "react";

function VideoBanner1() {
  return (
    <div className="hero-video-area mb-120">
      <div className="video-wraper">
        <video autoPlay loop="loop" muted preload="auto">
          <source src="assets/video/video-02.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default VideoBanner1;
