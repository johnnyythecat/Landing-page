import React, { useState, useEffect } from 'react';

const WhyEssentialSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToOffers = () => {
    const offersSection = document.getElementById('ofertas');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-xl font-bold text-center mb-6 animate-fade-in leading-tight px-2 text-red-600">
          O que torna esse e-book indispensável na sua cozinha?
        </h2>
        
        <div className="max-w-4xl mx-auto px-2">
          <div className="text-center mb-6">
            <div className="inline-block rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-500 hover:shadow-3xl animate-float relative">
              {images.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`Jantar italiano ${index + 1}`}
                  className={`w-full max-w-xs md:max-w-sm h-auto transition-opacity duration-500 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          
          <div className="text-gray-700 text-center mb-6 max-w-3xl mx-auto px-2">
            <div className="bg-red-50 p-4 rounded-xl mb-4 border border-red-200 shadow-md">
              <p className="font-bold text-base md:text-lg text-red-600 mb-2">
                Você não precisa gastar uma fortuna para comer incrivelmente bem.
              </p>
            </div>

            <p className="mb-4 text-sm md:text-base leading-relaxed font-medium px-2 text-gray-700">
              <strong>Muitas vezes, a gente acha que para fazer um jantar especial precisa de ingredientes caros ou horas na cozinha. A verdade? A melhor culinária do mundo — a italiana — nasceu da simplicidade.<br /><br />
              Com este e-book, você vai dominar a arte de fazer muito com pouco.<br /><br />
              Nós ensinamos os truques para pegar ingredientes comuns do supermercado brasileiro — como ovos, bacon, sardinha ou legumes da estação — e transformá-los em massas de restaurante.<br /><br />
              Você vai economizar, variar o cardápio da família e receber elogios, tudo isso sem precisar caçar itens importados ou estourar o orçamento. É comida de verdade, feita de forma inteligente.</strong>
            </p>
          </div>
          
          <div className="grid gap-2 max-w-2xl mx-auto mb-8 px-2">
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-red-500 flex-shrink-0 text-lg">✅</span>
              <span className="text-gray-700 text-sm md:text-base font-semibold">Tabela de preços em cada receita para você controlar seu orçamento</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-red-500 flex-shrink-0 text-lg">✅</span>
              <span className="text-gray-700 text-sm md:text-base font-semibold">Tempo médio de preparo: 10 a 25 minutos — perfeito para a rotina</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-red-500 flex-shrink-0 text-lg">✅</span>
              <span className="text-gray-700 text-sm md:text-base font-semibold">Ingredientes acessíveis que você encontra em qualquer mercado</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-red-500 flex-shrink-0 text-lg">✅</span>
              <span className="text-gray-700 text-sm md:text-base font-semibold">Adaptado para o Brasil: substituições inteligentes de ingredientes caros</span>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToOffers}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl w-full max-w-sm animate-pulse"
            >
              QUERO MEU E-BOOK AGORA POR R$19
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEssentialSection;