

import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 min-h-screen px-6 py-12 lg:px-20 transition-colors duration-500">
      {/* Header Section */}
      <section className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-down">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-blue-700 dark:text-blue-400 drop-shadow-md">
          About Us
        </h1>
        <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Welcome to <span className="text-blue-600 dark:text-blue-400 font-bold">MyShop</span> &mdash; your ultimate destination for <span className="font-semibold">modern, sustainable, and affordable</span> shopping experiences, based right here in **Bhopal, Madhya Pradesh, India**.
        </p>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center mb-24 mx-auto max-w-6xl">
        <div className="w-full md:w-1/2 relative group animate-slide-in-left">
          <img
            src="https://www.shutterstock.com/image-photo/business-marketing-product-development-concepts-260nw-2541578885.jpg"
            alt="E-commerce mission"
            className="rounded-xl shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-blue-600 opacity-20 rounded-xl transition-opacity duration-300 group-hover:opacity-0"></div>
        </div>
        <div className="w-full md:w-1/2 animate-slide-in-right delay-200">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            <span className="font-semibold text-blue-600 dark:text-blue-400">MyShop</span> is built on the idea that online shopping should be **simple, stylish, and eco-conscious**. From trendy fashion to cutting-edge tech, we meticulously curate products that elevate your lifestyle without compromising on your values or budget. We believe in providing access to quality goods for everyone, everywhere.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Our unwavering mission is to empower consumers through **transparency, unparalleled quality, and boundless creativity**, fostering a community where mindful shopping thrives. We're dedicated to making your online shopping journey enjoyable and seamless, from Browse to delivery.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="mb-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white w-full py-16 px-10 rounded-2xl shadow-xl transform hover:scale-[1.01] transition-transform duration-300 animate-fade-in-up delay-400">
        <h2 className="text-4xl font-bold text-center mb-8">How We Started</h2>
        <p className="text-lg text-blue-100 max-w-5xl mx-auto text-center leading-relaxed">
          MyShop was ignited in **2021** by a passionate group of friends united by a single vision: to revolutionize the online retail experience. What began as a humble, home-based startup in **Bhopal**, has blossomed into a **thriving global platform**, earning the trust of hundreds of thousands of customers every month. We're proud to have grown from our roots, maintaining our commitment to local values while serving a worldwide audience. We are immensely proud of our incredible journey, and this is just the beginning of our story.
        </p>
      </section>

      {/* Our Commitment Section - NEW */}
      ---
      <section className="bg-white dark:bg-gray-800 py-16 px-4 rounded-xl shadow-2xl mb-24 transform hover:scale-[1.005] transition-transform duration-300 animate-fade-in-up delay-500">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Commitment</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Commitment Card 1 */}
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md border-t-4 border-yellow-500 hover:border-yellow-600 transform hover:scale-105 transition-all duration-300 ease-in-out group">
            <div className="text-5xl text-yellow-500 mb-6 text-center group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            <h4 className="font-bold text-2xl mb-4 text-gray-900 dark:text-white text-center">Innovation</h4>
            <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              We continuously seek out new technologies and trends to enhance your shopping experience and bring you the latest products.
            </p>
          </div>

          {/* Commitment Card 2 */}
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md border-t-4 border-orange-500 hover:border-orange-600 transform hover:scale-105 transition-all duration-300 ease-in-out group">
            <div className="text-5xl text-orange-500 mb-6 text-center group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-shield-alt"></i>
            </div>
            <h4 className="font-bold text-2xl mb-4 text-gray-900 dark:text-white text-center">Security & Privacy</h4>
            <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              Your trust is paramount. We employ robust security measures to protect your data and ensure safe transactions.
            </p>
          </div>

          {/* Commitment Card 3 */}
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md border-t-4 border-red-500 hover:border-red-600 transform hover:scale-105 transition-all duration-300 ease-in-out group">
            <div className="text-5xl text-red-500 mb-6 text-center group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-people-carry-box"></i>
            </div>
            <h4 className="font-bold text-2xl mb-4 text-gray-900 dark:text-white text-center">Community Impact</h4>
            <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              We're dedicated to giving back and positively impacting the communities we serve, both locally in Bhopal and globally.
            </p>
          </div>
        </div>
      </section>
      ---

      {/* Values Section */}
      <section className="bg-white dark:bg-gray-800 py-16 px-4 rounded-xl shadow-2xl transform hover:scale-[1.005] transition-transform duration-300">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Value Card 1 */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg border-b-4 border-blue-500 hover:border-blue-600 transform hover:-translate-y-2 transition-all duration-300 ease-in-out group animate-fade-in-up">
            <div className="text-5xl text-blue-500 mb-6 text-center group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-gem"></i> {/* Gem icon for quality */}
            </div>
            <h4 className="font-bold text-2xl mb-4 text-gray-900 dark:text-white text-center">Quality First</h4>
            <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              We painstakingly source products that not only meet but exceed our rigorous standards for durability, functionality, and timeless style.
            </p>
          </div>

          {/* Value Card 2 */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg border-b-4 border-green-500 hover:border-green-600 transform hover:-translate-y-2 transition-all duration-300 ease-in-out group animate-fade-in-up delay-100">
            <div className="text-5xl text-green-500 mb-6 text-center group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-handshake"></i> {/* Handshake icon for customer-centric */}
            </div>
            <h4 className="font-bold text-2xl mb-4 text-gray-900 dark:text-white text-center">Customer-Centric</h4>
            <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              You are the very heart of our business. We are dedicated to providing exceptional 24/7 support and hassle-free, flexible returns.
            </p>
          </div>

          {/* Value Card 3 */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg border-b-4 border-purple-500 hover:border-purple-600 transform hover:-translate-y-2 transition-all duration-300 ease-in-out group animate-fade-in-up delay-200">
            <div className="text-5xl text-purple-500 mb-6 text-center group-hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-leaf"></i> {/* Leaf icon for sustainability */}
            </div>
            <h4 className="font-bold text-2xl mb-4 text-gray-900 dark:text-white text-center">Sustainability</h4>
            <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              From our thoughtfully chosen packaging to our ethical sourcing practices, we are committed to making eco-friendly choices at every turn.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;