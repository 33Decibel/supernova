import React, { useState } from 'react';
import Language from '../../components/language';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Appearance({ setIsOpen, isOpen }) {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English / UK');

  const handleSave = () => {
    alert(`Theme: ${theme}, Language: ${language}`);
  };

  return (
    <>
      <div className='max-w-lg  bg-white shadow-sm space-y-6'>
        {/* Theme Section */}
        <div>
          <h3 className='font-medium text-gray-800 mb-3'>Theme</h3>
          <div className='grid grid-cols-3 gap-4'>
            {['light', 'dark', 'system'].map((mode) => (
              <div
                key={mode}
                onClick={() => setTheme(mode)}
                className={`cursor-pointer rounded-xl border-2 p-3 transition ${
                  theme === mode
                    ? 'border-purple-500'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                {/* Card Preview */}
                <div
                  className={`rounded-lg p-3 h-20 mb-2 ${
                    mode === 'light'
                      ? 'bg-purple-50'
                      : mode === 'dark'
                      ? 'bg-gray-900'
                      : 'bg-gradient-to-r from-gray-900 to-gray-100'
                  }`}
                >
                  <div
                    className={`h-2 w-1/3 mb-2 rounded ${
                      mode === 'light' ? 'bg-gray-400' : 'bg-gray-600'
                    }`}
                  ></div>
                  <div
                    className={`h-2 w-2/3 rounded ${
                      mode === 'light' ? 'bg-purple-400' : 'bg-purple-500'
                    }`}
                  ></div>
                  <div
                    className={`h-3 w-1/4 mt-4 rounded ${
                      mode === 'light' ? 'bg-purple-400' : 'bg-purple-500'
                    }`}
                  ></div>
                </div>

                <p className='text-sm text-center capitalize text-gray-700'>
                  {mode}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Language Section */}
        <div>
          <h3 className='font-medium text-gray-800 mb-2'>Language</h3>
          <Language />
        </div>

        {/* Buttons */}
        <div className='flex space-x-3 pt-2'>
          <button
            onClick={handleSave}
            className='px-4 py-2 text-sm text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg hover:from-purple-600 hover:to-purple-800 transition'
          >
            Save Changes
          </button>
          <button className='px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition'>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
