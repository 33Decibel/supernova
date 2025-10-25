import LeftSidebar from './leftSidebar';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, useLocation } from 'react-router-dom';

export default function Layout({ children, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  let title = '';

  switch (path) {
    case '/':
      title = 'Conversations';
      break;
    case '/new-chat':
      title = 'New Chat';
      break;
    case '/updates-faq':
      title = 'Updates & FAQ';
      break;
    case '/subscriptions':
      title = 'Subscriptions';
      break;
    case '/settings':
      title = 'Settings';
      break;
    default:
      title = 'Page Not Found';
  }

  return (
    <>
      <div className='m-4'>
        <div className='xl:hidden'>
          <div className='flex mb-4 justify-between items-center bg-white rounded-xl p-2 w-full '>
            <div className='    flex align-center items-center '>
              {' '}
              <button
                onClick={() => setSidebarOpen(true)}
                className=' rounded-md text-gray-700 hover:text-gray-400 focus:outline-none'
              >
                {sidebarOpen ? (
                  <XMarkIcon className='h-6 w-6' />
                ) : (
                  <Bars3Icon className='h-6 w-6' />
                )}
              </button>
              <p className='text-md font-semibold ms-2'>{title}</p>
            </div>
            {/* <img
              alt=''
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              className='inline-block size-7 rounded-full outline -outline-offset-1 outline-black/5 dark:outline-white/10'
            /> */}
          </div>
        </div>
        <div className='flex gap-4'>
          <LeftSidebar
            onLogout={onLogout}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <main className='flex-grow'>{children}</main>
        </div>
      </div>
    </>
  );
}
