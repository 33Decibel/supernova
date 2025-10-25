import React, { useState } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/us.svg' },
  { code: 'hi', name: 'Hindi', flag: 'https://flagcdn.com/in.svg' },
  { code: 'fr', name: 'French', flag: 'https://flagcdn.com/fr.svg' },
  { code: 'es', name: 'Spanish', flag: 'https://flagcdn.com/es.svg' },
  { code: 'de', name: 'German', flag: 'https://flagcdn.com/de.svg' },
  { code: 'zh', name: 'Chinese', flag: 'https://flagcdn.com/cn.svg' },
  { code: 'ja', name: 'Japanese', flag: 'https://flagcdn.com/jp.svg' },
  { code: 'ar', name: 'Arabic', flag: 'https://flagcdn.com/sa.svg' },
  { code: 'ru', name: 'Russian', flag: 'https://flagcdn.com/ru.svg' },
  { code: 'pt', name: 'Portuguese', flag: 'https://flagcdn.com/br.svg' },
];

export default function Language() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
  };

  return (
    <div className='relative '>
      <button
        onClick={() => setOpen(!open)}
        className='w-full bg-white border border-gray-300 rounded-md px-3 py-2 flex items-center justify-between shadow-sm focus:outline-none'
      >
        <div className='flex items-center gap-2'>
          <img
            src={selected.flag}
            alt={selected.name}
            className='w-5 h-5 rounded-full'
          />
          <span>{selected.name}</span>
        </div>
        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {open && (
        <ul className='absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto'>
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className='cursor-pointer px-3 py-2 flex items-center gap-2 hover:bg-gray-100'
            >
              <img
                src={lang.flag}
                alt={lang.name}
                className='w-5 h-5 rounded-full'
              />
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
