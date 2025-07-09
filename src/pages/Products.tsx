import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import { naturalEssenceProducts } from '../data/NaturalEssenceProducts';
import { classicProducts } from '../data/ClassicProducts';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Define categories for products
const categories = {
  'Skin Products': ['Face Care', 'Body Care', 'Bath & Body'],
  'Lotions': ['Body Care', 'Face Care'],
  'Bedroom Products': ['Wellness', 'Personal Care'],
  'Tablets': ['Wellness', 'Health'],
  'Health Products': ['Wellness', 'Oral Care', 'General']
};

const promoSlides = [
  {
    image: "/images/natural/26.jpg"
  },
  {
    image: "/images/natural/27.jpg"
  }
];

export default function Products() {
  const [activeTab, setActiveTab] = useState<'natural' | 'classic'>('natural');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPromoSlide, setCurrentPromoSlide] = useState(0);
  const [addedToCart, setAddedToCart] = useState<{[key: string]: boolean}>({});
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const allProducts = activeTab === 'natural' ? naturalEssenceProducts : classicProducts;
  
  // Auto-slide for promo images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromoSlide((prev) => (prev + 1) % promoSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Filter products by category
  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(product => {
        if (selectedCategory === 'Skin Products') {
          return categories['Skin Products'].includes(product.category);
        }
        if (selectedCategory === 'Lotions') {
          return categories['Lotions'].includes(product.category) && 
                 (product.name.toLowerCase().includes('lotion') || 
                  product.name.toLowerCase().includes('moisturizer') ||
                  product.name.toLowerCase().includes('cream'));
        }
        if (selectedCategory === 'Bedroom Products') {
          return product.name.toLowerCase().includes('enlargement') ||
                 product.name.toLowerCase().includes('testosterone') ||
                 product.name.toLowerCase().includes('libido') ||
                 product.name.toLowerCase().includes('breast');
        }
        if (selectedCategory === 'Tablets') {
          return product.name.toLowerCase().includes('tablet') ||
                 product.name.toLowerCase().includes('pill') ||
                 product.name.toLowerCase().includes('capsule') ||
                 product.name.toLowerCase().includes('gummies') ||
                 product.name.toLowerCase().includes('vitamin');
        }
        if (selectedCategory === 'Health Products') {
          return categories['Health Products'].includes(product.category) ||
                 product.name.toLowerCase().includes('tea') ||
                 product.name.toLowerCase().includes('detox') ||
                 product.name.toLowerCase().includes('supplement');
        }
        return false;
      });

  const handleAddToCart = (product: any) => {
    addToCart({ ...product, quantity: 1 });
    setAddedToCart(prev => ({ ...prev, [product.id]: true }));
    
    // Reset button after 2 seconds
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <div className="pt-32">
      {/* Full Width Hero Image */}
      <div className="relative w-full mb-8 overflow-hidden products-banner">
        <div className="flex transition-transform duration-1000 ease-in-out h-full"
             style={{ transform: `translateX(-${currentPromoSlide * 100}%)` }}>
          {promoSlides.map((slide, index) => (
            <div key={index} className="min-w-full h-full">
              <img
                src={slide.image}
                alt={`Promo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {promoSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentPromoSlide === index ? 'bg-[#f98203]' : 'bg-white/50'
              }`}
              onClick={() => setCurrentPromoSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-extrabold text-center text-[#dd2581] mb-8"
        >
          Our Products
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar - Categories */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-36">
            <h3 className="text-lg font-semibold mb-4 text-[#dd2581]">Categories</h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                  selectedCategory === 'All' 
                    ? 'bg-[#dd2581] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-[#f98203] hover:text-white'
                }`}
              >
                All Products
              </button>
              {Object.keys(categories).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                    selectedCategory === category 
                      ? 'bg-[#dd2581] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-[#f98203] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Product Type Tabs */}
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-3 text-[#dd2581]">Product Type</h4>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab('natural')}
                  className={`w-full px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                    activeTab === 'natural' 
                      ? 'bg-[#f98203] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-[#f98203] hover:text-white'
                  }`}
                >
                  Natural Essence
                </button>
                <button
                  onClick={() => setActiveTab('classic')}
                  className={`w-full px-4 py-2 rounded-md transition-colors duration-200 text-sm ${
                    activeTab === 'classic' 
                      ? 'bg-[#f98203] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-[#f98203] hover:text-white'
                  }`}
                >
                  Classic Products
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Products Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredProducts.length} products
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-[400px] flex flex-col"
              >
                <div className="relative h-48">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => navigate(`/shop-detail/${product.id}`)}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#f98203] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 
                    className="text-xl font-bold text-gray-800 mb-2 cursor-pointer hover:text-[#dd2581] transition-colors"
                    onClick={() => navigate(`/shop-detail/${product.id}`)}
                  >
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm flex-1">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-[#dd2581]">
                      ${(product.price * 0.00027).toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                        addedToCart[product.id] 
                          ? 'bg-[#dd2581] text-white' 
                          : 'bg-[#dd2581] text-white hover:bg-[#f98203]'
                      }`}
                    >
                      {addedToCart[product.id] ? 'Added!' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No products message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-4 px-6 py-2 bg-[#f98203] text-white rounded-full hover:bg-[#dd2581] transition-colors"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}