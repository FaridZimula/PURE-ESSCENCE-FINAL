import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Phone, Mail, MessageCircle, Truck, ShieldCheck, CreditCard, Package } from 'lucide-react';

const faqs = [
  {
    question: "How do I track my order?",
    answer: "You can track your order by logging into your account and visiting the 'My Orders' section. You'll receive tracking information via email once your order ships."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit/debit cards, mobile money (MTN, Airtel), and cash on delivery for eligible areas."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery typically takes 2-3 business days within major cities and 3-5 business days for other locations. Express delivery options are available for select areas."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unused items in their original packaging. Please contact our customer service to initiate a return."
  },
  {
    question: "Are your products authentic?",
    answer: "Yes, all our products are 100% authentic and sourced directly from authorized distributors and manufacturers."
  }
];

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    description: "Available 24/7",
    contact: "+256 123 456 789"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    description: "Response within 24 hours",
    contact: "support@essence.com"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Live Chat",
    description: "Available 8am - 8pm",
    contact: "Start Chat"
  }
];

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-[#dd2581] mb-4"
        >
          How can we help you?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-8"
        >
          Find answers to common questions or contact our support team
        </motion.p>
        
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f98203]"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </motion.div>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-[#f98203] mb-4">{method.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
            <p className="text-gray-600 mb-2">{method.description}</p>
            <p className="text-[#dd2581] font-medium">{method.contact}</p>
          </motion.div>
        ))}
      </div>

      {/* FAQs Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className="text-[#f98203]">
                  {expandedFaq === index ? '−' : '+'}
                </span>
              </button>
              {expandedFaq === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Help Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <Truck className="w-8 h-8 text-[#f98203] mb-4" />
          <h3 className="font-semibold mb-2">Shipping Information</h3>
          <p className="text-gray-600 text-sm">Learn about our shipping options and delivery times</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <ShieldCheck className="w-8 h-8 text-[#f98203] mb-4" />
          <h3 className="font-semibold mb-2">Returns & Refunds</h3>
          <p className="text-gray-600 text-sm">Information about our return policy and refund process</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <CreditCard className="w-8 h-8 text-[#f98203] mb-4" />
          <h3 className="font-semibold mb-2">Payment Methods</h3>
          <p className="text-gray-600 text-sm">Details about accepted payment options</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <Package className="w-8 h-8 text-[#f98203] mb-4" />
          <h3 className="font-semibold mb-2">Product Care</h3>
          <p className="text-gray-600 text-sm">Guidelines for product maintenance and care</p>
        </motion.div>
      </div>
    </div>
  );
} 