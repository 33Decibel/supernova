import { useState, useEffect } from 'react';
import {
  PhotoIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  PaperAirplaneIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import BgImageAi from '../../assets/bg-supernova.jpg';
import BgImageAi from '../../assets/oldchatbg.webp';

import Robo from '../../assets/robo.gif';
import ChatHistory from './ChatHistory';
import Configuration from '../../components/Configuration';
import {
  CloudArrowUpIcon,
  ArrowUpRightIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/solid';
import CairaLogo from '../../assets/CairaLogo.png';

export default function Dashboard() {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpenFile, setDropdownOpenFile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const justLoggedIn = sessionStorage.getItem('justLoggedIn');
    const hasShown = localStorage.getItem('hasShownModal');

    console.log(
      '🧩 Modal Debug => justLoggedIn:',
      justLoggedIn,
      'hasShown:',
      hasShown
    );

    if (justLoggedIn === 'true' && !hasShown) {
      setIsModalOpen(true);
      localStorage.setItem('hasShownModal', 'true');
    }

    // clear login flag after checking
    sessionStorage.removeItem('justLoggedIn');
  }, []);

  const features = [
    {
      name: 'Photo Generation',
      icon: <PhotoIcon className='w-5 h-5 text-purple-500' />,
      color: 'bg-purple-100',
    },
    {
      name: 'Video Generation',
      icon: <VideoCameraIcon className='w-5 h-5 text-green-500' />,
      color: 'bg-green-100',
    },
    {
      name: 'Education & Science',
      icon: <AcademicCapIcon className='w-5 h-5 text-pink-500' />,
      color: 'bg-pink-100',
    },
    {
      name: 'Code Generation',
      icon: <CodeBracketIcon className='w-5 h-5 text-indigo-500' />,
      color: 'bg-indigo-100',
    },
    {
      name: 'Voice Tools',
      icon: <MicrophoneIcon className='w-5 h-5 text-sky-500' />,
      color: 'bg-sky-100',
    },
    {
      name: 'Text Recognition',
      icon: <DocumentTextIcon className='w-5 h-5 text-orange-500' />,
      color: 'bg-orange-100',
    },
  ];
  return (
    <div className='flex gap-4'>
      <div
        className='bg-white shadow-sm rounded-xl  flex-1 
        min-h-[calc(100vh-90px)] bg-no-repeat lg:max-h-[calc(100vh-2rem)]'
        style={{
          backgroundImage: `url(${BgImageAi})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        {' '}
        <div className='h-full w-full  flex flex-col justify-center items-center  '>
          <img src={CairaLogo} alt='Logo' className='max-h-[250px] mb-4' />
          <h2 className='space-font text-4xl'>SUPERNOVA</h2>
          <h2 className='space-font mb-4 text-2xl'>BY CAIRA</h2>
          <div className='border border-[#55555546] rounded p-3 mb-3 mx-2 hidden'>
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
                className=' mr-3 border bg-indigo-700 border-indigo-800 text-white rounded-full w-14 h-14 flex 
                items-center justify-center hover:bg-indigo-500 transition'
              >
                {dropdownOpenFile ? (
                  <XMarkIcon className='w-6 h-6 ' />
                ) : (
                  <DocumentTextIcon className='w-6 h-6 ' />
                )}
              </button>
              {dropdownOpenFile && (
                <ul
                  className='absolute right-[10px] -top-[130px] mt-2 w-35 rounded-xl 
                border border-[#55555546] bg-white backdrop-blur-sm shadow-md
                 '
                >
                  <div className='flex flex-col p-1 justify-center'>
                    {/* Upload */}
                    <div className=' rounded p-2 pb-0 flex items-center gap-3 hover:bg-gray-100 transition'>
                      <CloudArrowUpIcon className='w-4 h-4 text-gray-400' />
                      <button className='text-sm font-semibold '>Upload</button>
                    </div>

                    {/* Export */}
                    <div className=' rounded p-2 pb-0 flex items-center gap-3 hover:bg-gray-100 transition'>
                      <ArrowUpRightIcon className='w-4 h-4 text-gray-400' />
                      <button className='text-[14px] font-semibold '>
                        Export
                      </button>
                    </div>

                    {/* Download */}
                    <div className=' rounded p-2 flex items-center gap-3 hover:bg-gray-100 transition'>
                      <ArrowDownTrayIcon className='w-4 h-4 text-gray-400' />
                      <button className='text-sm font-semibold '>
                        Download
                      </button>
                    </div>
                  </div>
                </ul>
              )}
            </div>
            <button
              type='button'
              className='border bg-indigo-700 border-indigo-800  text-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-indigo-500 transition'
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
      </div>
      <div className='hidden xl:block'>
        <ChatHistory />
      </div>
      <div className='absolute top-4 right-4'>
        <div className='relative xl:hidden '>
          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(true)}
            className='p-2  rounded-md text-gray-700 hover:text-gray-400 dark:text-gray-200
            '
          >
            <Bars3Icon className='w-6 h-6' />
          </button>
          {isOpen && (
            <div
              className='fixed inset-0 bg-black/30 z-40'
              onClick={() => setIsOpen(false)}
            ></div>
          )}
          <div
            className={`fixed top-0 right-0 h-full   z-50 
            transform transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Close Button */}
            {/* <div className='flex justify-end p-4 absolute'>
            <button
              onClick={() => setIsOpen(false)}
              className='p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700'
            >
              <XMarkIcon className='w-6 h-6 text-gray-700 dark:text-gray-200' />
            </button>
          </div> */}

            {/* Drawer Content */}
            <nav className='flex flex-col gap-2 p-4'>
              <ChatHistory />
            </nav>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Configuration setIsOpen={setIsModalOpen} isOpen={isModalOpen} />
      )}
    </div>
  );
}
