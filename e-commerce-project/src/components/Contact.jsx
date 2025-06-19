import React from "react";

export default function Contact() {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 lg:px-20">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We'd love to hear from you. Whether you have a question or feedback—reach out!
        </p>
      </section>

      <div className="bg-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto p-10">
        {/* Contact Form */}
        <form className=" p-8 rounded-lg shadow space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mt-1 block w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              className="mt-1 block w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Tell us what's on your mind..."
              className="mt-1 block w-full p-3 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8 pt-16">
          <div>
            <h2 className="text-xl font-bold mb-2">Our Office</h2>
            <p>123 Commerce St.<br />Indore,MP 452010<br />India</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
            <p>Email: support@novacart.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:underline flex gap-2"><span>📸</span>Instagram</a>
              <a href="#" className="text-blue-600 hover:underline flex gap-2"><span>📘</span>Facebook</a>
              <a href="#" className="text-blue-600 hover:underline flex gap-2"><span>🐦</span>Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
