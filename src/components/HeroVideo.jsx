import React from 'react';

const HeroVideo = () => {
  return (
    <video
      className="h-100vh w-full object-cover animate-clip-from-top-animation"
      autoPlay
      muted
      loop
    >
      <source src="assets/heroVideo.mp4" type="video/mp4" />
    </video>
  );
};

export default HeroVideo;
