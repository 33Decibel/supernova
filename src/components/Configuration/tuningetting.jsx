import React, { useState, useEffect, useRef } from 'react';

import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/solid';

const faqs = [
  {
    question: 'Server turn detection',
    sliders: ['Threshold', 'Prefix padding (ms)', 'Silence duration (ms)'],
  },
  {
    question: 'Parameters',
    sliders: ['Max response', 'Temperature', 'Volume Control'],
  },
];

const Tuningetting = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const [sliderValues, setSliderValues] = useState({
    slider1: 50,
    slider2: 50,
    slider3: 50,
    slider4: 50,
    slider5: 50,
    slider6: 50,
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSliderChange = (key, value) => {
    setSliderValues((prev) => ({ ...prev, [key]: Number(value) }));
  };
  return (
    <div className='border border-gray-300 px-2 rounded-lg'>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`pt-2 ${
            index !== faqs.length - 1 ? 'border-b' : ''
          } border-gray-300 pb-2`}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className='flex w-full items-center justify-between text-left'
          >
            <span className='text-[12px] font-normal'>{faq.question}</span>
            <span className='ml-4 flex-shrink-0'>
              {openIndex === index ? (
                <MinusSmallIcon className='h-4 w-4' />
              ) : (
                <PlusSmallIcon className='h-4 w-4' />
              )}
            </span>
          </button>

          {openIndex === index && (
            <dd className='text-gray-300 text-[12px] font-normal leading-relaxed mt-2'>
              {faq.sliders.map((label, sIndex) => {
                const key = `slider${index * 3 + sIndex + 1}`;
                return (
                  <div key={key} className='mb-0'>
                    <label
                      htmlFor={key}
                      className='block mb-0 text-[12px] font-normal text-gray-600'
                    >
                      {sIndex + 1}. {label}
                    </label>
                    <div className='flex items-center gap-3'>
                      <input
                        id={key}
                        type='range'
                        min='0'
                        max='100'
                        value={sliderValues[key]}
                        onChange={(e) =>
                          handleSliderChange(key, e.target.value)
                        }
                        className='w-full h-1'
                      />
                      <span className='text-[12px] w-4 text-right text-gray-600'>
                        {sliderValues[key]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </dd>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tuningetting;
