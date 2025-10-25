import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const users = [
  {
    id: 1,
    name: 'Albert Flores',
    email: 'debbie.baker@example.com',
    role: 'Dog Trainer',
    status: 'Last seen 3h ago',
    online: false,
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    id: 2,
    name: 'Guy Hawkins',
    email: 'felicia.reid@example.com',
    role: 'Marketing Coordinator',
    status: 'Online',
    online: true,
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    id: 3,
    name: 'Jane Cooper',
    email: 'michael.mitc@example.com',
    role: 'Medical Assistant',
    status: 'Last seen 3h ago',
    online: false,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 4,
    name: 'Bessie Cooper',
    email: 'alma.lawson@example.com',
    role: 'President of Sales',
    status: 'Last seen 3h ago',
    online: false,
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    id: 5,
    name: 'Devon Lane',
    email: 'nathan.roberts@example.com',
    role: 'Web Designer',
    status: 'Online',
    online: true,
    avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
  },
  {
    id: 6,
    name: 'Marvin McKinney',
    email: 'bill.sanders@example.com',
    role: 'Nursing Assistant',
    status: 'Last seen 3h ago',
    online: false,
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
];

export default function Team({ setIsOpen, isOpen }) {
  return (
    <div className=' bg-white  rounded-xl '>
      {users.map((user, index) => (
        <div key={user.id}>
          <div className='flex gap-2 flex-wrap items-center justify-between py-3'>
            {/* Left: Avatar + Info */}
            <div className='flex items-center space-x-3'>
              <img
                src={user.avatar}
                alt={user.name}
                className='w-10 h-10 rounded-full object-cover'
              />
              <div>
                <p className='font-semibold text-gray-900'>{user.name}</p>
                <p className='text-sm text-gray-500'>{user.email}</p>
              </div>
            </div>

            {/* Right: Role + Status + Menu */}
            <div className='flex sm:items-end flex-col'>
              <p className='font-medium text-gray-700'>{user.role}</p>
              <div className='flex items-center space-x-2'>
                {user.online ? (
                  <span className='flex items-center text-sm text-green-600'>
                    <span className='w-2 h-2 bg-green-500 rounded-full mr-1'></span>
                    Online
                  </span>
                ) : (
                  <span className='text-sm text-gray-500'>{user.status}</span>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          {index < users.length - 1 && <hr className='my-2 border-gray-200' />}
        </div>
      ))}
    </div>
  );
}
