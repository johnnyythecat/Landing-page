import React from 'react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    "+101 receitas de pizzas testadas e aprovadas",
    "Ingredientes simples e fáceis de encontrar",
    "Massas crocantes por fora e macias por dentro",
    "Pizzas salgadas, doces e gourmet para todas as ocasiões",
    "Acesse as Receitas online ou imprima."
  ];

  return (
    <section className="bg-gradient-to-b from-red-100 to-green-100 py-4 md:py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-2xl font-bold text-center mb-4 animate-fade-in px-2">
          <span className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent">Vantagens do Livro Digital:</span>
        </h2>
        
        <div className="max-w-2xl mx-auto px-2">
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-800 text-sm md:text-base font-medium leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;