import React, { useState } from 'react';
import {
  InformationCircleIcon,
  XMarkIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  // TabletIcon,
} from '@heroicons/react/24/outline';

const users = [
  {
    id: 1,
    name: 'Albert Flores',
    email: 'debbie.baker@example.com',
    avatar: 'https://cdn.worldvectorlogo.com/logos/behance-1.svg',
  },
  {
    id: 2,
    name: 'Bessie Cooper',
    email: 'alma.lawson@example.com',
    avatar: 'https://cdn.worldvectorlogo.com/logos/google-g-2015.svg',
  },
  {
    id: 3,
    name: 'Devon Lane',
    email: 'nathan.roberts@example.com',
    avatar: 'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg',
  },
  {
    id: 4,
    name: 'Marvin McKinney',
    email: 'bill.sanders@example.com',
    avatar: 'https://cdn.worldvectorlogo.com/logos/diamond-1.svg',
  },
];
export default function Application() {
  const [showAlert, setShowAlert] = useState(true);
  return (
    <>
      <div className='flex justify-between mb-6 border-b pb-2 '>
        <h4 className='text-xl font-bold ps-8 lg:ps-0 '>Applications</h4>
        <button className='bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm'>
          Add More Applications
        </button>
      </div>
      {showAlert && (
        <div className='relative bg-purple-50 border border-purple-200 rounded-xl p-5 mb-4'>
          <div className='flex items-start  gap-3'>
            <div className='flex-shrink-0 mt-[6px]'>
              <div className='w-8 h-8 rounded-md bg-[#5D1818] flex items-center justify-center text-orange-300 font-bold text-lg'>
                Ai
              </div>
            </div>
            <div>
              <h2 className='text-purple-700 font-semibold'>
                Application request
              </h2>
              <p className='text-gray-600 text-sm mt-1'>
                Resizing thumbnail align layout team union scrollling figma
                ellipse. Editor connection device group team distribute invite
                library
              </p>
            </div>
          </div>
          <div className='mt-4  flex gap-3 sm:gap-4 justify-end'>
            <button
              onClick={() => setShowAlert(false)}
              className='text-gray-600 hover:text-gray-800 text-sm font-medium'
            >
              Dismiss
            </button>
            <button className='bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm'>
              Accept
            </button>
            <XMarkIcon
              className='w-5 h-5 text-gray-500 cursor-pointer sm:hidden'
              onClick={() => setShowAlert(false)}
            />
          </div>
        </div>
      )}
      <fieldset aria-label='Server size'>
        <div className='space-y-4'>
          {users.map((user, index) => (
            <div
              key={user.id}
              aria-label={user.name}
              aria-description={`${user.ram}, ${user.cpus}, ${user.disk}, ${user.price} per month`}
              className={`group relative block 
                ${index !== users.length - 1 ? 'border-b border-gray-300' : ''}
                bg-white  py-4 has-checked:outline-2 
              has-checked:-outline-offset-2 has-checked:outline-indigo-600 
              has-focus-visible:outline-3 has-focus-visible:-outline-offset-1 
              sm:flex sm:justify-between dark:border-white/10 dark:bg-gray-800/50 
              dark:has-checked:outline-indigo-500`}
            >
              <div className='flex items-center space-x-3'>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className='w-10 h-10 rounded-full'
                />
                <div>
                  <p className='font-semibold text-gray-900'>{user.name}</p>
                  <p className='text-sm text-gray-500'>{user.email}</p>
                </div>
              </div>

              <button
                className='bg-white border border-gray-300 text-gray-700 
                text-sm font-medium px-4 py-1.5 rounded-lg 
              hover:bg-gray-50 shadow-sm'
              >
                Disable
              </button>
            </div>
          ))}
        </div>
      </fieldset>
    </>
  );
}
