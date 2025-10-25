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
                 text-[#e7bd4e]'
          >
            <div className='text-[#e7bd4e] flex flex-col p-1 justify-center'>
              {/* Upload */}
              <Link to='/settings'>
                <div className=' rounded p-2 flex items-center gap-3 hover:bg-gray-100 transition'>
                  <CloudArrowUpIcon className='w-4 h-4 text-gray-400' />
                  <button className='text-[12px] font-semibold text-gray-600'>
                    Settings
                  </button>
                </div>
              </Link>

              {/* Export */}
              <div className=' rounded p-2 flex items-center gap-3 hover:bg-gray-100 transition'>
                <ArrowUpRightIcon className='w-4 h-4 text-gray-400' />

                <button
                  onClick={onLogout}
                  className='text-[12px] font-semibold text-gray-500'
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
