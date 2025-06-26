import { useState } from "react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer: "Delivery usually takes between 24-48 hours depending on your location.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept Visa, MasterCard, PayPal, and many more.",
  },
  {
    question: "Can I return a product?",
    answer: "Yes, returns are accepted within 30 days of purchase.",
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
        <div key={idx} className="bg-white p-4 rounded shadow">
          <button
            className="w-full text-left font-semibold text-gray-800 flex justify-between"
            onClick={() => toggle(idx)}
          >
            {faq.question}
            <span>{openIndex === idx ? "-" : "+"}</span>
          </button>
          {openIndex === idx && <p className="mt-2 text-gray-600">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
