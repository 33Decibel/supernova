import { CheckCircleIcon } from '@heroicons/react/20/solid';

const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
];

export default function Update() {
  return (
    <>
      <div className=' border-b pb-6'>
        <div>
          <div
            className='flex  flex-col  bg-white/75 pt-8 
          sm:rounded-3xl lg:mx-0  
          lg:flex-row lg:items-center gap-20'
          >
            <img
              alt=''
              src='https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
              className='h-[200px] w-full flex-none rounded-2xl object-cover lg:aspect-square  lg:max-w-sm'
            />
            <div className='w-full flex-auto'>
              <h2 className='text-sm font-semibold tracking-tight text-pretty text-gray-950 '>
                Join our team
              </h2>
              <h2 className='text-sm font-normal tracking-tight text-pretty text-gray-950 mt-1'>
                10 October, 2025
              </h2>
              <p className='mt-6 text-[12px] text-pretty text-gray-600'>
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>

              <div className='mt-10 flex'>
                <a
                  href='#'
                  className='text-sm/6 font-semibold text-indigo-600 hover:text-indigo-300'
                >
                  Learn More
                  <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className='aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#9fd6fc] to-[#8680fd] opacity-50'
            />
          </div>
        </div>
      </div>

      <div>
        <div
          className='flex  flex-col  bg-white/75 pt-8 
          sm:rounded-3xl lg:mx-0 
          lg:flex-row lg:items-center gap-20'
        >
          <div className='w-full flex-auto'>
            <h2 className='text-sm font-semibold tracking-tight text-pretty text-gray-950 '>
              Join our team
            </h2>
            <h2 className='text-sm font-normal tracking-tight text-pretty text-gray-950 mt-1'>
              10 October, 2025
            </h2>
            <p className='mt-6 text-[12px] text-pretty text-gray-600'>
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>

            <div className='mt-10 flex'>
              <a
                href='#'
                className='text-sm/6 font-semibold text-indigo-600 hover:text-indigo-300'
              >
                Learn More
                <span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
          </div>
          <img
            alt=''
            src='https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
            className='h-[200px] w-full flex-none rounded-2xl object-cover lg:aspect-square  lg:max-w-sm'
          />
        </div>
      </div>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center 
        overflow-hidden blur-3xl'
      >
        <div
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          className='aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#9fd6fc] to-[#8680fd] opacity-50'
        />
      </div>
    </>
  );
}
