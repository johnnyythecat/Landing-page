import React from 'react';
import { Gift } from 'lucide-react';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      title: "BONÚS 1 — Segredos do Cozimento Perfeito",
      description: "Para nunca mais errar o ponto da massa e cozinhar como profissional.",
      originalPrice: "R$27",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      title: "BONÚS 2 — Guia de Molhos Coringas",
      description: "Bases que servem para criar dezenas de pratos novos com ingredientes simples.",
      originalPrice: "R$37",
      image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      title: "BONÚS 3 — Dicas de Substituição Inteligente",
      description: "O manual para trocar ingredientes caros por baratos sem ninguém notar.",
      originalPrice: "R$29",
      image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-2xl font-bold text-center mb-6 text-red-600 px-2">
          <span className="inline-flex items-center space-x-2">
            <Gift className="text-red-600 animate-bounce" size={24} />
            <span>Bônus Inclusos (Sem Custo Extra):</span>
          </span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-3 px-2">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 md:space-x-4 border-2 border-red-200"
            >
              <img
                src={bonus.image}
                alt={bonus.title}
                className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover flex-shrink-0 border-2 border-red-100 shadow-md"
                loading="lazy"
              />
              <div className="flex-1">
                <h3 className="text-xs md:text-sm font-bold mb-1 md:mb-2 text-red-600 leading-tight">
                  <span className="text-red-600">{bonus.title.split(' — ')[0]} —</span>
                  <span className="text-gray-800"> {bonus.title.split(' — ')[1]}</span>
                </h3>
                <p className="text-xs md:text-sm text-gray-700 mb-2 md:mb-3 leading-snug">{bonus.description}</p>
                <div className="flex items-center space-x-3">
                  <span className="text-xs md:text-sm line-through text-gray-500">{bonus.originalPrice}</span>
                  <span className="bg-green-600 text-white px-2 md:px-3 py-1 rounded-full font-bold text-xs md:text-sm shadow-md">
                    Grátis HOJE
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-4">
            <p className="text-gray-800 font-bold text-lg md:text-xl px-4 py-2 bg-white rounded-lg border-2 border-red-200 shadow-sm inline-block">
              Ao garantir seu ebook hoje, você leva tudo isso SEM CUSTO EXTRA!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
