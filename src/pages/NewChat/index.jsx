import React, { useState, useEffect } from 'react';
import { UserIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import GalaxyBg from '../../assets/galaxy-motion-background.mp4';
import CairaLogo from '../../assets/CairaLogo.png';
import {
  DocumentTextIcon,
  CloudArrowUpIcon,
  ArrowUpRightIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NewChat = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenFile, setDropdownOpenFile] = useState(false);
  const fullText = 'I  am NOOR. I listen, I understand, I act.';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); // typing speed (ms per letter)
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='relative w-full h-screen overflow-hidden bg-black'>
      <div className='absolute top-3 right-3 z-[900]'>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className='p-2 rounded-full border border-[#55555546] bg-[radial-gradient(circle,_#f37004,_#2c1801)] text-white bg-transparent hover:bg-yellow-400/20 transition'
        >
          <UserIcon className='w-6 h-6' />
        </button>

        {dropdownOpen && (
          <ul className='absolute right-0 mt-2 w-32 rounded border border-[#55555546] bg-black/70 backdrop-blur-sm text-[#e7bd4e]'>
            <li>
              <button
                onClick={() => alert('Logout clicked')}
                className='w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-[#2c1801]/40'
              >
                <ArrowRightOnRectangleIcon className='w-4 h-4' />
                <span className='text-white'>Logout</span>
              </button>
            </li>
          </ul>
        )}
      </div>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute inset-0 w-full h-full object-cover opacity-70'
      >
        <source src={GalaxyBg} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className='relative z-10 container mx-auto h-full flex flex-col md:flex-row'>
        {/* Left Section */}
        <div className='hidden md:flex md:w-1/4 justify-center items-center'>
          <div className='text-[#e7bd4e] flex flex-col gap-4 justify-center'>
            {/* Section Title */}
            <p className='flex text-sm items-center'>
              <DocumentTextIcon className='w-4 h-4 mr-2 text-[#e7bd4e]' />
              Documents
            </p>

            {/* Upload */}
            <div className='border border-[#55555546] rounded p-3 flex items-center gap-3 hover:bg-[#2c1801]/40 transition'>
              <CloudArrowUpIcon className='w-5 h-5 text-[#e7bd4e]' />
              <button className='text-sm font-medium text-white'>Upload</button>
            </div>

            {/* Export */}
            <div className='border border-[#55555546] rounded p-3 flex items-center gap-3 hover:bg-[#2c1801]/40 transition'>
              <ArrowUpRightIcon className='w-5 h-5 text-[#e7bd4e]' />
              <button className='text-sm font-medium text-white'>Export</button>
            </div>

            {/* Download */}
            <div className='border border-[#55555546] rounded p-3 flex items-center gap-3 hover:bg-[#2c1801]/40 transition'>
              <ArrowDownTrayIcon className='w-5 h-5 text-[#e7bd4e]' />
              <button className='text-sm font-medium text-white'>
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className='h-full w-full md:w-1/2 flex flex-col justify-center items-center  relative'>
          <h3
            className='h-[30px] text-[#e7bd4e] font-normal text-xl md:text-2xl mb-8 text-center 
          whitespace-pre-line'
          >
            {displayedText}

            {/* <span className='animate-pulse text-yellow-200'>|</span> */}
          </h3>
          <img src={CairaLogo} alt='Logo' className='max-h-[250px] mb-8' />
          <div className='border border-[#55555546] rounded p-3 mb-3 mx-2 md:hidden'>
            <p className='flex  text-sm text-white max-w-[300px] '>
              <span className='text-lg mr-2 text-[#e7bd4e] -mt-1'>✦</span>I am
              here, shall we begin?I am here, shall we begin?I am here, shall we
              begin?I am here, shall we begin?
            </p>
          </div>
          <div className='flex '>
            <div className='relative'>
              <button
                type='button'
                onClick={() => setDropdownOpenFile(!dropdownOpenFile)}
                className='md:hidden mr-3 border bg-[radial-gradient(circle,_#2c1801,_#f37004)] border-yellow-400 bg-red-600 text-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-red-700 transition'
              >
                {dropdownOpenFile ? (
                  <XMarkIcon className='w-6 h-6 ' />
                ) : (
                  <DocumentTextIcon className='w-6 h-6 ' />
                )}
              </button>
              {dropdownOpenFile && (
                <ul className='absolute right-0 -top-[170px] mt-2 w-35 rounded border border-[#55555546] bg-black/70 backdrop-blur-sm text-[#e7bd4e]'>
                  <div className='text-[#e7bd4e] flex flex-col p-1 gap-1 justify-center'>
                    {/* Upload */}
                    <div className='border border-[#55555546] rounded p-3 flex items-center gap-3 hover:bg-[#2c1801]/40 transition'>
                      <CloudArrowUpIcon className='w-5 h-5 text-[#e7bd4e]' />
                      <button className='text-sm font-medium text-white'>
                        Upload
                      </button>
                    </div>

                    {/* Export */}
                    <div className='border border-[#55555546] rounded p-3 flex items-center gap-3 hover:bg-[#2c1801]/40 transition'>
                      <ArrowUpRightIcon className='w-5 h-5 text-[#e7bd4e]' />
                      <button className='text-sm font-medium text-white'>
                        Export
                      </button>
                    </div>

                    {/* Download */}
                    <div className='border  border-[#55555546] rounded p-3 flex items-center gap-3 hover:bg-[#2c1801]/40 transition'>
                      <ArrowDownTrayIcon className='w-5 h-5 text-[#e7bd4e]' />
                      <button className='text-sm font-medium text-white'>
                        Download
                      </button>
                    </div>
                  </div>
                </ul>
              )}
            </div>
            <button
              type='button'
              className='border bg-[radial-gradient(circle,_#f37004,_#2c1801)] border-yellow-400 bg-red-600 text-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-red-700 transition'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 640 640'
                width='30'
                height='30'
                fill='currentColor'
              >
                <path d='M320 64C267 64 224 107 224 160L224 288C224 341 267 384 320 384C373 384 416 341 416 288L416 160C416 107 373 64 320 64zM176 248C176 234.7 165.3 224 152 224C138.7 224 128 234.7 128 248L128 288C128 385.9 201.3 466.7 296 478.5L296 528L248 528C234.7 528 224 538.7 224 552C224 565.3 234.7 576 248 576L392 576C405.3 576 416 565.3 416 552C416 538.7 405.3 528 392 528L344 528L344 478.5C438.7 466.7 512 385.9 512 288L512 248C512 234.7 501.3 224 488 224C474.7 224 464 234.7 464 248L464 288C464 367.5 399.5 432 320 432C240.5 432 176 367.5 176 288L176 248z'></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className='hidden md:flex md:w-1/4 justify-center items-center'>
          <div className=' text-[#e7bd4e] overflow-auto'>
            <p className='flex text-sm items-center mb-4'>
              <DocumentTextIcon className='w-4 h-4 mr-2 text-[#e7bd4e]' />
              Converstations
            </p>
            <div className='border border-[#55555546] rounded p-3'>
              <p className='flex items-center text-sm text-white'>
                <span className='text-lg mr-2 text-[#e7bd4e]'>✦</span>I am here,
                shall we begin?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Link */}
      {/* <div className='absolute bottom-5 left-5 hidden md:flex items-center text-yellow-300 hover:text-yellow-200 transition'>
        <a href='/' className='flex items-center gap-1 no-underline'>
          <i className='bi bi-play-circle'></i>
          <span>NOOR Awakening</span>
        </a>
      </div> */}
    </div>
  );
};

export default NewChat;
