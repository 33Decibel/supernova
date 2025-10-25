import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import DownloadChatButton from './DownloadChatButton';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const ChatExport = ({ setIsOpen, isOpen }) => {
  const [selected, setSelected] = useState(['Welcome', 'Video Generation']);

  const toggleSelect = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const data = [
    { name: 'Welcome', color: 'bg-gray-500' },
    { name: 'Voice Tools', color: 'bg-indigo-500' },
    { name: 'Video Generation', color: 'bg-green-500' },
    { name: 'Photo Generation', color: 'bg-pink-500' },
    { name: 'Education & Science', color: 'bg-orange-500' },
    { name: 'Code Generation', color: 'bg-blue-500' },
  ];

  return (
    <div className=' rounded-2xl '>
      <DownloadChatButton />

      {/* Table */}
      <div className='overflow-x-auto rounded-lg border border-gray-200 mt-5'>
        <table className='min-w-full divide-y divide-gray-200 text-sm'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='w-12 px-4 py-3 text-left'>
                <input type='checkbox' className='rounded border-gray-300' />
              </th>
              <th className='px-4 py-3 text-left font-semibold text-gray-700'>
                Name
              </th>
              <th className='px-4 py-3 text-left font-semibold text-gray-700 hidden sm:table-cell'>
                Date Uploaded
              </th>
              <th className='px-4 py-3 text-right font-semibold text-gray-700 hidden sm:table-cell'>
                Size
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-100'>
            {data.map((item) => {
              const isSelected = selected.includes(item.name);
              return (
                <tr
                  key={item.name}
                  className={`${
                    isSelected ? 'bg-indigo-50' : 'bg-white'
                  } hover:bg-gray-50`}
                >
                  {/* Checkbox */}
                  <td className='px-4 py-3'>
                    <input
                      type='checkbox'
                      checked={isSelected}
                      onChange={() => toggleSelect(item.name)}
                      className='rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                    />
                  </td>

                  {/* Name */}
                  <td className='px-4 py-3 flex items-center gap-2'>
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${item.color}`}
                    ></span>
                    <span
                      className={`${
                        isSelected ? 'text-indigo-600 font-medium' : ''
                      } cursor-pointer hover:text-indigo-500`}
                    >
                      {item.name}
                    </span>
                  </td>

                  {/* Date */}
                  <td className='px-4 py-3 text-gray-700 whitespace-nowrap hidden sm:table-cell'>
                    22-Dec-2029 10:00 AM
                  </td>

                  {/* Size */}
                  <td className='px-4 py-3 text-right text-gray-700 hidden sm:table-cell'>
                    2.3GB
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChatExport;
