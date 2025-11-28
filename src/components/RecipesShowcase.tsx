import React from 'react';
import { Flame, Sparkles } from 'lucide-react';

interface Recipe {
  title: string;
  image: string;
  description: string;
}

const RecipesShowcase: React.FC = () => {
  const recipes: Recipe[] = [
    {
      title: "Pizza Margherita Clássica",
      image: "https://i.imgur.com/xBVAFGe.jpeg",
      description: "Tradicional, simples e deliciosa"
    },
    {
      title: "Pizza de Frango com Catupiry",
      image: "https://i.imgur.com/eYFzlM9.png",
      description: "A mais pedida"
    },
    {
      title: "Pizza Portuguesa",
      image: "https://i.imgur.com/s6u7qoV.jpeg",
      description: "Recheio completo e sabor marcante"
    },
    {
      title: "Pizza Romeu e Julieta",
      image: "https://i.imgur.com/gOQmTv4.jpeg",
      description: "Clássica e irresistível"
    },
    {
      title: "Pizza de Calabresa Artesanal",
      image: "https://i.imgur.com/gpMHJNG.png",
      description: "Intensa e irresistível"
    },
    {
      title: "Pizza Quatro Queijos Cremosa",
      image: "https://i.imgur.com/oMRRMqd.png",
      description: "Explosão de sabor"
    },
    {
      title: "Pizza de Nutella com Morango",
      image: "https://i.imgur.com/6kK54sm.png",
      description: "Sobremesa perfeita"
    },
    {
      title: "Pizza de Brigadeiro Crocante",
      image: "https://i.imgur.com/EaVCCEz.png",
      description: "Doce favorito das crianças"
    },
    {
      title: "Pizza de Prestígio",
      image: "https://i.imgur.com/ZnGFqgZ.png",
      description: "Chocolate com coco de dar água na boca"
    },
    {
      title: "Pizza de Pepperoni",
      image: "https://i.imgur.com/oePDHcN.png",
      description: "A estrela das pizzarias"
    },
    {
      title: "Pizza de Lombo Canadense com Catupiry",
      image: "https://i.imgur.com/1sJyLUq.png",
      description: "Clássica das pizzarias"
    },
    {
      title: "Pizza de Bacon com Cheddar",
      image: "https://i.imgur.com/9p5hUsT.png",
      description: "Favorito dos amantes de bacon"
    }
  ];

  const scrollToOffers = () => {
    const offersSection = document.getElementById('ofertas');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSuperOffer = () => {
    const offersSection = document.getElementById('ofertas');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-red-900 to-green-900 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl font-bold mb-3 leading-tight px-2">
            <span className="text-white">Veja o que você vai receber no livro digital:</span>
          </h2>
          <p className="text-white/90 text-sm md:text-base italic font-light mb-2 px-2">
            Clássicas, Gourmet, Doces, Salgadas e Criativas, em um só guia de receitas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-6 px-2">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-red-200 overflow-hidden"
            >
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="w-full h-40 sm:h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 leading-tight text-red-600 text-center">{recipe.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 text-center">{recipe.description}</p>
                
                {/* Informações de tempo e calorias */}
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center space-x-1 bg-red-100 px-3 py-1 rounded-full">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-red-600 text-xs font-semibold">
                      {index === 0 ? '20 Min' : index === 1 ? '25 Min' : index === 2 ? '22 Min' : index === 3 ? '12 Min' : index === 4 ? '18 Min' : index === 5 ? '22 Min' : index === 6 ? '15 Min' : index === 7 ? '12 Min' : index === 8 ? '14 Min' : index === 9 ? '18 Min' : index === 10 ? '20 Min' : '18 Min'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-green-600 text-xs font-semibold">
                      {index === 0 ? '5 Ingred.' : index === 1 ? '6 Ingred.' : index === 2 ? '7 Ingred.' : index === 3 ? '3 Ingred.' : index === 4 ? '4 Ingred.' : index === 5 ? '4 Ingred.' : index === 6 ? '4 Ingred.' : index === 7 ? '3 Ingred.' : index === 8 ? '4 Ingred.' : index === 9 ? '5 Ingred.' : index === 10 ? '5 Ingred.' : '4 Ingred.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="mb-6 bg-gradient-to-r from-red-100 via-green-50 to-red-100 p-4 rounded-xl max-w-lg mx-auto border border-red-200 shadow-md transform hover:scale-105 transition-all duration-300 mx-2">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Sparkles className="text-red-500 animate-pulse" size={18} />
              <p className="text-lg font-bold text-red-600">E MUITO MAIS...</p>
              <Sparkles className="text-green-500 animate-pulse" size={18} />
            </div>
            <p className="text-sm text-gray-700 font-semibold leading-tight">São mais de 101 receitas perfeitas pra quem ama pizza, mas quer praticidade e sabor de pizzaria em casa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipesShowcase;