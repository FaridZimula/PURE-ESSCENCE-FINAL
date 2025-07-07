import { motion } from 'framer-motion';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { naturalEssenceProducts } from '../data/NaturalEssenceProducts';
import { classicProducts } from '../data/ClassicProducts';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const [activeTab, setActiveTab] = useState<'natural' | 'classic'>('natural');
  const products = activeTab === 'natural' ? naturalEssenceProducts : classicProducts;
  const navigate = useNavigate();

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-extrabold text-center text-[#dd2581] mb-8"
      >
        Our Products
      </motion.h1>

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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {products.map((product, index) => (
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
    </div>
  );
}