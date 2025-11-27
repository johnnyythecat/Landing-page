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
          O que torna esse e-book INDISPENSÁVEL na sua cozinha?
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
                Imagine preparar um JANTAR ITALIANO COMPLETO em casa…
              </p>
            </div>

            <p className="mb-4 text-sm md:text-base leading-relaxed font-medium px-2 text-gray-700">
              <strong>Quem não se rende a um prato de massa bem feito? Espaguete al dente, molho perfumado, parmesão ralado na hora… agora imagine poder preparar tudo isso em casa, com o sabor autêntico da Itália, sem precisar de ingredientes caros ou técnicas complicadas.<br /><br />
              Com este e-book, você transforma sua cozinha em uma verdadeira trattoria italiana: receitas tradicionais, massas perfeitas, molhos encorpados e combinações que vão desde os clássicos universais até pratos regionais pouco conhecidos, mas igualmente deliciosos.<br /><br />
              Não é só um livro de receitas. É uma viagem gastronômica pela Itália, onde cada preparo desperta memórias, inspira novos momentos e leva até a sua mesa um pedacinho da cultura italiana – com alma, simplicidade e muita paixão.</strong>
            </p>
          </div>
          
          <div className="grid gap-2 max-w-2xl mx-auto mb-8 px-2">
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-red-500 flex-shrink-0 text-lg">✅</span>
              <span className="text-gray-700 text-sm md:text-base font-semibold">Mais de 101 receitas autênticas direto das regiões da Itália</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-red-500 flex-shrink-0 text-lg">✅</span>
              <span className="text-gray-700 text-sm md:text-base font-semibold">Tempo médio de preparo: 10 a 25 minutos</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-red-500 flex-shrink-0 text-lg">✅</span>
              <span className="text-gray-700 text-sm md:text-base font-semibold">Ingredientes simples que você encontra em qualquer supermercado</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-red-500 flex-shrink-0 text-lg">✅</span>
              <span className="text-gray-700 text-sm md:text-base font-semibold">Dicas profissionais para massa al dente e molhos perfeitos</span>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={scrollToOffers}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl w-full max-w-sm animate-pulse"
            >
              QUERO AS RECEITAS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEssentialSection;