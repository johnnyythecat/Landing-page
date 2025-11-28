import React from 'react';
import { ChefHat } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-red-800 to-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <ChefHat className="text-yellow-400" size={24} />
            <span className="text-base md:text-lg font-bold">101 Receitas de Pizza Caseira</span>
          </div>
          <p className="text-gray-400 text-sm">
            Todos os direitos reservados – 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;