import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToOffers = () => {
    const offersSection = document.getElementById('ofertas');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-12 bg-white">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 leading-tight px-2 text-red-600 animate-smooth-fade-in">
            +101 Receitas de Massas Italianas que Vão Transformar Sua Cozinha em uma Trattoria Autêntica
          </h1>

          <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto mt-2 px-4">
            <span className="block text-xs md:text-sm max-w-lg mx-auto leading-relaxed font-bold">
              Descubra como preparar massas al dente, molhos tradicionais e receitas regionais da Itália que conquistam qualquer paladar.
            </span>
          </p>

          <div className="mb-6 px-4">
            <img
              src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="101 Receitas de Massas Italianas"
             className="mx-auto w-full max-w-2xl sm:max-w-3xl md:max-w-4xl h-auto rounded-[2rem] transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>

          <div className="mb-6 px-4">
            <p className="text-xs text-red-600 line-through mb-2">De R$127 por apenas</p>
            <p className="text-5xl md:text-6xl font-black text-green-600 mb-4 animate-pulse">R$19</p>
            <button 
              onClick={scrollToOffers}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-4 px-6 md:px-8 rounded-full text-sm md:text-base shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl w-full max-w-sm whitespace-nowrap animate-pulse"
            >
              QUERO AS RECEITAS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;