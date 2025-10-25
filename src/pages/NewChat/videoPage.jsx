import React from 'react';

const VideoPage = ({ idleVideoRef, showFinal, finalVideoRef }) => {
  return (
    <>
      {/* <div className='flex-grow-1 d-flex justify-content-center align-items-center bg-light'>
        <video
          ref={idleVideoRef}
          src='/assets/logo_pulse_loop.mp4'
          // src='/assets/idle_loop.mp4'
          muted
          autoPlay
          loop
          playsInline
          style={{ display: showFinal ? 'none' : 'block', maxHeight: '80vh' }}
        />
        <video
          ref={finalVideoRef}
          style={{ display: showFinal ? 'block' : 'none', maxHeight: '80vh' }}
          controls
        />
      </div> */}
      <video
        ref={idleVideoRef}
        src='/assets/logo_pulse_loop.mp4'
        muted
        autoPlay
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          display: showFinal ? 'none' : 'block',
        }}
      />
    </>
  );
};

export default VideoPage;
