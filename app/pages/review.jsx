// components/Reviews.js
'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Img from '../../public/logo2.png';
import Img1 from '../../public/image1.webp';
import Img2 from '../../public/image2.webp';
import Img3 from '../../public/images3.jpg';
import Img4 from '../../public/images4.jpg';
import Image from 'next/image';

const reviewData = [
  {
    image: Img,
    name: 'John Doe',
    profession: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis elit a magna viverra, vel tincidunt mauris eleifend.',
  },
  {
    image: Img1,
    name: 'Jane Smith',
    profession: 'Designer',
    description: 'Sed efficitur velit vitae felis pharetra, vel molestie mi ultrices. Sed ac erat in nulla laoreet bibendum.',
  },
  {
    image: Img2,
    name: 'Jane Smith',
    profession: 'Designer',
    description: 'Sed efficitur velit vitae felis pharetra, vel molestie mi ultrices. Sed ac erat in nulla laoreet bibendum.',
  },
  {
    image: Img3,
    name: 'Jane Smith',
    profession: 'Designer',
    description: 'Sed efficitur velit vitae felis pharetra, vel molestie mi ultrices. Sed ac erat in nulla laoreet bibendum.',
  },
  {
    image: Img4,
    name: 'Jane Smith',
    profession: 'Designer',
    description: 'Sed efficitur velit vitae felis pharetra, vel molestie mi ultrices. Sed ac erat in nulla laoreet bibendum.',
  },
  // Add more review data objects as needed
];
const Reviews = () => {
    const [sliderRef, setSliderRef] = useState(null);
  
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div className="slider-container bg-black p-20">
        <h1 id='testimonials' className='text-center'>Testimonials</h1>
        <Slider ref={setSliderRef} {...sliderSettings}>
          {reviewData.map((review, index) => (
            <div key={index} className="review-card bg-gray-800 p-8 rounded-lg">
              <div className="image-container">
                <Image src={review.image} alt={review.name} className="rounded-image" width={150} height={150} />
              </div>
              <h3 className="text-xl text-orange-400 font-bold mb-2">{review.name}</h3>
              <p className="text-gray-400 mb-2">{review.profession}</p>
              <p className="text-gray-400">{review.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default Reviews;
