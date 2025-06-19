import React from 'react';
// import './css/footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-12">
      <div className="flex justify-around flex-wrap text-white">
        <div className="m-5">
          <h3 className='mb-4 text-2xl'>Customer Service</h3>
          <ul className="list-none text-gray-300">
            <li className='m-2 cursor-pointer'>Contact Us</li>
            <li className='m-2 cursor-pointer'>Order Tracking</li>
            <li className='m-2 cursor-pointer'>Returns & Refunds</li>
            <li className='m-2 cursor-pointer'>Shipping Info</li>
            <li className='m-2 cursor-pointer'>FAQs</li>
          </ul>
        </div>

        <div className="m-2.5">
          <h3 className='mb-4 text-2xl'>About Us</h3>
          <ul className="list-none text-gray-300">
            <li className='m-2 cursor-pointer'>Our Story</li>
            <li className='m-2 cursor-pointer'>Careers</li>
            <li className='m-2 cursor-pointer'>Press</li>
            <li className='m-2 cursor-pointer'>Blog</li>
          </ul>
        </div>

        <div className="m-2.5">
          <h3 className='mb-4 text-2xl'>Categories</h3>
          <ul className="list-none text-gray-300">
            <li className='m-2 cursor-pointer'>Men</li>
            <li className='m-2 cursor-pointer'>Women</li>
            <li className='m-2 cursor-pointer'>Kids</li>
            <li className='m-2 cursor-pointer'>Accessories</li>
            <li className='m-2 cursor-pointer'>Sale</li>
          </ul>
        </div>

        <div className="m-2.5">
          <h3 className='mb-4 text-2xl'>Follow Us</h3>
          <div className="flex flex-col mr-5">
            <span className='m-2 cursor-pointer'>🐦 Twitter</span>
            <span className='m-2 cursor-pointer'>📘 Facebook</span>
            <span className='m-2 cursor-pointer'>📸 Instagram</span>
            <span className='m-2 cursor-pointer'>▶️ YouTube</span>
          </div>
        </div>
      </div>
    <hr className='text-gray-500'/>
    
    <div className="text-center text-gray-500 mt-8">
        <p>&copy; 2025 ShopSmart Inc. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
