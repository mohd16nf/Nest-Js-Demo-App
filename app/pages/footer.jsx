// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-orange-400 px-10 py-14">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h3 className="text-black text-lg md:text-xl mr-auto">Coo!Cod3</h3>
        </div>
        {/* Navigation Links */}
        <div className="md:flex flex-col md:flex-row items-center">
          <Link href="/" className="text-black mx-4 my-2 md:my-0 hover:text-gray-500">
            Home
          </Link>
          <Link href="/about" className="text-black mx-4 my-2 md:my-0 hover:text-gray-500">
            About
          </Link>
          <Link href="/services" className="text-black mx-4 my-2 md:my-0 hover:text-gray-500">
            Services
          </Link>
          <Link href="/contact" className="text-black mx-4 my-2 md:my-0 hover:text-gray-500">
            Contact
          </Link>
        </div>
        {/* Contact Section */}
        <div className="text-black">
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
