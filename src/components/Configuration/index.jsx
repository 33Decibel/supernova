import React, { useState, useEffect, useRef } from 'react';

import SelectAudio from './selectAudio';
import ImportantNote from './ImportantNote';
import Tuningetting from './tuningetting';

const Configuration = ({ setIsOpen, isOpen }) => {
  const [show, setShow] = useState(true);
  const fullText = 'SuperNova';
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const audioRef = useRef(null);

  const HandleSlide = () => setShow(!show);
  const HandleClose = () => setIsOpen(false);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex justify-center items-center bg-black/70 '>
          <div className='relative w-full max-w-4xl p-5'>
            <div className='justify-between items-center pb-6'>
              <h1
                className='text-4xl text-gray-200 space-font text-center'
                style={{ height: '40px' }}
              >
                <span className='text-white font-normal'>
                  {displayed.split(' ')[0] || ''}
                </span>
                {displayed.includes(' ') && (
                  <span className='text-white font-normal ml-2'>
                    {displayed.split(' ')[1]}
                  </span>
                )}
              </h1>
              <h2 className='mt-0 text-gray-200 font-normal text-sm text-center'>
                What is your primary goal for using InnovatFlow?
              </h2>
            </div>

            {show ? (
              <div
                className={`text-gray-600 dark:text-gray-300 bg-[#fffffff5] rounded-lg shadow dark:bg-gray-700`}
              >
                <div className='p-6 pb-[16px]'>
                  <div>
                    <h2 className='mt-0 text-gray-700 font-normal text-sm'>
                      Your AI Name
                    </h2>
                    <div className='mt-2'>
                      <input
                        type='text'
                        placeholder='Enter your AI name here'
                        className='w-full block rounded-md border border-gray-300 bg-white px-3 py-1.5 
                          text-[12px] text-gray-900 placeholder:text-gray-400 focus:outline-none'
                      />
                    </div>

                    <h2 className='mt-4 mb-2 text-gray-700 font-normal text-sm'>
                      Select Your AI Audio
                    </h2>
                    <SelectAudio />
                  </div>
                  <div className='flex justify-end'>
                    <button
                      onClick={HandleSlide}
                      className='px-3 py-2 text-xs font-medium text-center text-white bg-green-700 hover:bg-green-800 rounded-lg'
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className='h-[70vh] overflow-y-auto space-y-4 text-gray-600
               dark:text-gray-300 bg-white rounded-xl shadow dark:bg-gray-700'
              >
                <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
                  <ImportantNote />
                  <div className='p-6'>
                    <h2 className='mb-2 text-gray-700 font-normal text-sm '>
                      Your AI Persona
                    </h2>
                    <textarea
                      rows={3}
                      defaultValue='Friendly, calm, and intelligent — always eager to help with a positive attitude.'
                      className='w-full mb-0 rounded-md border border-gray-300 bg-white px-3 py-2 placeholder-gray-400 focus:outline-none resize-none text-[12px] font-normal'
                    />
                    <h2 className='mt-4 mb-2 text-gray-700 font-normal text-sm'>
                      AI Configuration
                    </h2>
                    <Tuningetting />
                    <div
                      className='flex justify-end gap-3 pt-3'
                      style={{ marginTop: '0px' }}
                    >
                      <button
                        onClick={HandleSlide}
                        className='px-3 py-2 text-xs text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg'
                      >
                        Back
                      </button>
                      <button
                        onClick={HandleClose}
                        className='px-3 py-2 text-xs text-center text-white bg-green-700 hover:bg-green-800 rounded-lg'
                      >
                        Save Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <audio ref={audioRef} />
        </div>
      )}
    </>
  );
};

export default Configuration;
