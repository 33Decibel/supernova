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
import BgImageAi from '../../assets/wave.webp';
import Robo from '../../assets/robo.gif';
import ChatHistory from './ChatHistory';
import Configuration from '../../components/Configuration';
import {
  CloudArrowUpIcon,
  ArrowUpRightIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/solid';

export default function Dashboard() {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpenFile, setDropdownOpenFile] = useState(false);

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
        className='bg-white shadow-sm rounded-xl bg-no-repeat flex-1 flex flex-col 
        max-h-[calc(100vh-90px)]  lg:max-h-[calc(100vh-2rem)] overflow-hidden'
        style={{
          backgroundImage: `url(${BgImageAi})`,
          backgroundSize: 'contain',
          backgroundPosition: 'top',
        }}
      >
        {/* Header */}
        <div className='flex flex-col items-center text-gray-800 flex-shrink-0 px-6 pt-6'>
          <div className='h-[120px] w-full flex items-center justify-center'>
            <img
              src={Robo}
              alt='funny gif'
              className='w-[120px] h-[120px] rounded-full'
            />
          </div>
          <div className='text-center mt-6'>
            <h1 className='text-3xl md:text-4xl font-bold space-font text-gray-900 mb-3'>
              SuperNova
            </h1>
            <p className='text-gray-500 max-w-2xl mx-auto text-sm'>
              Unlock the Potential of AI. Seamlessly integrate machine learning,
              natural language understanding, and predictive analytics into your
              workflows.
            </p>
          </div>
        </div>

        {/* Scrollable Features Grid */}
        <div className='flex-1 overflow-y-auto px-6 my-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-4 
              rounded-2xl shadow-sm border border-gray-150 hover:shadow-md 
              transition-all cursor-pointer bg-[#f6f5f8]`}
              >
                <div className={`mb-3 ${feature.color} p-2 rounded-lg`}>
                  {feature.icon}
                </div>
                <h3 className='text-xs font-semibold'>{feature.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className='flex-shrink-0 w-full px-6 mb-6'>
          <div
            className='flex items-center bg-[#f6f5f8] rounded-xl 
          px-4 py-2 border-b border-[#c8c2d3] '
          >
            <div className='relative'>
              <button
                type='button'
                className='mt-2'
                onClick={() => setDropdownOpenFile(!dropdownOpenFile)}
              >
                {dropdownOpenFile ? (
                  <XMarkIcon className='w-5 h-5  text-gray-400 ' />
                ) : (
                  <PlusIcon className='w-5 h-5 text-gray-400' />
                )}
              </button>
              {dropdownOpenFile && (
                <ul
                  className='absolute -left-[15px] -top-[150px] mt-2 w-35 rounded-xl 
                border border-[#55555546] bg-white backdrop-blur-sm shadow-md
                 text-[#e7bd4e]'
                >
                  <div className='text-[#e7bd4e] flex flex-col p-1 justify-center'>
                    {/* Upload */}
                    <div className=' rounded p-2 flex items-center gap-3 hover:bg-gray-100 transition'>
                      <CloudArrowUpIcon className='w-4 h-4 text-gray-400' />
                      <button className='text-sm font-semibold text-gray-600'>
                        Upload
                      </button>
                    </div>

                    {/* Export */}
                    <div className=' rounded p-2 flex items-center gap-3 hover:bg-gray-100 transition'>
                      <ArrowUpRightIcon className='w-4 h-4 text-gray-400' />
                      <button className='text-[14px] font-semibold text-gray-500'>
                        Export
                      </button>
                    </div>

                    {/* Download */}
                    <div className=' rounded p-2 flex items-center gap-3 hover:bg-gray-100 transition'>
                      <ArrowDownTrayIcon className='w-4 h-4 text-gray-400' />
                      <button className='text-sm font-semibold text-gray-500'>
                        Download
                      </button>
                    </div>
                  </div>
                </ul>
              )}
            </div>

            <div className='border-l border-gray-300 h-8 mx-4'></div>

            <input
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='w-full border-0 bg-transparent outline-none px-3 text-gray-700'
              placeholder='Ask me anything'
            />
            <div className='border-l border-gray-300 h-8 mx-4'></div>
            <button className='text-indigo-500 hover:text-indigo-600 transition'>
              <PaperAirplaneIcon className='w-5 h-5' />
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
