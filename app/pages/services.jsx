// components/Services.js
import React from 'react';
import IMG2 from '../../public/pic2.jpg';

import Image from 'next/image';

const servicesArr = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Service ${i + 1}`,
  description: 'Description of the service goes here.',
  Img:IMG2, // Replace with the path to your images
}));

const ServiceCard = ({ title, description, imgSrc }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
    <div className="relative h-32 w-32 mx-auto mb-4">
      <Image src={imgSrc} alt="Service Image" layout="fill" objectFit="cover" className="rounded-full" />
    </div>
    <h3 className="text-xl text-orange-400 font-bold mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Services = () => {
  return (
    <div className="bg-black px-20 w-full">
      
      <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full" id="services-card">
        {servicesArr.map((service) => (
          <ServiceCard key={service.id} title={service.title} description={service.description} imgSrc={service.Img} />
        ))}
      </div>
    </div>
  );
};

export default Services;
