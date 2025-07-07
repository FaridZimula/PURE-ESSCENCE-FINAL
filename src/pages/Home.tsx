import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Heart, Star, Users, Leaf, Truck, ShieldCheck, Phone, Package, Smile, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const slides = [
  {
    image: "/images/natural/7.jpg",
    title: "Pure Essence Skin Products",
    description: "Discover natural beauty with our premium skincare collection"
  },
  {
    image: "/images/natural/8.jpg",
    title: "Natural Ingredients",
    description: "Made with pure, organic ingredients for healthy skin"
  },
  {
    image: "/images/natural/9.jpg",
    title: "Premium Quality",
    description: "Experience luxury skincare at its finest"
  },
  {
    image: "/images/natural/10.jpg",
    title: "Organic Beauty",
    description: "Transform your skin with nature's finest ingredients"
  },
  {
    image: "/images/natural/11.jpg",
    title: "Wellness & Care",
    description: "Complete skincare solutions for every skin type"
  }
];

const promoImages = [
  {
    image: "/images/natural/26.jpg",
    title: "Special Offers",
    subtitle: "Up to 50% Off",
    description: "Limited time deals on premium products"
  },
  {
    image: "/images/natural/27.jpg",
    title: "New Arrivals",
    subtitle: "Fresh Collection",
    description: "Discover our latest skincare innovations"
  }
];

const featureImages = [
  {
    image: "/images/natural/28.jpg",
    title: "Premium Skincare",
    description: "Professional grade products for home use"
  },
  {
    image: "/images/natural/29.jpg",
    title: "Natural Wellness",
    description: "Holistic approach to beauty and health"
  },
  {
    image: "/images/natural/30.jpg",
    title: "Expert Care",
    description: "Trusted by skincare professionals worldwide"
  }
];

const testimonials = [
  {
    name: 'Sarah K.',
    profession: 'Entrepreneur',
    image: '/images/testimonials/client1.jpg',
    rating: 5,
    comment: 'Absolutely love these products! My skin has never felt better.'
  },
  {
    name: 'James O.',
    profession: 'Teacher',
    image: '/images/testimonials/client2.jpg',
    rating: 4,
    comment: 'High quality and natural. I recommend to all my friends.'
  },
  {
    name: 'Aisha N.',
    profession: 'Model',
    image: '/images/testimonials/client3.jpg',
    rating: 5,
    comment: 'The best skincare I have ever used! Will buy again.'
  }
];

