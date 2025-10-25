import React, { useState } from 'react';
import {
  UserCircleIcon,
  KeyIcon,
  BellIcon,
  ArrowUpTrayIcon,
  ComputerDesktopIcon,
  UsersIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import DeleteAccount from './DeleteAccount';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Profile from './profile';
import Appearance from './appearance';
import Application from './application';
import ChatExport from './chatExport';
import Notification from './notification';
import Password from './password';
import Session from './session';
import Team from './team';

const navigation = [
  { name: 'Profile', icon: UserCircleIcon },
  { name: 'Password', icon: KeyIcon },
  { name: 'Notifications', icon: BellIcon },
  { name: 'Chat export', icon: ArrowUpTrayIcon },
  { name: 'Sessions', icon: ComputerDesktopIcon },
  { name: 'Application', icon: SparklesIcon },
  { name: 'Team', icon: UsersIcon },
  { name: 'Appearance', icon: ChatBubbleLeftRightIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Settings = () => {
  const [show, setShow] = useState('Profile');
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const renderComponent = () => {
    switch (show) {
      case 'Profile':
        return <Profile isOpen={isOpen} setIsOpen={setIsOpen} />;
      case 'Password':
        return <Password isOpen={isOpen} setIsOpen={setIsOpen} />;
      case 'Notifications':
        return <Notification isOpen={isOpen} setIsOpen={setIsOpen} />;
      case 'Chat export':
        return <ChatExport isOpen={isOpen} setIsOpen={setIsOpen} />;
      case 'Sessions':
        return <Session isOpen={isOpen} setIsOpen={setIsOpen} />;
      case 'Application':
        return <Application isOpen={isOpen} setIsOpen={setIsOpen} />;
      case 'Team':
        return <Team isOpen={isOpen} setIsOpen={setIsOpen} />;
      case 'Appearance':
        return <Appearance isOpen={isOpen} setIsOpen={setIsOpen} />;
      default:
        return <Profile isOpen={isOpen} setIsOpen={setIsOpen} />;
    }
  };

  function LinkNavigation() {
    return (
      <ul role='list' className='-mx-2 space-y-2'>
        {navigation.map((item) => {
          const isActive = show === item.name;
          return (
            <li key={item.name}>
              <button
                type='button'
                onClick={() => setShow(item.name)}
                className={classNames(
                  isActive
                    ? 'bg-gray-100 text-indigo-600 dark:bg-indigo-500/20'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-700',
                  'group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold w-full text-left'
                )}
              >
                <item.icon
                  className={classNames(
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-400 group-hover:text-indigo-600',
                    'size-5 shrink-0'
                  )}
                />
                <span>{item.name}</span>
              </button>
            </li>
          );
        })}

        {/* Delete Account */}
        <li className='border-t border-gray-200 dark:border-gray-700 pt-2 mt-2'>
          <button
            onClick={() => setOpen(true)}
            type='button'
            className='group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold text-red-700 hover:bg-gray-100 hover:text-red-600 dark:text-red-400 dark:hover:bg-gray-700 w-full text-left'
          >
            <TrashIcon className='text-red-400 group-hover:text-red-600 dark:text-red-500 size-5 shrink-0' />
            <span>Delete Account</span>
          </button>
        </li>
      </ul>
    );
  }

  return (
    <>
      <div className='bg-white dark:bg-gray-900 rounded-xl flex shadow-sm flex-row flex-1 h-[calc(100vh-90px)]  lg:h-[calc(100vh-2rem)]'>
        {/* Sidebar */}
        <div className='bg-gray-50 dark:bg-gray-800 p-6 hidden lg:block rounded-l-xl min-w-[260px] overflow-y-auto'>
          <nav className='flex flex-col'>
            <LinkNavigation />
          </nav>
        </div>
        <DeleteAccount open={open} setOpen={setOpen} />

        {/* Main content */}
        <div className='p-4 flex-1 overflow-y-auto'>
          <div className=' mt-[2px] border-b mb-4 lg:pb-3'>
            <div className='relative inline-block text-left '>
              {/* Dropdown Button */}
              <div className='flex'>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className='lg:hidden text-gray-400 me-2 rounded 
                  hover:text-gray-500'
                >
                  {isOpen ? (
                    <XMarkIcon className='w-6 h-6' />
                  ) : (
                    <Bars3Icon className='w-6 h-6' />
                  )}
                </button>
                <h4 className='text-md font-normal '>{show}</h4>
              </div>
              {/* Dropdown Menu */}
              {isOpen && (
                <div className='absolute mt-2 w-[200px] bg-white border rounded shadow-lg z-10 p-6'>
                  <LinkNavigation />
                </div>
              )}
            </div>
          </div>

          {renderComponent()}
        </div>
      </div>
    </>
  );
};

export default Settings;
