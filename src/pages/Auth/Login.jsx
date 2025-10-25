import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = ({
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
  setActiveTab,
}) => {
  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className='bg-[white] rounded-2xl border-[#cbc9cf] border-1 border'>
        <div className='flex place-items-center py-3 px-5'>
          <FontAwesomeIcon
            icon={['fas', 'envelope']}
            className='text-indigo-500 me-3 text-lg'
          />

          <div className='grow'>
            <label
              htmlFor='email'
              className='block text-sm/6 font-medium text-gray-900'
            >
              Email address
            </label>
            <input
              name='email'
              type='text'
              autoComplete='email'
              placeholder='Enter valid email address'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='py-0 border-0 block w-full rounded-md bg-white px-3  text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:bg-none focus:outline-none text-xs'
              style={{ paddingLeft: '0px' }}
            />
          </div>
        </div>
        <div className='flex place-items-center border-t border-gray-300 py-3 px-5'>
          <FontAwesomeIcon
            icon={['fas', 'key']}
            className='me-3 text-indigo-500 text-lg'
          />
          <div className='grow'>
            <label
              htmlFor='password'
              className='block text-sm/6 font-medium text-gray-900'
            >
              Password
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='At least 8 character length'
              autoComplete='current-password'
              className='py-0 border-0 block w-full rounded-md bg-white px-3  text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:bg-none focus:outline-none text-xs'
              style={{ paddingLeft: '0px' }}
            />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <FontAwesomeIcon
          icon={['fas', 'circle-info']}
          className='text-indigo-500 me-1 textmd'
        />
        <div className=' flex-1 text-sm/6'>
          <a
            href='#'
            onClick={() => setActiveTab('forget')}
            className='font-semibold text-indigo-600 hover:text-indigo-500'
          >
            Forgot password?
          </a>
        </div>
        <div className='flex-1 gap-3'>
          {' '}
          <button
            type='submit'
            className='flex w-full justify-center rounded-lg bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