const features = [
  {
    icon: Leaf,
    title: "100% Natural Ingredients",
    description: "Pure, safe, and effective for all skin types.",
    backDescription: "Our products are made with certified organic ingredients sourced from sustainable farms worldwide."
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your order quickly, wherever you are in Uganda.",
    backDescription: "Same-day delivery in Kampala and 2-3 days nationwide with real-time tracking."
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Your transactions are always safe and protected.",
    backDescription: "Bank-level encryption and multiple payment options including mobile money and cards."
  },
  {
    icon: Phone,
    title: "Customer Support",
    description: "Friendly help whenever you need it.",
    backDescription: "24/7 WhatsApp support and expert skincare consultations available."
  },
  {
    icon: Package,
    title: "Eco-Friendly Packaging",
    description: "We care for the planet as much as your skin.",
    backDescription: "100% recyclable packaging made from biodegradable materials."
  },
  {
    icon: Smile,
    title: "Satisfaction Guarantee",
    description: "We promise you'll love your purchase.",
    backDescription: "30-day money-back guarantee and free product exchanges."
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart } = useCart();

  // Carousel refs for sliding
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // State for current trending sales group
  const [currentTrendingSales, setCurrentTrendingSales] = useState(0);
  const bestsellersPerView = 3; // Number of cards visible at once
  const trendingSalesGroups = Math.ceil(products.length / bestsellersPerView);

  // Trending Sales (Vegetable Carousel Style)
  const [vegSlide, setVegSlide] = useState(0);
  const vegPerView = 3;
  const vegGroups = Math.ceil(products.length / vegPerView);
  const vegRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Update auto-scroll to use group index
  useEffect(() => {
    const trendingSalesTimer = setInterval(() => {
      setCurrentTrendingSales((prev) => (prev + 1) % trendingSalesGroups);
    }, 4000);
    return () => clearInterval(trendingSalesTimer);
  }, [trendingSalesGroups]);

  useEffect(() => {
    if (vegRef.current) {
      const width = vegRef.current.offsetWidth;
      vegRef.current.scrollTo({ left: width * vegSlide, behavior: 'smooth' });
    }
  }, [vegSlide]);

  // Get top 4 bestsellers (by price as a proxy)
  const bestsellers = [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);

  // Carousel navigation handlers
  const scrollCarousel = (ref: React.RefObject<HTMLDivElement>, dir: number) => {
    if (ref.current) {
      const width = ref.current.offsetWidth;
      ref.current.scrollBy({ left: dir * (width * 0.7), behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="pt-0">
      {/* Hero Slider with 5 rectangular images */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{ display: currentSlide === index ? 'block' : 'none' }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-8">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl mb-8"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    to="/products"
                    className="bg-[#f98203] text-white px-8 py-3 rounded-full inline-flex items-center hover:bg-[#dd2581] transition-colors"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-[#f98203]' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Two rectangular promotional images */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promoImages.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block px-4 py-1 bg-[#f98203] text-white rounded-full mb-2 text-sm font-semibold">
                    {promo.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{promo.title}</h3>
                  <p className="text-white/90">{promo.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Sales (Vegetable Carousel Style) */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-0 text-[#dd2581] text-center">Trending Sales</h2>
        <div className="flex justify-center mt-8">
          <div
            ref={vegRef}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory w-full px-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {bestsellers.map((product, idx) => (
              <div
                key={product.id}
                className="border border-[#f98203] rounded-xl bg-white position-relative min-w-[320px] max-w-xs vesitable-item snap-center transition duration-500 hover:shadow-2xl flex flex-col"
                style={{ position: 'relative', height: '100%' }}
              >
                <div className="vesitable-img overflow-hidden rounded-t-xl" style={{ borderRadius: '10px 10px 0 0' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110 rounded-t-xl"
                  />
                </div>
                <div
                  className="text-white bg-[#dd2581] px-3 py-1 rounded position-absolute"
                  style={{ position: 'absolute', top: 10, right: 10 }}
                >
                  Bestseller
                </div>
                <div className="p-4 rounded-b-xl flex flex-col flex-1">
                  <h4 className="text-xl font-bold mb-2 text-[#dd2581]">{product.name}</h4>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-[#f98203] text-lg font-bold mb-0">
                      {product.price.toLocaleString('en-UG', { style: 'currency', currency: 'UGX', minimumFractionDigits: 0 }).replace('UGX', 'UGX')}
                    </p>
                    <button
                      onClick={() => addToCart({ ...product, quantity: 1 })}
                      className="btn border border-[#dd2581] rounded-full px-4 py-2 text-[#dd2581] flex items-center hover:bg-[#dd2581] hover:text-white transition-colors"
                    >
                      <svg className="h-5 w-5 mr-2 text-[#dd2581] group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3m4 0H9" /></svg>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Dots for slider control */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: vegGroups }).map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full mx-1 transition-colors ${vegSlide === idx ? 'bg-[#f98203]' : 'bg-gray-300'}`}
              onClick={() => setVegSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Three rectangular feature images */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureImages.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-white/90 text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern Features Section with Flipping Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-[#f98203] mb-12 text-center"
        >
          Why Shop With Us?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flip-card h-64"
            >
              <div className="flip-card-inner">
                {/* Front of card */}
                <div className="flip-card-front bg-gradient-to-br from-[#dd2581] to-[#f98203] text-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                </div>
                {/* Back of card */}
                <div className="flip-card-back bg-white border-2 border-[#dd2581] rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 text-[#f98203] mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-[#dd2581]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.backDescription}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section - Horizontal Slider */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-[#f98203] mb-12 text-center"
        >
          What Customers Say
        </motion.h2>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-[#dd2581] hover:text-white"
            onClick={() => scrollCarousel(testimonialsRef, -1)}
            aria-label="Scroll left"
          >
            &#8592;
          </button>
          <div
            ref={testimonialsRef}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                className="min-w-[320px] max-w-sm bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center snap-center"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 object-cover rounded-full mb-4 border-4 border-[#dd2581]"
                />
                <h4 className="text-lg font-bold text-[#f98203] mb-1">{t.name}</h4>
                <span className="text-gray-500 mb-2">{t.profession}</span>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-yellow-400 text-lg ${i < t.rating ? '' : 'opacity-30'}`}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{t.comment}"</p>
              </motion.div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-[#dd2581] hover:text-white"
            onClick={() => scrollCarousel(testimonialsRef, 1)}
            aria-label="Scroll right"
          >
            &#8594;
          </button>
        </div>
      </section>
    </div>
  );
}