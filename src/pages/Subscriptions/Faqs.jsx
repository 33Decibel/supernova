import { useState } from 'react';
import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What is Supernova AI?',
    answer:
      'Supernova AI is an advanced artificial intelligence platform that helps businesses automate workflows, analyze data, and make intelligent decisions faster.',
  },
  {
    question: 'How does Supernova AI differ from other AI tools?',
    answer:
      'Unlike many AI tools, Supernova AI combines predictive analytics, natural-language understanding, and automation in a single unified interface—making it easy to use across departments.',
  },
  {
    question: 'Can I integrate Supernova AI with my existing systems?',
    answer:
      'Yes! Supernova AI supports REST APIs and ready-made connectors for CRMs, ERPs, analytics dashboards, and popular cloud services like AWS, Azure, and Google Cloud.',
  },
  {
    question: 'Is Supernova AI secure?',
    answer:
      'Absolutely. Supernova AI uses enterprise-grade encryption, secure authentication, and complies with GDPR and SOC 2 standards to keep your data safe.',
  },
  {
    question: 'Does Supernova AI require coding knowledge?',
    answer:
      'Not at all. The platform provides a no-code interface, allowing users to create and deploy AI models through simple drag-and-drop tools.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='bg-white pt-16'>
      <div className=''>
        <h4 className='text-xl font-bold mb-2 border-b pb-2'>
          Frequently asked questions
        </h4>
        <dl className='space-y-6 divide-y divide-gray-200'>
          {faqs.map((faq, index) => (
            <div key={index} className='pt-6'>
              <dt>
                <button
                  onClick={() => toggleFAQ(index)}
                  className='flex w-full items-center justify-between text-left'
                >
                  <span className='text-sm font-semibold text-gray-900'>
                    {faq.question}
                  </span>
                  <span className='ml-4 flex-shrink-0'>
                    {openIndex === index ? (
                      <MinusSmallIcon className='h-6 w-6 text-indigo-600' />
                    ) : (
                      <PlusSmallIcon className='h-6 w-6 text-indigo-600' />
                    )}
                  </span>
                </button>
              </dt>
              {openIndex === index && (
                <dd className='mt-3 text-gray-600 text-sm leading-relaxed'>
                  {faq.answer}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
