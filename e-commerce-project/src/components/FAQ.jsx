import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

const faqs = [
  {
    question: "What products do you offer?",
    answer: "We offer a wide range of products including trendy fashion, smart tech gadgets, home essentials, and unique lifestyle items. Our catalog is constantly updated with new arrivals!",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery usually takes between 24-48 hours within Bhopal. For other locations across India, it typically takes 3-7 business days. International shipping times vary.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit and debit cards (Visa, MasterCard, RuPay), Net Banking, UPI (Google Pay, PhonePe, Paytm), and popular digital wallets. Cash on Delivery (COD) is also available for select products and locations.",
  },
  {
    question: "Can I return a product?",
    answer: "Yes, we offer a hassle-free 30-day return policy for most items. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange, provided it meets our return criteria. Please refer to our detailed Returns Policy page for more information.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive a tracking number via email and SMS. You can use this number on our 'Order Tracking' page (accessible from the website footer) to monitor the status of your delivery in real-time.",
  },
  {
    question: "Are your products eco-friendly?",
    answer: "We prioritize sustainability. Many of our products are sourced from eco-conscious manufacturers, and we aim to use sustainable packaging wherever possible. Look for the 'Eco-Friendly' badge on product pages to identify these items!",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, MyShop provides international shipping to many countries worldwide. Shipping costs and delivery times vary based on destination and package weight. You can find more details and estimated costs during the checkout process.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <motion.div
          key={idx}
          className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-md dark:shadow-none bg-white dark:bg-gray-700 overflow-hidden cursor-pointer
                     hover:shadow-lg dark:hover:bg-gray-600 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: idx * 0.08 }} // Staggered animation
        >
          <button
            className="w-full text-left p-4 flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => toggle(idx)}
            aria-expanded={openIndex === idx ? "true" : "false"}
            aria-controls={`faq-content-${idx}`}
          >
            {faq.question}
            <motion.span
              animate={{ rotate: openIndex === idx ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-blue-500 text-xl"
            >
              <i className="fa-solid fa-chevron-down"></i>
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div
                id={`faq-content-${idx}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }} // Smooth exit animation
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="px-4 pb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;