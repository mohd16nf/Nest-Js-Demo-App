// components/HeroSection.js
import Image from 'next/image';
import heroImg from '../../public/logo2.png';

const HeroSection = () => {
  return (
    <section className="bg-black p-14">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        {/* Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 text-orange-400">Welcome to Our Website</h1>
          <h2 className="text-2xl mb-4 text-orange-400">Providing top-notch services</h2>
          <p className="text-gray-400 mb-8">
            We are a team of professionals dedicated to delivering exceptional services tailored to your needs.
          </p>
          <button className="bg-orange-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              Get Started
          </button>
        </div>
        {/* Image */}
        <div className="md:w-1/2 hero-image-container">
          <Image src={heroImg} alt="Hero Image" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
