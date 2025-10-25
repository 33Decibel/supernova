import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import DownloadChatButton from './DownloadChatButton';

const ChatExport = () => {
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
    <div className=' rounded-2xl shadow-sm '>
      <h4 className='text-xl font-bold mb-6 border-b pb-2 ps-8 lg:ps-0'>
        Chat Export
      </h4>
      {/* Header Controls */}
      {/* <div className='flex items-center gap-4 mb-4'>
        <button className='bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-200 flex items-center'>
          Download Chat History
        </button>

        <div className='relative'>
          <button className='flex items-center gap-1 border border-gray-300 px-3 py-2 text-sm rounded-md hover:bg-gray-50'>
            PDF
            <ChevronDownIcon className='w-4 h-4 text-gray-600' />
          </button>
        </div>
      </div> */}
      <DownloadChatButton />

      {/* Table */}
      <div className='overflow-hidden rounded-lg border border-gray-200 mt-5'>
        <table className='min-w-full divide-y divide-gray-200 text-sm'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='w-12 px-4 py-3 text-left'>
                <input type='checkbox' className='rounded border-gray-300' />
              </th>
              <th className='px-4 py-3 text-left font-semibold text-gray-700'>
                Name
              </th>
              <th className='px-4 py-3 text-left font-semibold text-gray-700'>
                Date Uploaded
              </th>
              <th className='px-4 py-3 text-right font-semibold text-gray-700'>
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

                  {/* Name + dot */}
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
                  <td className='px-4 py-3 text-gray-700 whitespace-nowrap'>
                    22-Dec-2029 10:00 AM
                  </td>

                  {/* Size */}
                  <td className='px-4 py-3 text-right text-gray-700'>2.3GB</td>
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
