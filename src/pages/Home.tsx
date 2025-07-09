import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Truck, ShieldCheck, Phone, Package, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const slides = [
  {
    image: "/images/natural/7.jpg"
  },
  {
    image: "/images/natural/8.jpg"
  },
  {
    image: "/images/natural/9.jpg"
  },
  {
    image: "/images/natural/10.jpg"
  },
  {
    image: "/images/natural/11.jpg"
  }
];

const promoImages = [
  {
    image: "/images/natural/26.jpg"
  },
  {
    image: "/images/natural/27.jpg"
  }
];

const categoryProducts = [
  {
    category: 'Skin Products',
    image: '/images/natural/23.jpg',
    product: products[2] // Face Serum
  },
  {
    category: 'Lotions',
    image: '/images/natural/24.jpg',
    product: products[3] // Body Lotion
  },
  {
    category: 'Health Products',
    image: '/images/natural/15.jpg',
    product: products[14] // Slimming Tea
  },
  {
    category: 'Tablets',
    image: '/images/natural/16.jpg',
    product: products[15] // Moisturizer
  },
  {
    category: 'Bedroom Products',
    image: '/images/natural/17.jpg',
    product: products[16] // Facial Cleanser
  },
  {
    category: 'Body Care',
    image: '/images/natural/18.jpg',
    product: products[17] // Body Oil
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
  const [addedToCart, setAddedToCart] = useState<{[key: string]: boolean}>({});

  // Carousel refs for sliding
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Carousel navigation handlers
  const scrollCarousel = (ref: React.RefObject<HTMLDivElement>, dir: number) => {
    if (ref.current) {
      const width = ref.current.offsetWidth;
      ref.current.scrollBy({ left: dir * (width * 0.7), behavior: 'smooth' });
    }
  };

  const handleAddToCart = (product: any) => {
    addToCart({ ...product, quantity: 1 });
    setAddedToCart(prev => ({ ...prev, [product.id]: true }));
    
    // Reset button after 2 seconds
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <div className="pt-0">
      {/* Hero Slider - Clean images sliding left */}
      <div className="relative w-full overflow-hidden hero-slider">
        <div className="flex transition-transform duration-1000 ease-in-out h-full"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

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

      {/* Two rectangular promotional images - Clean without text */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promoImages.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ height: '400px' }}
            >
              <img
                src={promo.image}
                alt={`Promo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop By Category Section */}
      <section className="container mx-auto py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#dd2581] text-center flex-1">Shop by Category</h2>
          <Link 
            to="/products" 
            className="text-gray-600 hover:text-[#dd2581] transition-colors border border-gray-300 px-4 py-2 rounded-full"
          >
            View More
          </Link>
        </div>
        
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-[#dd2581] hover:text-white"
            onClick={() => scrollCarousel(categoryRef, -1)}
            aria-label="Scroll left"
          >
            &#8592;
          </button>
          
          <div
            ref={categoryRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {categoryProducts.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[280px] max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden snap-center hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-[#dd2581] mb-2">{item.category}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.product.name}</p>
                  <p className="text-[#f98203] font-bold text-lg">
                    ${(item.product.price * 0.00027).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:bg-[#dd2581] hover:text-white"
            onClick={() => scrollCarousel(categoryRef, 1)}
            aria-label="Scroll right"
          >
            &#8594;
          </button>
        </div>
      </section>

      {/* Three images in 2+1 layout */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{ height: '400px' }}
          >
            <img
              src="/images/natural/28.jpg"
              alt="Feature 1"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{ height: '400px' }}
          >
            <img
              src="/images/natural/29.jpg"
              alt="Feature 2"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden group cursor-pointer"
          style={{ height: '254px' }}
        >
          <img
            src="/images/natural/30.jpg"
            alt="Feature 3"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>
      </section>

      {/* Why Shop With Us - Pink front, Orange back, no gradient */}
      <section id="why-shop-with-us" className="max-w-7xl mx-auto px-4 py-16">
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
                {/* Front of card - Pink */}
                <div className="flip-card-front bg-[#dd2581] text-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                </div>
                {/* Back of card - Orange */}
                <div className="flip-card-back bg-[#f98203] text-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-white/90">{feature.backDescription}</p>
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