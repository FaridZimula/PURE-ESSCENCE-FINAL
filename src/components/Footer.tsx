import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#dd2581] text-white pt-0 pb-0 mt-20 w-full">
      {/* Newsletter Signup Bar */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-b border-white/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="Pure Essence Logo" className="h-10 w-10 sm:h-12 sm:w-12 mr-3" />
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Pure Essence</span>
            </div>
            <div className="text-base sm:text-lg text-[#f98203] font-semibold mt-1">Natural Skincare Products</div>
          </div>
          
          <form className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Your Email"
              className="w-full sm:w-64 px-4 py-3 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f98203] text-base"
            required
          />
          <button
            type="submit"
              className="w-full sm:w-auto bg-[#f98203] hover:bg-white hover:text-[#dd2581] text-white px-6 py-3 rounded-full text-base font-bold transition-colors whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </form>

          <div className="flex space-x-3 sm:space-x-4">
          {[Twitter, Facebook, Youtube, Linkedin].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
                className="border border-white rounded-full p-2 sm:p-3 bg-transparent text-white hover:bg-white hover:text-[#dd2581] transition-colors"
              aria-label={Icon.name}
            >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          ))}
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/30 text-center md:text-left">
        {/* Why People Love Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Why People Love Us!</h3>
          <p className="text-white/80 mb-6">
            Pure Essence is dedicated to providing natural, safe, and effective skincare products. Our customers love our commitment to quality, sustainability, and real results.
          </p>
          <button className="border border-white text-[#f98203] px-8 py-2 rounded-full font-semibold hover:bg-[#f98203] hover:text-white transition-colors">Read More</button>
        </div>
        {/* Shop Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Shop Info</h3>
          <ul className="space-y-2 text-white/80">
            <li><Link to="/about" className="hover:text-[#f98203] transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#f98203] transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-[#f98203] transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-[#f98203] transition-colors">Terms & Condition</Link></li>
            <li><Link to="/returns" className="hover:text-[#f98203] transition-colors">Return Policy</Link></li>
            <li><Link to="/faq" className="hover:text-[#f98203] transition-colors">FAQs & Help</Link></li>
          </ul>
        </div>
        {/* Account */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Account</h3>
          <ul className="space-y-2 text-white/80">
            <li><Link to="/account" className="hover:text-[#f98203] transition-colors">My Account</Link></li>
            <li><Link to="/shop-details" className="hover:text-[#f98203] transition-colors">Shop details</Link></li>
            <li><Link to="/cart" className="hover:text-[#f98203] transition-colors">Shopping Cart</Link></li>
            <li><Link to="/wishlist" className="text-[#f98203] hover:text-white transition-colors">Wishlist</Link></li>
            <li><Link to="/orders" className="hover:text-[#f98203] transition-colors">Order History</Link></li>
            <li><Link to="/international-orders" className="hover:text-[#f98203] transition-colors">International Orders</Link></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-white/80">
            <li>Address: 123 Beauty Street, Skincare City</li>
            <li>Email: contact@puressence.com</li>
            <li>Phone: +256 776 203 930</li>
            <li>Payment Accepted</li>
            <li className="flex space-x-2 mt-2 justify-center md:justify-start">
              <img src="/images/payments/visa.png" alt="Visa" className="h-8" />
              <img src="/images/payments/mastercard.png" alt="Mastercard" className="h-8" />
              <img src="/images/payments/maestro.png" alt="Maestro" className="h-8" />
              <img src="/images/payments/paypal.png" alt="Paypal" className="h-8" />
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-6 text-white/80 text-sm text-center md:text-left">
        <div>
          <span className="text-[#f98203]">© Pure Essence</span>, All rights reserved.
        </div>
        <div>
          Designed by <span className="text-[#f98203] font-semibold">Tamu Web Solutions</span>
        </div>
      </div>
    </footer>
  );
}