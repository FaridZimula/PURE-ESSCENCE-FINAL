import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export default function ProductCard({ id, name, price, image, category, rating }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <Link to={`/shop-details/${id}`} className="block">
        <div className="relative">
          <img src={image} alt={name} className="w-full h-64 object-cover" />
          <div className="absolute top-4 left-4">
            <span className="bg-[#f98203] text-white px-3 py-1 rounded-full text-sm font-semibold">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
          <div className="flex items-center mb-4">
            <div className="flex text-[#f98203]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < rating ? 'fill-current' : 'stroke-current'}`}
                />
              ))}
            </div>
            <span className="text-gray-600 ml-2">({rating})</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#dd2581]">UGX {price.toLocaleString()}</span>
            <Link
              to={`/shop-details/${id}`}
              className="bg-[#dd2581] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#f98203] transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}
