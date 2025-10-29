import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';
import {
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  ChatBubbleLeftRightIcon, // Chat icon 💬
  QuestionMarkCircleIcon, // FAQ icon ❓
  CreditCardIcon, // Subscription icon 💳
  Cog6ToothIcon, // Settings icon ⚙️
} from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from './profile';

const navigation = [
  {
    name: 'Conversations',
    href: '/',
    icon: ChatBubbleLeftRightIcon,
    current: false,
  },
  {
    name: 'New Chat',
    href: '/new-chat',
    icon: ChatBubbleLeftRightIcon,
    current: false,
  },
  {
    name: 'Updates & FAQ',
    href: '/updates-faq',
    icon: QuestionMarkCircleIcon,
    current: true,
  },
  {
    name: 'Subscriptions',
    href: '/subscriptions',
    icon: CreditCardIcon,
    current: false,
  },
  { name: 'Setting', href: '/settings', icon: Cog6ToothIcon, current: false },
];
const teams = [
  {
    id: 1,
    name: 'Welcome',
    href: '#',
    color: 'text-green-500',
    current: false,
  },
  {
    id: 2,
    name: 'Voice Tools',
    href: '#',
    color: 'text-red-500',
    current: false,
  },
  {
    id: 3,
    name: 'Video Generations',
    href: '#',
    color: 'text-blue-500',
    current: false,
  },
  {
    id: 4,
    name: 'Photo Generations',
    href: '#',
    color: 'text-orange-500',
    current: false,
  },
  {
    id: 5,
    name: 'Eductaion & Science',
    href: '#',
    color: 'text-yellow-500',
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function LeftSidebar({ onLogout, sidebarOpen, setSidebarOpen }) {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  return (
    <>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className='relative z-50 xl:hidden'
      >
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0'
        />

        <div className='fixed inset-0 flex'>
          <DialogPanel
            transition
            className='relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full'
          >
            <TransitionChild>
              <div className='absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0'>
                <button
                  type='button'
                  onClick={() => setSidebarOpen(false)}
                  className='-m-2.5 p-2.5'
                >
                  <span className='sr-only'>Close sidebar</span>
                  <XMarkIcon aria-hidden='true' className='size-6 text-white' />
                </button>
              </div>
            </TransitionChild>

            <div className='relative flex grow flex-col gap-y-5 overflow-y-auto bg-gray-50 px-6'>
              <div className='relative flex h-16 shrink-0 items-center'>
                <h2 className='text-2xl font-normal tracking-tight text-gray-900 space-font'>
                  Super<span className='text-2xl font-normal'>Nova</span>
                </h2>
              </div>
              <nav className='relative flex flex-1 flex-col'>
                <ul role='list' className='flex flex-1 flex-col gap-y-2'>
                  <li>
                    <ul role='list' className='-mx-2 space-y-1'>
                      {navigation.map((item) => {
                        const isActive = location.pathname === item.href;

                        return (
                          <li key={item.name}>
                            <NavLink
                              to={item.href}
                              className={({ isActive }) =>
                                classNames(
                                  isActive
                                    ? 'bg-gray-100 text-indigo-600'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600',
                                  'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                                )
                              }
                            >
                              <item.icon
                                aria-hidden='true'
                                className={classNames(
                                  isActive
                                    ? 'text-indigo-600'
                                    : 'text-gray-400 group-hover:text-indigo-600',
                                  'size-4 shrink-0'
                                )}
                              />
                              {isOpen && (
                                <h3 className='text-xs font-semibold'>
                                  {item.name}
                                </h3>
                              )}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                  <li>
                    <div className='text-xs/6 font-semibold text-gray-500'>
                      Favorites
                    </div>
                    <ul role='list' className='-mx-2 mt-1 space-y-0'>
                      {teams.map((team) => (
                        <li key={team.name}>
                          <a
                            href={team.href}
                            className={classNames(
                              team.current
                                ? 'bg-gray-100 text-indigo-600'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600',
                              'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                            )}
                          >
                            <FontAwesomeIcon
                              icon={['fas', 'circle']}
                              className={`${team.color} me-0 text-xs`}
                            />

                            <span className='text-xs font-semibold truncate'>
                              {team.name}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className='-mx-6 mt-auto'>
                    <Profile isOpen={isOpen} onLogout={onLogout} />
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <div
        className={`hidden h-[95dvh]  xl:flex  xl:flex-col shadow-sm transition-all duration-300 ${
          isOpen ? 'min-w-[265px]' : 'w-[64px]'
        }`}
      >
        <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-gradient-to-b from-[#faf9fa] to-white  px-6 ring-1 ring-gray-200 rounded-xl'>
          <div className='flex h-16 shrink-0 items-center justify-between'>
            {isOpen && (
              <h2 className='text-xl space-font font-normal tracking-tight text-gray-900'>
                SuperNova
              </h2>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-gray-500 hover:text-gray-800 ${
                isOpen ? 'ml-[-3px]' : ' ml-[-3px]'
              }`}
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                data-rtl-flip=''
                className='icon max-md:hidden'
              >
                <path d='M6.83496 3.99992C6.38353 4.00411 6.01421 4.0122 5.69824 4.03801C5.31232 4.06954 5.03904 4.12266 4.82227 4.20012L4.62207 4.28606C4.18264 4.50996 3.81498 4.85035 3.55859 5.26848L3.45605 5.45207C3.33013 5.69922 3.25006 6.01354 3.20801 6.52824C3.16533 7.05065 3.16504 7.71885 3.16504 8.66301V11.3271C3.16504 12.2712 3.16533 12.9394 3.20801 13.4618C3.25006 13.9766 3.33013 14.2909 3.45605 14.538L3.55859 14.7216C3.81498 15.1397 4.18266 15.4801 4.62207 15.704L4.82227 15.79C5.03904 15.8674 5.31234 15.9205 5.69824 15.9521C6.01398 15.9779 6.383 15.986 6.83398 15.9902L6.83496 3.99992ZM18.165 11.3271C18.165 12.2493 18.1653 12.9811 18.1172 13.5702C18.0745 14.0924 17.9916 14.5472 17.8125 14.9648L17.7295 15.1415C17.394 15.8 16.8834 16.3511 16.2568 16.7353L15.9814 16.8896C15.5157 17.1268 15.0069 17.2285 14.4102 17.2773C13.821 17.3254 13.0893 17.3251 12.167 17.3251H7.83301C6.91071 17.3251 6.17898 17.3254 5.58984 17.2773C5.06757 17.2346 4.61294 17.1508 4.19531 16.9716L4.01855 16.8896C3.36014 16.5541 2.80898 16.0434 2.4248 15.4169L2.27051 15.1415C2.03328 14.6758 1.93158 14.167 1.88281 13.5702C1.83468 12.9811 1.83496 12.2493 1.83496 11.3271V8.66301C1.83496 7.74072 1.83468 7.00898 1.88281 6.41985C1.93157 5.82309 2.03329 5.31432 2.27051 4.84856L2.4248 4.57317C2.80898 3.94666 3.36012 3.436 4.01855 3.10051L4.19531 3.0175C4.61285 2.83843 5.06771 2.75548 5.58984 2.71281C6.17898 2.66468 6.91071 2.66496 7.83301 2.66496H12.167C13.0893 2.66496 13.821 2.66468 14.4102 2.71281C15.0069 2.76157 15.5157 2.86329 15.9814 3.10051L16.2568 3.25481C16.8833 3.63898 17.394 4.19012 17.7295 4.84856L17.8125 5.02531C17.9916 5.44285 18.0745 5.89771 18.1172 6.41985C18.1653 7.00898 18.165 7.74072 18.165 8.66301V11.3271ZM8.16406 15.995H12.167C13.1112 15.995 13.7794 15.9947 14.3018 15.9521C14.8164 15.91 15.1308 15.8299 15.3779 15.704L15.5615 15.6015C15.9797 15.3451 16.32 14.9774 16.5439 14.538L16.6299 14.3378C16.7074 14.121 16.7605 13.8478 16.792 13.4618C16.8347 12.9394 16.835 12.2712 16.835 11.3271V8.66301C16.835 7.71885 16.8347 7.05065 16.792 6.52824C16.7605 6.14232 16.7073 5.86904 16.6299 5.65227L16.5439 5.45207C16.32 5.01264 15.9796 4.64498 15.5615 4.3886L15.3779 4.28606C15.1308 4.16013 14.8165 4.08006 14.3018 4.03801C13.7794 3.99533 13.1112 3.99504 12.167 3.99504H8.16406C8.16407 3.99667 8.16504 3.99829 8.16504 3.99992L8.16406 15.995Z'></path>
              </svg>
            </button>
          </div>
          <nav className='flex flex-1 flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-2'>
              <li>
                <ul role='list' className='-mx-2 space-y-0'>
                  <li>
                    <div className='relative mb-3 '>
                      <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none'>
                        <svg
                          className='w-4 h-4 text-gray-500 dark:text-gray-400'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 20 20'
                        >
                          <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                          />
                        </svg>
                      </div>
                      <input
                        type='search'
                        id='default-search'
                        className={`border-b border-[#c8c2d3] block w-full p-2 ${
                          isOpen ? 'ps-10' : ''
                        } 
                      text-sm text-gray-900 bg-gray-100 rounded-lg outline-none 
                      focus:outline-none  focus:ring-0`}
                        placeholder={isOpen ? 'Search Mockups, Logos...' : ''}
                        required
                      />
                    </div>
                  </li>
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;

                    return (
                      <li key={item.name}>
                        <NavLink
                          to={item.href}
                          className={({ isActive }) =>
                            classNames(
                              isActive
                                ? 'bg-gray-100 text-indigo-600'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600',
                              'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                            )
                          }
                        >
                          <item.icon
                            aria-hidden='true'
                            className={classNames(
                              isActive
                                ? 'text-indigo-600'
                                : 'text-gray-400 group-hover:text-indigo-600',
                              'size-4 shrink-0'
                            )}
                          />
                          {isOpen && (
                            <h3 className='text-xs font-semibold'>
                              {item.name}
                            </h3>
                          )}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <div className='border-b border-gray-200 '></div>
              <li>
                {isOpen && (
                  <div className='text-xs/6 font-semibold text-gray-500'>
                    Favorites
                  </div>
                )}
                <ul role='list' className='-mx-2 mt-1 space-y-0'>
                  {teams.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={classNames(
                          team.current
                            ? 'bg-gray-100 text-indigo-600'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600',
                          'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                        )}
                      >
                        <FontAwesomeIcon
                          icon={['fas', 'circle']}
                          className={`${team.color} me-0 text-xs`}
                        />

                        {isOpen && (
                          <span className='text-xs font-semibold truncate'>
                            {team.name}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li className='-mx-6 mt-auto ' style={{ marginLeft: '-32px' }}>
                <Profile isOpen={isOpen} onLogout={onLogout} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
