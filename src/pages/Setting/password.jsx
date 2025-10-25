import {
  KeyIcon,
  MapPinIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Password({ setIsOpen, isOpen }) {
  return (
    <>
      <div className='md:max-w-[80%] mr-auto'>
        <form action='#' method='POST' className='space-y-5'>
          {/* Name */}
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-900 dark:text-white'
            >
              Current Password
            </label>
            <div className='relative mt-2'>
              <KeyIcon className='absolute left-3 top-[7px] h-5 w-5 text-gray-400 dark:text-gray-500' />
              <input
                id='current-password'
                type='password'
                name='name'
                required
                autoComplete='name'
                placeholder='Enter your current password'
                className='block w-full rounded-md border border-gray-300 bg-white pl-10 pr-3 py-1.5 
            text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm dark:bg-white/5 
            dark:text-white dark:border-white/10 dark:placeholder:text-gray-500 focus:ring-none focus:ring-none'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-900 dark:text-white'
            >
              New Password
            </label>
            <div className='relative mt-2'>
              <KeyIcon className='absolute left-3 top-[7px] h-5 w-5 text-gray-400 dark:text-gray-500' />
              <input
                id='new-password'
                name='new-password'
                type='password'
                required
                autoComplete='name'
                placeholder='Enter your new password'
                className='block w-full rounded-md border border-gray-300 bg-white pl-10 pr-3 py-1.5 
            text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm dark:bg-white/5 
            dark:text-white dark:border-white/10 dark:placeholder:text-gray-500 focus:ring-none focus:ring-none'
              />
              <label
                htmlFor='name'
                className='block text-[12px] font-normal text-gray-400 dark:text-white'
              >
                Minimum 8 characters
              </label>
            </div>
          </div>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-900 dark:text-white'
            >
              Confirm Password
            </label>
            <div className='relative mt-2'>
              <KeyIcon className='absolute left-3 top-[7px] h-5 w-5 text-gray-400 dark:text-gray-500' />
              <input
                id='confirm-passsword'
                name='confirm-passsword'
                type='password'
                required
                autoComplete='name'
                placeholder='Enter your confirm password'
                className='block w-full rounded-md border border-gray-300 bg-white pl-10 pr-3 py-1.5 
            text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm dark:bg-white/5 
            dark:text-white dark:border-white/10 dark:placeholder:text-gray-500 focus:ring-none focus:ring-none'
              />
              <label
                htmlFor='name'
                className='block text-[12px] font-normal text-gray-400 dark:text-white'
              >
                Minimum 8 characters
              </label>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow
             hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
             focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400'
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
