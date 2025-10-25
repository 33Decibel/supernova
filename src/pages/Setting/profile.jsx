import {
  UserIcon,
  MapPinIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Profile({ setIsOpen, isOpen }) {
  return (
    <>
      <div className='md:max-w-[80%] mr-auto'>
        <div className='mb-5'>
          <div
            htmlFor='name'
            className='block text-sm mb-2 font-medium text-gray-900 dark:text-white'
          >
            Profile
          </div>
          <div className='flex gap-4 items-center'>
            {' '}
            <img
              alt=''
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              className='inline-block size-20 rounded-full outline -outline-offset-1 outline-black/5 dark:outline-white/10'
            />
            <div>
              <button
                className='flex justify-center rounded-md bg-none px-3 py-1.5 text-sm border text-black shadow
             hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
             focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400'
              >
                Upload new image
              </button>
              <p className='text-[12px] mt-1 text-gray-400'>
                At least 800X800 px recommended. JPG or PNG and GIF is Allowed
              </p>
            </div>
          </div>
        </div>

        <form action='#' method='POST' className='space-y-2'>
          {/* Name */}
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-900 dark:text-white'
            >
              Name
            </label>
            <div className='relative mt-2'>
              <UserIcon className='absolute left-3 top-[7px] h-5 w-5 text-gray-400 dark:text-gray-500' />
              <input
                id='name'
                name='name'
                type='text'
                required
                autoComplete='name'
                placeholder='Enter your full name'
                className='block w-full rounded-md border border-gray-300 bg-white pl-10 pr-3 py-1.5 
            text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm dark:bg-white/5 
            dark:text-white dark:border-white/10 dark:placeholder:text-gray-500 focus:ring-none focus:ring-none'
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor='location'
              className='block text-sm font-medium text-gray-900 dark:text-white'
            >
              Location
            </label>
            <div className='relative mt-2'>
              <MapPinIcon className='absolute left-3 top-[7px] h-5 w-5 text-gray-400 dark:text-gray-500' />
              <input
                id='location'
                name='location'
                type='text'
                required
                placeholder='Enter your city or country'
                className='block w-full rounded-md border border-gray-300 bg-white pl-10 pr-3 py-1.5 text-base 
            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm dark:bg-white/5 dark:text-white 
            dark:border-white/10 dark:placeholder:text-gray-500 focus:ring-none focus:ring-none'
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label
              htmlFor='bio'
              className='block text-sm font-medium text-gray-900 dark:text-white'
            >
              Bio
            </label>
            <div className='relative mt-2'>
              <PencilSquareIcon className='absolute left-3 top-[7px] h-5 w-5 text-gray-400 dark:text-gray-500' />
              <textarea
                id='bio'
                name='bio'
                rows={4}
                placeholder='Write a short bio about yourself...'
                className='block w-full rounded-md border border-gray-300 bg-white pl-10 pr-3 py-2 text-base 
            text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm dark:bg-white/5 dark:text-white 
            dark:border-white/10 dark:placeholder:text-gray-500 focus:ring-none focus:ring-none'
              />
            </div>
          </div>

          {/* Remember me + Forgot password */}

          {/* Submit button */}
          <div>
            <button
              type='submit'
              className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow
             hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
             focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400'
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
