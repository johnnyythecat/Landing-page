import React from 'react';
import { Star, Crown, Zap, Gift } from 'lucide-react';

const OffersSection: React.FC = () => {
  const basicFeatures = [
    "+101 Receitas de Pizzas Caseiras",
    "Acesso Vitalício",
    "Entrega Imediata por E-mail"
  ];

  const premiumFeatures = [
    "+200 Receitas de Pizzas (salgadas, doces e gourmet)",
    "+50 Receitas de Pizzas Italianas",
    "Guia Completo de Molhos e Massas",
    "Cardápio Semanal de Pizzas Caseiras",
    "Guia de Recheios Gourmet & Combinações Criativas"
  ];

  const premiumBonuses = [
    "Plano de refeições com Pizzas de 30 dias",
    "Guia de Conservação de Massas",
    "Substituições de Ingredientes"
  ];

  return (
    <section id="ofertas" className="bg-gradient-to-b from-red-50 to-green-100 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Oferta Básica */}
          <div className="bg-white rounded-3xl shadow-2xl p-5 border border-gray-100 relative overflow-hidden scale-95">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
            <div className="text-center mb-5">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-4 py-2 rounded-full inline-block mb-4 border border-blue-300">
                <div className="flex items-center space-x-2 justify-center">
                  <Zap size={16} />
                  <span className="font-bold text-sm">OFERTA BÁSICA</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent leading-tight">
                +101 Receitas de Pizzas Caseiras
              </h3>
            </div>
            
            <div className="space-y-2 mb-5">
              {basicFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-1 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-red-500 flex-shrink-0 text-base">✅</span>
                  <span className="text-gray-700 text-sm font-medium leading-tight">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="text-sm text-red-600 line-through mb-2">De R$97 por apenas</div>
              <div className="text-5xl font-black text-green-600 mb-3 animate-pulse">R$16</div>
              <a 
                href="https://www.ggcheckout.com/checkout/v2/njZGt5kBvW3zDvaM3bFW"
                className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-6 rounded-full text-sm shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-center animate-pulse"
              >
                QUERO A OFERTA BÁSICA
              </a>
            </div>
          </div>

          {/* Super Oferta */}
          <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gradient-to-r from-red-400 to-green-500 relative overflow-hidden ring-1 ring-red-300">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-400 via-green-500 to-red-600"></div>
            
            {/* Badge "Mais Vendida" como ribbon no canto superior direito */}
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-bold shadow-lg transform rotate-12 rounded-sm">
              Mais Vendida
            </div>
            
            {/* Header Premium */}
            <div className="text-center mb-4">
              <div className="bg-gradient-to-r from-red-500 via-green-500 to-red-600 text-white px-4 py-3 rounded-full inline-block mb-3 shadow-lg border-2 border-white">
                <div className="font-black text-base tracking-wide animate-pulse">
                  SUPER OFERTA
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent leading-tight">
                +200 Receitas de Pizzas
              </h3>
            </div>
            
            <div className="space-y-1 mb-4">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-1 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-red-500 flex-shrink-0 text-base">✅</span>
                  <span className="text-gray-700 text-sm font-medium leading-tight">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Bônus Section */}
            <div className="mb-4">
              <div className="text-center mb-2">
                <span className="text-red-600 font-bold text-base">BONÚS EXCLÚSIVOS!</span>
              </div>
              <div className="space-y-1">
                {premiumBonuses.map((bonus, index) => (
                  <div key={index} className="flex items-start space-x-3 p-1">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Gift className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-800 text-sm font-semibold leading-tight">{bonus}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-sm text-red-600 line-through mb-1">De R$197 por apenas</div>
              <div className="text-6xl font-black text-green-600 mb-3 animate-pulse">R$27</div>
              <a 
                href="https://www.ggcheckout.com/checkout/v2/bSR75P2qj7X42Q5ku6cv"
                className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-6 rounded-full text-sm shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl text-center animate-pulse"
              >
                QUERO A SUPER OFERTA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;