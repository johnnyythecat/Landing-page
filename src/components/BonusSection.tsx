import React from 'react';
import { Gift } from 'lucide-react';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      title: "BONÚS 1 — Guia Completo de Molhos e Massas para Pizzas",
      description: "Receitas de massas e molhos perfeitos.",
      originalPrice: "R$27",
      image: "https://i.imgur.com/nXzvh8G.jpeg"
    },
    {
      title: "BONÚS 2 — Cardápio Semanal de Pizzas Caseiras",
      description: "Planejamento completo para uma semana de pizzas.",
      originalPrice: "R$37",
      image: "https://i.imgur.com/vsuLazj.jpeg"
    },
    {
      title: "BONÚS 3 — Guia de Recheios Gourmet & Combinações Criativas",
      description: "Combinações únicas e recheios gourmet.",
      originalPrice: "R$29",
      image: "https://i.imgur.com/lukHdvW.jpeg"
    }
  ];

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-2xl font-bold text-center mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent px-2">
          <span className="inline-flex items-center space-x-2">
            <Gift className="text-red-500 animate-bounce" size={24} />
            <span>Bônus que você leva hoje:</span>
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-3 px-2">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-red-600 to-green-600 rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 md:space-x-4 border border-red-300"
            >
              <img 
                src={bonus.image} 
                alt={bonus.title}
                className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover flex-shrink-0 border-2 border-white shadow-md"
                loading="lazy"
              />
              <div className="flex-1">
                <h3 className="text-xs md:text-sm font-bold mb-1 md:mb-2 text-white leading-tight">
                  <span className="text-green-200">{bonus.title.split(' — ')[0]} —</span>
                  <span className="text-white"> {bonus.title.split(' — ')[1]}</span>
                </h3>
                <p className="text-xs md:text-sm text-white mb-2 md:mb-3 leading-snug opacity-95">{bonus.description}</p>
                <div className="flex items-center space-x-3">
                  <span className="text-xs md:text-sm line-through text-green-200">{bonus.originalPrice}</span>
                  <span className="bg-gradient-to-r from-green-500 to-green-700 text-white px-2 md:px-3 py-1 rounded-full font-bold text-xs md:text-sm shadow-md">
                    Grátis HOJE
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-4">
            <p className="text-slate-700 font-bold text-lg md:text-xl px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 shadow-sm inline-block">
              Você leva tudo isso totalmente GRÁTIS se comprar hoje!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;