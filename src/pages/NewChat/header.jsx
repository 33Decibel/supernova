import React from 'react';

const Header = ({ processing, isRecording }) => {
  return (
    <div
      className='d-flex justify-content-between align-items-center p-2 shadow-sm text-white'
      style={{ zIndex: 1 }}
    >
      <div className='noor-heading'>
        {processing
          ? 'Thinking • NOOR'
          : isRecording
          ? 'Listening (recording)…'
          : 'NOOR • Listening...'}
      </div>
      <p>00:00</p>
    </div>
  );
};

export default Header;
