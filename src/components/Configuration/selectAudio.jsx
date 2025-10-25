import React, { useState, useEffect, useRef } from 'react';
import MusicBg from '../../assets/music-pattern.jpg';
import {
  PlusSmallIcon,
  MinusSmallIcon,
  PlayCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import face1 from '../../assets/faces/1.png';
import face2 from '../../assets/faces/2.png';
import face3 from '../../assets/faces/3.png';
import face4 from '../../assets/faces/4.png';
import face5 from '../../assets/faces/5.png';
import face6 from '../../assets/faces/6.png';
import face7 from '../../assets/faces/7.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SelectAudio = () => {
  const swiperRef = useRef(null);
  const audioRef = useRef(null);
  const [selectedId, setSelectedId] = useState(1);

  const cards = [
    {
      id: 1,
      color: 'brown',
      img: face1,
      title: 'Shimmer',
      audio: '/audio/audio1.mp3',
    },
    {
      id: 2,
      color: 'skyblue',
      img: face2,
      title: 'Lily',
      audio: '/audio/audio2.mp3',
    },
    {
      id: 3,
      color: 'violet',
      img: face3,
      title: 'Susan',
      audio: '/audio/audio3.mp3',
    },
    {
      id: 4,
      color: 'gold',
      img: face4,
      title: 'John',
      audio: '/audio/audio4.mp3',
    },
    {
      id: 5,
      color: 'red',
      img: face5,
      title: 'Mark',
      audio: '/audio/audio4.mp3',
    },
    {
      id: 6,
      color: 'brown',
      img: face6,
      title: 'Rocky',
      audio: '/audio/audio4.mp3',
    },
    {
      id: 7,
      color: 'pink',
      img: face7,
      title: 'Jimmy',
      audio: '/audio/audio4.mp3',
    },
  ];

  const playAudio = (src) => {
    if (audioRef.current) {
      audioRef.current.src = src;
      audioRef.current.play();
    }
  };

  const handleSelect = (id) => {
    setSelectedId(id); // sets the clicked card as selected
  };
  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className='mySwiper'
      >
        {cards.map((card) => (
          <SwiperSlide
            key={card.id}
            className='bg-white border border-gray-300 text-center rounded-xl shadow-md bg-cover
                            items-center justify-center hover:shadow-xl transition cursor-pointer'
            onClick={() => playAudio(card.audio)}
            style={{
              backgroundImage: `url(${MusicBg})`,
              backgroundSize: '300px',
              borderColor: selectedId === card.id ? `${card.color}` : '',
            }}
          >
            <div className='bg-white bg-opacity-95 p-3 rounded-xl'>
              <h2 className='mb-2 text-gray-700 font-normal text-sm'>
                {card.title}
              </h2>
              <div className='relative w-fit mx-auto mb-2'>
                <img
                  src={card.img}
                  className={`h-[80px] w-[80px] mx-auto p-1  border-8  rounded-full `}
                  style={{ borderColor: `${card.color}` }}
                  alt='avatar-face'
                />

                <PlayCircleIcon
                  className='w-10 h-10 p-2 bg-gray-50/70 text-blue-400 shadow-lg 
               hover:text-blue-500 rounded-full 
               absolute inset-0 m-auto cursor-pointer'
                />
              </div>

              {/* <button className='bg-white border border-gray-300 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-lg hover:bg-gray-50 shadow-sm'>
                Select
              </button> */}
              <button
                onClick={() => handleSelect(card.id)}
                className={`mt-2 text-xs font-medium rounded-lg px-4 py-1.5 border 
              ${
                selectedId === card.id
                  ? ' text-white'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
                style={{
                  backgroundColor:
                    selectedId === card.id ? `${card.color}` : ``,
                }}
              >
                {selectedId === card.id ? 'Selected' : 'Select'}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex justify-center gap-4 mt-2'>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className='p-1 rounded-full bg-gray-200 hover:bg-gray-300'
        >
          <ChevronLeftIcon className='w-3 h-3 text-gray-600' />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className='p-1 rounded-full bg-gray-200 hover:bg-gray-300'
        >
          <ChevronRightIcon className='w-3 h-3 text-gray-600' />
        </button>
      </div>
    </>
  );
};

export default SelectAudio;
