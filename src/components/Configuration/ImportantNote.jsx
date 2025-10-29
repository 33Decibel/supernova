import React from 'react';
import {
  AdjustmentsHorizontalIcon,
  ArrowUpOnSquareIcon,
  SpeakerWaveIcon,
  ArrowsUpDownIcon,
  ClockIcon,
  FireIcon,
} from '@heroicons/react/24/solid';

const features1 = [
  {
    icon: AdjustmentsHorizontalIcon,
    title: 'Threshold',
    desc: 'Minimum sound level to detect audio.',
  },
  {
    icon: ArrowUpOnSquareIcon,
    title: 'Prefix Padding (ms)',
    desc: 'Extra silence before audio starts.',
  },
  {
    icon: ClockIcon,
    title: 'Silence Duration (ms)',
    desc: 'Time of silence before stopping.',
  },
  {
    icon: ArrowsUpDownIcon,
    title: 'Max Response',
    desc: 'Maximum length of reply.',
  },
  {
    icon: FireIcon,
    title: 'Temperature',
    desc: 'Controls randomness of responses.',
  },
  {
    icon: SpeakerWaveIcon,
    title: 'Volume Control',
    desc: 'Adjusts loudness of audio.',
  },
];

const ImportantNote = () => {
  return (
    <>
      <div className='lg:pr-8 bg-indigo-600 p-6 border-mob border-r hidden md:block'>
        <div className='lg:max-w-lg'>
          <h2 className='mb-4 text-white font-normal text-sm'>
            Important things you need to know.
          </h2>
          <dl className='max-w-xl space-y-1 text-base/7 leading-5 text-gray-600 lg:max-w-none dark:text-gray-400'>
            {features1.map((feature) => (
              <div key={feature.title} className='relative pl-7'>
                <dt className=' text-[12px] font-semibold text-white dark:text-white'>
                  <feature.icon
                    aria-hidden='true'
                    className='absolute top-[4px] -left-[1px] size-4 text-white dark:text-indigo-400'
                  />
                  {feature.title}
                </dt>{' '}
                <p className='inline text-gray-200 font-normal text-[12px]'>
                  {feature.desc}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
};

export default ImportantNote;
