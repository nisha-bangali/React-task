import React from "react";

// const team = [
//   {
//     name: "Sophie Turner",
//     role: "Founder & CEO",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     name: "Liam Chen",
//     role: "Chief Technology Officer",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     name: "Emma Davis",
//     role: "Head of Marketing",
//     image: "https://via.placeholder.com/150",
//   },
// ];

export default function About() {
  return (
    <div className="bg-gray-100  text-gray-800 px-6 py-12 lg:px-20">
      {/* Header Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to <span className="text-blue-600 font-semibold">MyShop</span> — your go-to destination for modern, sustainable, and affordable shopping.
        </p>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row gap-10 items-center mb-20 mx-20">
        <img
          src="https://www.shutterstock.com/image-photo/business-marketing-product-development-concepts-260nw-2541578885.jpg"
          alt="E-commerce mission"
          className="rounded-lg shadow-lg w-full md:w-1/2"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-3">
            NovaCart is built on the idea that online shopping should be simple, stylish, and eco-conscious. From trendy fashion to smart tech, we curate products that elevate your lifestyle without breaking the bank.
          </p>
          <p className="text-gray-700">
            Our mission is to empower consumers through transparency, quality, and creativity.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="mb-20 bg-gray-800 text-white w-full p-10">
        <h2 className="text-2xl font-bold text-center mb-6">How We Started</h2>
        <p className="text-gray-200 max-w-4xl mx-auto text-center">
          NovaCart was founded in 2021 by a group of friends who wanted to transform how people experience online retail. What began as a small home-based startup has grown into a global platform trusted by thousands of customers every month. We're proud of our journey, and we're just getting started.
        </p>
      </section>

      {/* Team Section */}
      {/* <section className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="bg-gray-100 rounded-lg p-6 text-center shadow hover:shadow-md transition">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Values Section */}
      <section className="bg-gray-50 py-12 px-4 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <h4 className="font-bold text-lg mb-2">Quality First</h4>
            <p className="text-gray-700">We only source products that meet our high standards for durability and style.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Customer-Centric</h4>
            <p className="text-gray-700">You’re the heart of our business — we offer 24/7 support and flexible returns.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Sustainability</h4>
            <p className="text-gray-700">From packaging to sourcing, we make eco-friendly choices wherever possible.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
