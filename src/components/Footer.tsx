import React from 'react';
import { ChefHat } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <ChefHat className="text-white" size={24} />
            <span className="text-base md:text-lg font-bold">101 Receitas de Massas Italianas</span>
          </div>
          <p className="text-white/80 text-sm">
            Todos os direitos reservados – 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;