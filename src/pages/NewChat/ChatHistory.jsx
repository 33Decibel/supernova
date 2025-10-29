import { useState } from 'react';
import {
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
const reviews = [
  {
    id: 1,
    title: "Can't say enough good things",
    rating: 5,
    content: `
      <p>I was really pleased with the overall shopping experience.</p>
    `,
    author: 'Risako M',
    date: 'May 16, 2021',
    datetime: '2021-01-06',
  },
  {
    id: 2,
    title: 'Very comfy and looks the part',
    rating: 5,
    content: `
      <p>After a quick chat with customer support.</p>
    `,
    author: 'Jackie H',
    date: 'April 6, 2021',
    datetime: '2021-01-06',
  },
  {
    id: 3,
    title: 'The last shirts I may ever need',
    rating: 4,
    content: `
      <p>I bought two of those comfy cotton shirts.</p>
    `,
    author: 'Laura G',
    date: 'February 24, 2021',
    datetime: '2021-01-06',
  },
  {
    id: 3,
    title: 'The last shirts I may ever need',
    rating: 4,
    content: `
      <p>I bought two of those comfy cotton shirts.</p>
    `,
    author: 'Laura G',
    date: 'February 24, 2021',
    datetime: '2021-01-06',
  },
  {
    id: 3,
    title: 'The last shirts I may ever need',
    rating: 4,
    content: `
      <p>I bought two of those comfy cotton shirts.</p>
    `,
    author: 'Laura G',
    date: 'February 24, 2021',
    datetime: '2021-01-06',
  },
  {
    id: 3,
    title: 'The last shirts I may ever need',
    rating: 4,
    content: `
      <p>I bought two of those comfy cotton shirts.</p>
    `,
    author: 'Laura G',
    date: 'February 24, 2021',
    datetime: '2021-01-06',
  },
  {
    id: 3,
    title: 'The last shirts I may ever need',
    rating: 4,
    content: `
      <p>I bought two of those comfy cotton shirts.</p>
    `,
    author: 'Laura G',
    date: 'February 24, 2021',
    datetime: '2021-01-06',
  },
  {
    id: 3,
    title: 'The last shirts I may ever need',
    rating: 4,
    content: `
      <p>I bought two of those comfy cotton shirts.</p>
    `,
    author: 'Laura G',
    date: 'February 24, 2021',
    datetime: '2021-01-06',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ChatHistory() {
  return (
    <>
      <div
        className='max-h-[calc(100vh-2rem)] shadow-sm bg-gradient-to-b from-[#faf9fa] to-white
      lg:border-l lg:border-gray-200 rounded-xl w-[300px] 
      flex flex-col'
      >
        {/* Header */}
        <header className='flex items-center justify-between py-4 px-4 border-b border-gray-200 shrink-0'>
          <button
            className='bg-indigo-600 border border-[#cbc9cf]
          justify-center rounded-lg px-3 py-1.5 text-sm text-white
          shadow-sm hover:bg-indigo-500 inline-flex items-center'
          >
            <svg
              className='w-3 h-3 text-white me-1'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 18'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z'
              />
            </svg>
            <span>New Chat</span>
          </button>

          <div className='flex items-center gap-3'>
            {/* Chat Icon with Badge */}
            <div className='relative'>
              <ChatBubbleLeftRightIcon className='w-5 h-5 text-gray-700' />
              <span className='absolute -top-1 -right-2 bg-red-500 text-white text-[8px] font-semibold rounded-full px-1 py-0.5'>
                12
              </span>
            </div>

            {/* Shield Icon */}
            <ShieldCheckIcon className='w-5 h-5 text-blue-600' />
          </div>
        </header>

        {/* Scrollable Content */}
        <div className='flex-1 overflow-y-auto px-4 py-2 mb-2'>
          <h2 className='text-base font-semibold text-gray-900 mb-2'>
            Conversation History
          </h2>

          <div className='divide-y divide-gray-200'>
            {reviews.map((review, index) => (
              <div key={index} className='py-4'>
                <h3 className='text-sm font-medium text-gray-900'>
                  {review.title}
                </h3>
                <div
                  className='mt-2 text-sm text-gray-500'
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
                <span className='text-[12px] text-gray-400 block mt-1'>
                  Just Now
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
