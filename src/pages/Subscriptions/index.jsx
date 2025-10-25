import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import Features from './Features';
import FAQ from './Faqs';

export default function Subscriptions() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricing = {
    tiers: [
      {
        name: 'Freelancer',
        id: 'freelancer',
        price: { monthly: '$29', annually: '$299' },
        description: 'The essentials to provide your best work for clients.',
        features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics'],
        featured: false,
      },
      {
        name: 'Startup',
        id: 'startup',
        price: { monthly: '$59', annually: '$599' },
        description: 'A plan that scales with your rapidly growing business.',
        features: [
          '25 products',
          'Up to 10,000 subscribers',
          'Advanced analytics',
        ],
        featured: true,
      },
      {
        name: 'Enterprise',
        id: 'enterprise',
        price: { monthly: '$99', annually: '$999' },
        description: 'Dedicated support and infrastructure for your company.',
        features: [
          'Unlimited products',
          'Unlimited subscribers',
          'Advanced analytics',
        ],
        featured: false,
      },
    ],
  };

  return (
    <div className='bg-white p-4 rounded-xl max-h-[calc(100vh-90px)]  lg:max-h-[calc(100vh-2rem)] flex flex-col'>
      <h4 className='text-xl font-bold mb-2'>
        Cost-Effective AI Chat Services
      </h4>
      <p className='text-sm mb-5 border-b pb-5'>
        Budget-Friendly Pricing Options
      </p>
      <div className='flex-1 overflow-y-auto'>
        {/* Toggle */}
        <div className='flex justify-center '>
          <div className='grid grid-cols-2 gap-x-1 rounded-full p-1 bg-gray-100 text-sm font-semibold'>
            <button
              type='button'
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-full px-4 py-2 ${
                billingCycle === 'monthly'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-500'
              }`}
            >
              Monthly
            </button>
            <button
              type='button'
              onClick={() => setBillingCycle('annually')}
              className={`rounded-full px-4 py-2 ${
                billingCycle === 'annually'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-500'
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className='mt-12 grid max-w-4xl mx-auto grid-cols-1 gap-8 md:grid-cols-3'>
          {pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                tier.featured ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              <h3 className='text-lg font-semibold text-gray-900'>
                {tier.name}
              </h3>
              <p className='mt-4 text-sm text-gray-600'>{tier.description}</p>

              <p className='mt-6 text-4xl font-semibold text-gray-900'>
                {tier.price[billingCycle]}
                <span className='text-sm font-normal text-gray-500'>
                  {billingCycle === 'monthly' ? '/month' : '/year'}
                </span>
              </p>

              <ul className='mt-6 space-y-2 text-sm text-gray-600'>
                {tier.features.map((feature) => (
                  <li key={feature} className='flex gap-x-2'>
                    <CheckIcon className='h-5 w-5 text-indigo-600' />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Features />
        <FAQ />
      </div>
    </div>
  );
}
