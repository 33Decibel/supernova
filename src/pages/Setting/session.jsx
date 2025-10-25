import React, { useState } from 'react';
import {
  InformationCircleIcon,
  XMarkIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  // TabletIcon,
} from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Session = ({ setIsOpen, isOpen }) => {
  const [showAlert, setShowAlert] = useState(true);

  const devices = [
    {
      name: 'Mac',
      location: 'New York, USA',
      lastLogin: 'Los Angeles, CA · April 20 at 4:16PM',
      active: true,
      icon: <ComputerDesktopIcon className='w-6 h-6 text-green-600' />,
    },
    {
      name: 'iPhone',
      location: 'New York, USA',
      lastLogin: 'Los Angeles, CA · April 20 at 4:16PM',
      active: false,
      icon: <DevicePhoneMobileIcon className='w-6 h-6 text-gray-500' />,
    },
    {
      name: 'iPad',
      location: 'New York, USA',
      lastLogin: 'Los Angeles, CA · April 20 at 4:16PM',
      active: false,
      icon: <DevicePhoneMobileIcon className='w-6 h-6 text-gray-500' />,
    },
  ];

  return (
    <>
      <div className=' rounded-2xl  border-gray-100 space-y-6'>
        {/* 🔒 Alert Box */}
        {showAlert && (
          <div className='relative bg-purple-50 border border-purple-200 rounded-xl p-5 '>
            <div className='flex items-start  gap-3'>
              <InformationCircleIcon className='w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5' />
              <div>
                <h2 className='text-purple-700 font-semibold'>
                  Protect your account
                </h2>
                <p className='text-gray-600 text-sm mt-1'>
                  2FA significantly boosts the security of your account. Even if
                  someone guesses your password, they won’t be able to access
                  your account without the second authentication factor.
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
                Enable 2FA
              </button>
              {/* <XMarkIcon
                className='w-5 h-5 text-gray-500 cursor-pointer sm:hidden'
                onClick={() => setShowAlert(false)}
              /> */}
            </div>
          </div>
        )}

        {/* 💻 Device List */}
        <div className='space-y-3'>
          {devices.map((device, index) => (
            <div
              key={index}
              className={`flex flex-wrap gap-2 items-center justify-between    py-4 ${
                index !== devices.length - 1 ? 'border-b' : ''
              } border-gray-200 transition`}
            >
              <div className='flex items-center gap-4'>
                <div className='flex items-center justify-center w-10 h-10 bg-white rounded-xl border'>
                  {device.icon}
                </div>
                <div>
                  <h3 className='font-medium text-gray-800 text-[12px]'>
                    {device.name}{' '}
                    <span className='text-gray-500 '>– {device.location}</span>
                  </h3>
                  <p className='text-[12px] text-gray-500 '>
                    {device.lastLogin}
                  </p>
                </div>
                {device.active && (
                  <span
                    className='ml-2 px-2 py-0.5 text-xs rounded-full bg-green-100 min-w-[85px]
                  text-green-700 font-medium'
                  >
                    Active now
                  </span>
                )}
              </div>
              <button className='bg-white border  border-gray-300 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-gray-50 shadow-sm'>
                Log out
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Session;
