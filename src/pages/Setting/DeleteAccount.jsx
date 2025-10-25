import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { CheckIcon, KeyIcon } from '@heroicons/react/24/outline';
import {
  ExclamationCircleIcon,
  XMarkIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

export default function DeleteAccount({ open, setOpen }) {
  // const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');

  const handleDelete = () => {
    alert('Account deletion confirmed!');
  };

  return (
    <>
      <Dialog open={open} onClose={setOpen} className='relative z-10'>
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-gray-500/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 
          data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-gray-900/50'
        />

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex items-end justify-center  text-center sm:items-center sm:p-0'>
            <DialogPanel
              transition
              className='relative transform overflow-hidden rounded-lg   
              text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 
              data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in 
              sm:my-8 sm:w-full sm:max-w-2xl  data-closed:sm:translate-y-0 data-closed:sm:scale-95 
              dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10'
            >
              <div className=' flex items-center justify-center  bg-[#fffffff5]'>
                {/* Modal */}
                <div className=' relative'>
                  {/* Header */}
                  <div className='flex items-start space-x-3 p-6'>
                    <div className='text-red-500 bg-red-100 p-2 rounded-full'>
                      <ExclamationCircleIcon className='w-5 h-5' />
                    </div>
                    <div>
                      <h2 className='text-sm font-semibold text-gray-800'>
                        We’re sorry to see you go
                      </h2>
                      <p className='text-[12px] text-gray-600 mt-1 leading-relaxed'>
                        Warning: Deleting your account will permanently remove
                        all of your data and cannot be undone. This includes
                        your profile, chats, comments, and any other information
                        associated with your account. Are you sure you want to
                        proceed with deleting your account?
                      </p>
                      <div className='mt-5'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>
                          Your password <span className='text-red-500'>*</span>
                        </label>
                        <div className='relative'>
                          <KeyIcon className='absolute left-3 top-2.5 w-4 h-4 text-gray-400' />
                          <input
                            type='password'
                            placeholder='Placeholder'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm focus:ring-2 focus:ring-red-400 focus:border-red-400'
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Password Field */}

                  {/* Buttons */}
                  <div className='flex justify-end space-x-3 px-6 py-4 bg-gray-100 border-t'>
                    <button
                      className='px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition'
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDelete}
                      className='px-4 py-2 text-sm text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg hover:from-red-600 hover:to-red-700 transition'
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
