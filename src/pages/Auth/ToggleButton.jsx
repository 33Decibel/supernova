import React from 'react';

const ToggleButton = ({ activeTab, setActiveTab }) => {
  return (
    <>
      {' '}
      {activeTab === 'forget' ? (
        <div className='flex rounded-xl bg-[#ebeaee] mb-8 '>
          <button
            onClick={() => setActiveTab('signin')}
            className={`px-6 flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              activeTab === 'forget'
                ? 'bg-white shadow text-gray-900 border-[#cbc9cf] border-1 border'
                : 'text-gray-500 hover:text-gray-700'
            } `}
          >
            Remember Passsword?
          </button>
        </div>
      ) : (
        <div className='flex rounded-xl bg-[#ebeaee] mb-8 '>
          <button
            onClick={() => setActiveTab('signin')}
            className={`px-6 flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              activeTab === 'signin'
                ? 'bg-white shadow text-gray-900 border-[#cbc9cf] border-1 border'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab('reqAccess')}
            className={`px-6 flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              activeTab === 'reqAccess'
                ? 'bg-white shadow text-gray-900 border-[#cbc9cf] border-1 border'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Requset Access
          </button>
        </div>
      )}
    </>
  );
};

export default ToggleButton;
