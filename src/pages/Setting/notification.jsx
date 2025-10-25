// import React from 'react';

// const Notification = () => {
//   return (
//     <>
//       <h4 className='text-xl font-bold mb-6 border-b pb-2 '>Notification</h4>
//     </>
//   );
// };

// export default Notification;
import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

const Notification = () => {
  const [preferences, setPreferences] = useState({
    activityUpdates: true,
    accountActivity: true,
    infoLetters: false,
    promotions: false,
    dailyEmails: false,
  });

  const toggleSwitch = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <div className='flex justify-between border-b mb-6  pb-2 '>
        <h4 className='text-xl font-bold ps-8 lg:ps-0'>Notifications</h4>

        <label
          className='group relative inline-flex w-11 h-6 shrink-0 cursor-pointer rounded-full
         bg-gray-200 p-0.5 inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 
         transition-colors duration-200 ease-in-out has-[:checked]:bg-indigo-600 dark:bg-white/5 
         dark:inset-ring-white/10 dark:outline-indigo-500 dark:has-[:checked]:bg-indigo-500'
        >
          <span
            className='relative size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 
          transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-5'
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 flex size-full items-center 
              justify-center opacity-100 transition-opacity duration-200 ease-in 
              group-has-[:checked]:opacity-0 group-has-[:checked]:duration-100 
              group-has-[:checked]:ease-out'
            >
              <svg
                fill='none'
                viewBox='0 0 12 12'
                className='size-3 text-gray-400 dark:text-gray-600'
              >
                <path
                  d='M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </span>
            <span
              aria-hidden='true'
              className='absolute inset-0 flex size-full items-center justify-center opacity-0 transition-opacity duration-100 ease-out group-has-[:checked]:opacity-100 group-has-[:checked]:duration-200 group-has-[:checked]:ease-in'
            >
              <svg
                fill='currentColor'
                viewBox='0 0 12 12'
                className='size-3 text-indigo-600 dark:text-indigo-500'
              >
                <path d='M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z' />
              </svg>
            </span>
          </span>
          <input
            type='checkbox'
            className='absolute inset-0 opacity-0 appearance-none cursor-pointer'
          />
        </label>
      </div>

      <div className=' bg-gray-50 p-4 rounded-xl shadow-sm mb-6'>
        {/* Email Section */}
        <div>
          <label className='block text-sm font-medium text-gray-900 mb-2'>
            Preferred email
          </label>
          <div className='flex items-center gap-3'>
            <input
              type='email'
              placeholder='Placeholder'
              className='rounded-md border border-gray-300 bg-white px-3 py-2 text-sm 
            text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-none focus:ring-none'
            />
            <button className='flex flex-1 items-center text-sm font-medium text-indigo-600 hover:text-indigo-500'>
              <PlusIcon className='w-5 h-5 mr-1' />
              Add new email
            </button>
          </div>
        </div>

        {/* Preferences */}
      </div>
      <div className='space-y-5'>
        {[
          {
            id: 'activityUpdates',
            title: 'Activity updates',
            desc: 'Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.',
          },
          {
            id: 'accountActivity',
            title: 'Account activity',
            desc: 'Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.',
          },
          {
            id: 'infoLetters',
            title: 'Info letters from our partners',
            desc: 'Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.',
          },
          {
            id: 'promotions',
            title: 'Promotions, recommendations & helpful resources',
            desc: 'Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.',
          },
          {
            id: 'dailyEmails',
            title: 'Daily summary emails',
            desc: 'Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper.',
          },
        ].map((item) => (
          <div key={item.id} className='flex items-start justify-between gap-2'>
            <button
              onClick={() => toggleSwitch(item.id)}
              className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full transition-colors duration-300 ease-in-out ${
                preferences[item.id]
                  ? 'bg-indigo-600'
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
            >
              <span
                className={`absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform duration-300 ${
                  preferences[item.id] ? 'translate-x-5' : 'translate-x-0'
                }`}
              ></span>
            </button>
            <div className='flex-1'>
              <h3 className='font-semibold text-gray-900 text-sm'>
                {item.title}
              </h3>
              <p className='text-sm text-gray-500 mt-1'>{item.desc}</p>
            </div>

            {/* Toggle */}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className='mt-8 flex gap-4'>
        <button className='px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500'>
          Save
        </button>
        <button className='px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500'>
          Cancel
        </button>
      </div>
    </>
  );
};

export default Notification;
