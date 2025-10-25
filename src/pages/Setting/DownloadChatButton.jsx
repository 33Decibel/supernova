'use client';

import { useState } from 'react';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

const publishingOptions = [
  {
    value: 'PDF',
    title: 'PDF',
    description: 'This selection will make the file download in pdf format.',
    current: true,
  },
  {
    value: 'Excel',
    title: 'Excel',
    description: 'This selection will make the file download in excel format.',
    current: false,
  },
];

export default function DownloadChatButton() {
  const [selected, setSelected] = useState(publishingOptions[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative'>
        <div className='inline-flex divide-x divide-gray-200 rounded-md outline-hidden dark:divide-indigo-600 border shadow-sm p-2'>
          <div className='inline-flex items-center gap-x-1.5 rounded-l-md bg-white px-3 py-0 text-black dark:bg-indigo-500'>
            <p className='text-sm font-semibold'>Download Chat History</p>
          </div>
          <ListboxButton className='inline-flex items-center rounded-l-none rounded-r-md bg-white px-2 hover:bg-none focus-visible:outline-2 focus-visible:outline-indigo-400 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-400'>
            <p className='text-sm font-semibold me-1 '>{selected.title}</p>
            <ChevronDownIcon
              aria-hidden='true'
              className='size-5 text-black forced-colors:text-[Highlight]'
            />
          </ListboxButton>
        </div>

        <ListboxOptions
          transition
          className='absolute border left-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 dark:divide-white/10 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10'
        >
          {publishingOptions.map((option) => (
            <ListboxOption
              key={option.title}
              value={option}
              className='group cursor-default p-4 text-sm text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white dark:text-white dark:data-focus:bg-indigo-500'
            >
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <p className='font-normal group-data-selected:font-semibold'>
                    {option.title}
                  </p>
                  <span className='text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white dark:text-indigo-400'>
                    <CheckIcon aria-hidden='true' className='size-5' />
                  </span>
                </div>
                <p className='mt-2 text-gray-500 group-data-focus:text-indigo-200 dark:text-gray-400 dark:group-data-focus:text-indigo-100'>
                  {option.description}
                </p>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
