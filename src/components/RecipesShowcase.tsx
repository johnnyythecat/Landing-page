import React from 'react';
import { Sparkles } from 'lucide-react';

interface Recipe {
  title: string;
  image: string;
  description: string;
  time: string;
  ingredients: string;
}

const RecipesShowcase: React.FC = () => {
  const recipes: Recipe[] = [
    {
      title: "Espaguete Aglio, Olio e Peperoncino",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Alho, azeite e pimenta perfeitos",
      time: "12 min",
      ingredients: "4 Ingred."
    },
    {
      title: "Spaghetti alla Carbonara",
      image: "https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Cremosa sem usar creme de leite",
      time: "20 min",
      ingredients: "5 Ingred."
    },
    {
      title: "Bucatini Cacio e Pepe",
      image: "https://images.pexels.com/photos/5175539/pexels-photo-5175539.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Queijo derretido com pimenta moída",
      time: "15 min",
      ingredients: "3 Ingred."
    },
    {
      title: "Rigatoni all'Amatriciana",
      image: "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Tomate rico com bacon crocante",
      time: "25 min",
      ingredients: "6 Ingred."
    },
    {
      title: "Linguine alla Puttanesca",
      image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Intenso sabor de azeitona e alcaparra",
      time: "18 min",
      ingredients: "7 Ingred."
    },
    {
      title: "Fettuccine Alfredo",
      image: "https://images.pexels.com/photos/1460872/pexels-photo-1460872.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Manteiga e queijo derretendo na boca",
      time: "14 min",
      ingredients: "4 Ingred."
    },
    {
      title: "Massas com Sardinha e Atum",
      image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Enlatados viram banquete mediterrâneo",
      time: "15 min",
      ingredients: "6 Ingred."
    },
    {
      title: "Tagliatelle Burro e Salvia",
      image: "https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Manteiga de sálvia dourada e aromática",
      time: "12 min",
      ingredients: "4 Ingred."
    },
    {
      title: "Trofie al Pesto Genovese",
      image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Manjericão fresco em molho verde",
      time: "18 min",
      ingredients: "7 Ingred."
    },
    {
      title: "Penne all'Arrabbiata",
      image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Molho de tomate picante e viciante",
      time: "18 min",
      ingredients: "5 Ingred."
    },
    {
      title: "Massas One-Pot",
      image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Cozinha massa e molho na mesma panela",
      time: "20 min",
      ingredients: "8 Ingred."
    },
    {
      title: "Molhos de Tomate Caseiros",
      image: "https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Mais baratos e saudáveis que saquinhos",
      time: "25 min",
      ingredients: "6 Ingred."
    }
  ];

  return (
    <section className="bg-red-600 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl font-bold mb-3 leading-tight px-2 text-white">
            Veja o que você vai aprender a fazer (gastando pouco!):
          </h2>
          <p className="text-white/90 text-sm md:text-base italic font-light mb-2 px-2">
            Receitas que transformam ingredientes simples em pratos de restaurante.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-6 px-2">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white overflow-hidden"
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

                <div className="flex justify-center space-x-4">
                  <div className="flex items-center space-x-1 bg-red-100 px-3 py-1 rounded-full">
                    <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-red-600 text-xs font-semibold">{recipe.time}</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-green-600 text-xs font-semibold">{recipe.ingredients}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-6 bg-white p-4 rounded-xl max-w-lg mx-auto border-2 border-white shadow-md transform hover:scale-105 transition-all duration-300 mx-2">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Sparkles className="text-red-600 animate-pulse" size={18} />
              <p className="text-lg font-bold text-red-600">E MUITO MAIS...</p>
              <Sparkles className="text-green-600 animate-pulse" size={18} />
            </div>
            <p className="text-sm text-gray-700 font-semibold leading-tight">São mais de 105 receitas pensadas para sua rotina: receitas one-pot, molhos caseiros, adaptações brasileiras, massas gratinadas, vegetarianas, com proteína e saladas de massa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipesShowcase;
