import React, { useState, useEffect } from 'react';

const WhyEssentialSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "https://i.imgur.com/AOlTVwm.png",
    "https://i.imgur.com/74rCZOr.png",
    "https://i.imgur.com/TNhkijA.png"
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
    <section className="bg-gradient-to-b from-green-100 to-red-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-xl font-bold text-center mb-6 animate-fade-in leading-tight px-2">
          <span className="text-red-600">O que torna esse e-book INDISPENSÁVEL na sua cozinha?</span>
        </h2>
        
        <div className="max-w-4xl mx-auto px-2">
          <div className="text-center mb-6">
            <div className="inline-block rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-500 hover:shadow-3xl animate-float relative">
              {images.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`Noite de pizza ${index + 1}`}
                  className={`w-full max-w-xs md:max-w-sm h-auto transition-opacity duration-500 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          
          <div className="text-gray-700 text-center mb-6 max-w-3xl mx-auto px-2">
            <div className="bg-gradient-to-r from-red-100 to-green-100 p-4 rounded-xl mb-4 border border-red-200 shadow-md">
              <p className="font-bold text-base md:text-lg text-gray-800 mb-2 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Imagina preparar uma NOITE DE PIZZA COMPLETA em casa…
              </p>
            </div>
            
            <p className="mb-4 text-sm md:text-base leading-relaxed font-medium px-2">
              <strong>Com este e-book, você transforma sua cozinha em uma pizzaria artesanal: receitas simples, massas leves, molhos saborosos e combinações criativas que surpreendem qualquer visita.<br /><br />
              Não é só um livro de receitas. É o segredo para noites especiais, onde cada pizza feita por você tem sabor de pizzaria, mas com muito mais praticidade e economia.</strong>
            </p>
          </div>
          
          <div className="grid gap-2 max-w-2xl mx-auto mb-8 px-2">
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-red-500 flex-shrink-0 text-lg">✅</span>
              <span className="text-gray-700 text-sm md:text-base font-semibold">Massas perfeitas e crocantes</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-red-500 flex-shrink-0 text-lg">✅</span>
              <span className="text-gray-700 text-sm md:text-base font-semibold">Molhos saborosos e autênticos</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-red-500 flex-shrink-0 text-lg">✅</span>
              <span className="text-gray-700 text-sm md:text-base font-semibold">Recheios criativos e irresistíveis</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-red-500 flex-shrink-0 text-lg">✅</span>
              <span className="text-gray-700 text-sm md:text-base font-semibold">Economia e praticidade em casa</span>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={scrollToOffers}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl w-full max-w-sm animate-pulse"
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