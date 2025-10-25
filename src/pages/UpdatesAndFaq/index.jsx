import React, { useState } from 'react';
import Update from './Update';
import Faqs from './Faqs';

const UpdateAndFaq = () => {
  const [activeTab, setActiveTab] = useState('update');

  return (
    <div className=' bg-white rounded-xl p-4 max-h-[calc(100vh-90px)]  lg:max-h-[calc(100vh-2rem)] flex flex-col'>
      <h4 className='text-xl font-bold mb-2'>Updates & FAQ</h4>
      <p className='text-sm mb-5'>Enhancement, Resolutions & Upgrades</p>

      {/* Tabs Header */}
      <div className='flex border-b border-gray-200 gap-5'>
        <button
          onClick={() => setActiveTab('update')}
          className={`py-2 text-center font-semibold transition-colors ${
            activeTab === 'update'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-blue-600'
          }`}
        >
          Update
        </button>
        <button
          onClick={() => setActiveTab('faq')}
          className={`py-2 text-center font-semibold transition-colors ${
            activeTab === 'faq'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-blue-600'
          }`}
        >
          FAQ
        </button>
      </div>
      {/* Tabs Content */}
      <div className='overflow-y-auto flex-1'>
        {' '}
        {activeTab === 'update' && <Update />}
        {activeTab === 'faq' && <Faqs />}
      </div>
    </div>
  );
};

export default UpdateAndFaq;
