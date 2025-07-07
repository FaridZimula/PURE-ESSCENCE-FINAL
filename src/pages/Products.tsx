import { motion } from 'framer-motion';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { naturalEssenceProducts } from '../data/NaturalEssenceProducts';
import { classicProducts } from '../data/ClassicProducts';
import { useNavigate } from 'react-router-dom';

// Define categories for products
const categories = {
  'Skin Products': ['Face Care', 'Body Care', 'Bath & Body'],
  'Lotions': ['Body Care', 'Face Care'],
  'Bedroom Products': ['Wellness', 'Personal Care'],
  'Tablets': ['Wellness', 'Health'],
  'Health Products': ['Wellness', 'Oral Care', 'General']
};

export default function Products() {
  const [activeTab, setActiveTab] = useState<'natural' | 'classic'>('natural');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const navigate = useNavigate();

  const allProducts = activeTab === 'natural' ? naturalEssenceProducts : classicProducts;
  
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

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-extrabold text-center text-[#dd2581] mb-8"
      >
        Our Products
      </motion.h1>

      {/* Product Type Tabs */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setActiveTab('natural')}
          className={`px-4 py-2 mx-2 rounded-t-lg transition-colors duration-200 text-sm sm:text-base ${activeTab === 'natural' ? 'bg-[#f98203] text-white' : 'bg-gray-200 text-black hover:bg-[#f98203] hover:text-white'}`}
        >
          Natural Essence
        </button>
        <button
          onClick={() => setActiveTab('classic')}
          className={`px-4 py-2 mx-2 rounded-t-lg transition-colors duration-200 text-sm sm:text-base ${activeTab === 'classic' ? 'bg-[#f98203] text-white' : 'bg-gray-200 text-black hover:bg-[#f98203] hover:text-white'}`}
        >
          Classic Products
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-[#dd2581]">Shop by Category</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full transition-colors duration-200 text-sm ${
              selectedCategory === 'All' 
                ? 'bg-[#dd2581] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-[#f98203] hover:text-white'
            }`}
          >
            All Categories
          </button>
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-200 text-sm ${
                selectedCategory === category 
                  ? 'bg-[#dd2581] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-[#f98203] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Count */}
      <div className="mb-6">
        <p className="text-gray-600 text-center">
          Showing {filteredProducts.length} products
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </p>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => navigate(`/shop-detail/${product.id}`)}
            className="cursor-pointer"
          >
            <ProductCard
              id={Number(product.id)}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              rating={5}
            />
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
  );
}