// import FAQ from "../components/FAQ";
// // import FAQ from "./components/FAQ";

// const services = [
  //   {
    //     title: "Fast Delivery",
    //     description: "Get your products delivered within 24 hours.",
    //     icon: "🚚",
    //   },
    //   {
      //     title: "24/7 Support",
      //     description: "Our team is available anytime for your questions.",
      //     icon: "📞",
      //   },
      //   {
        //     title: "Secure Payments",
//     description: "All transactions are encrypted and safe.",
//     icon: "🔒",
//   },
// ];

// function Service() {
//   return (
  //     <div className="min-h-screen bg-gray-100 p-6">
  //       <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Services</h1>
  //       {/* <div>
  //         <img src="https://media.istockphoto.com/id/2207271217/photo/optimization-of-procurement-or-purchasing-product-order-for-online-shopping-and-service.jpg?s=1024x1024&w=is&k=20&c=PYQL9vGi4asRT8h_tKZCgrD8NKQKOwL40DEKDP_1lsk=" alt="" width={'400px'} />
  //       </div> */}
     
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
//         {services.map((service, idx) => (
//           <ServiceCard key={idx} {...service} />
//         ))}
//       </div>
//       <div className="flex justify-center items-center w-4/5 mx-auto my-16 ">
//          <img src="https://www.technokryon.com/img/services/e-comm/ecom-inner.png" className="w-lg" />
//          <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam repellat dolores delectus unde corrupti aliquam dignissimos quisquam totam quis accusamus. Rem ducimus, aperiam incidunt odit officiis autem vitae tempora enim.</p>
//       </div>
//       <div className="mt-12 max-w-3xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
//         <FAQ />
//       </div>
//     </div>
//   );
// }

// export default Service;





import ServiceCard from "../components/ServiceCard";
import React, { useState } from 'react';
import FAQ from "../components/FAQ";
import { motion } from 'framer-motion'; 

const ServicesPage = () => {
  // Define your services data here or fetch it
  const services = [
    { icon: 'globe', title: 'Global Shipping', description: 'We deliver your favorite products right to your doorstep, anywhere in the world!' },
    { icon: 'shield-alt', title: 'Secure Payments', description: 'Shop with confidence using our encrypted and secure payment gateways.' },
    { icon: 'headset', title: '24/7 Customer Support', description: 'Our dedicated team is always here to assist you, day or night.' },
    { icon: 'box-open', title: 'Easy Returns', description: 'Not satisfied? Our hassle-free return policy ensures a smooth process.' },
    { icon: 'tag', title: 'Best Price Guarantee', description: 'We constantly monitor prices to offer you the most competitive deals.' },
    { icon: 'star', title: 'Quality Assurance', description: 'Every product is carefully inspected to meet our high standards of quality.' },
  ];

  const benefits = [
    { icon: 'truck-fast', title: 'Fast & Reliable Delivery', description: 'Experience swift and dependable shipping for all your orders.' },
    { icon: 'cart-shopping', title: 'Intuitive Shopping Experience', description: 'Our platform is designed for easy navigation and seamless purchasing.' },
    { icon: 'tags', title: 'Exclusive Deals & Discounts', description: 'Unlock special offers and savings as a valued MyShop customer.' },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-950 text-gray-800 dark:text-gray-200 min-h-screen py-16 px-6 lg:px-20 transition-colors duration-500">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <motion.h1
          className="text-5xl lg:text-6xl font-extrabold mb-6 text-blue-700 dark:text-blue-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Exceptional Services
        </motion.h1>
        <motion.p
          className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          At <span className="text-blue-600 dark:text-blue-400 font-bold">MyShop</span>, we go beyond just selling products. We craft a comprehensive shopping experience, ensuring satisfaction from click to delivery.
        </motion.p>
      </section>

      {/* Core Services Grid */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
        
          ))}
        </div>
      </section>

      ---

      {/* Why Choose MyShop Section */}
      <section className="flex flex-col md:flex-row items-center justify-center bg-blue-600 dark:bg-blue-900 text-white rounded-3xl shadow-2xl overflow-hidden mb-24 max-w-7xl mx-auto">
        <motion.div
          className="w-full md:w-1/2 p-10 flex flex-col justify-center animate-slide-in-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-6">Why Choose MyShop?</h2>
          <p className="text-lg leading-relaxed mb-6 opacity-90">
            We're committed to making your online shopping journey exceptional. Our focus on **customer satisfaction, innovative solutions, and reliable service** sets us apart. We understand your needs and strive to exceed your expectations with every interaction.
          </p>
          <ul className="space-y-3 text-lg font-medium">
            <li className="flex items-center">
              <i className="fa-solid fa-check-circle text-green-300 mr-3 text-2xl"></i> Curated product selection
            </li>
            <li className="flex items-center">
              <i className="fa-solid fa-check-circle text-green-300 mr-3 text-2xl"></i> Seamless user experience
            </li>
            <li className="flex items-center">
              <i className="fa-solid fa-check-circle text-green-300 mr-3 text-2xl"></i> Dedicated post-purchase support
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 animate-slide-in-right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src="https://media.istockphoto.com/id/1458804863/photo/digital-transformation-concept-business-strategy-and-marketing-innovative-solutions-and.jpg?s=1024x1024&w=is&k=20&c=Qh9rN2_xU65Xv8u8VvP477i9U36H_F75f284y4YQJk8="
            alt="Why Choose MyShop"
            className="w-full h-full object-cover rounded-tr-3xl md:rounded-bl-none rounded-b-3xl"
          />
        </motion.div>
      </section>

      ---

      {/* Benefits Section */}
      <section className="mb-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Beyond the Basics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 border-t-4 border-purple-500 dark:border-purple-400"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="text-5xl text-purple-600 dark:text-purple-300 mb-4">
                <i className={`fa-solid fa-${benefit.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{benefit.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      ---

      {/* FAQ Section */}
      <section className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">Got Questions? We've Got Answers!</h2>
        <FAQ /> {/* Assuming FAQ is a separate component as provided previously */}
      </section>
    </div>
  );
};

export default ServicesPage;