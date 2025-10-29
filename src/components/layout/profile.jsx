import { useState } from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  CloudArrowUpIcon,
  ArrowUpRightIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function Profile({ isOpen, onLogout }) {
  const [dropdownOpenFile, setDropdownOpenFile] = useState(false);

  return (
    <>
      <div className='relative w-100'>
        <button
          type='button'
          onClick={() => setDropdownOpenFile(!dropdownOpenFile)}
          className='w-100 flex items-center gap-x-4 px-6 py-3 
          text-sm/6 font-semibold text-gray-900'
        >
          <img
            alt=''
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            className='size-8 rounded-full bg-gray-100 outline -outline-offset-1 outline-black/5'
            style={{ minWidth: '32px' }}
          />
          {isOpen && <span aria-hidden='true'>Tom Cook</span>}
        </button>
        {dropdownOpenFile && (
          <ul
            className='absolute left-[15px] bottom-[50px] mt-2 w-35 rounded-xl 
                border border-[#55555546] bg-white backdrop-blur-sm shadow-md
                 '
          >
            <div className=' flex flex-col p-1 justify-center'>
              {/* Upload */}
              <Link to='/settings'>
                <div className=' rounded p-2 pb-0 flex items-center gap-3 hover:bg-gray-100 transition'>
                  {/* <CloudArrowUpIcon className='size-4' /> */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-4  text-gray-400'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495'
                    />
                  </svg>

                  <button className='text-[12px] font-semibold'>
                    Settings
                  </button>
                </div>
              </Link>

              {/* Export */}
              <div className=' rounded p-2 flex items-center gap-3 hover:bg-gray-100 transition'>
                {/* <ArrowUpRightIcon className='size-4 text-gray-400' /> */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-4 text-gray-400'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15'
                  />
                </svg>

                <button
                  onClick={onLogout}
                  className='text-[12px] font-semibold'
                >
                  Logout
                </button>
              </div>
            </div>
          </ul>
        )}
      </div>
    </>
  );
}
