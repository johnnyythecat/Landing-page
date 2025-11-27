import React from 'react';
import { Check } from 'lucide-react';

const WhyDifferentSection: React.FC = () => {
  const features = [
    "Mais de 101 receitas autênticas direto das regiões da Itália",
    "Tabela de preços em cada receita para você controlar seu orçamento",
    "Tempo médio de preparo: 10 a 25 minutos — perfeito para a rotina",
    "Ingredientes acessíveis que você encontra em qualquer mercado",
    "Formato prático: acesse online ou imprima",
    "Dicas profissionais para massa al dente, molhos cremosos e emulsões perfeitas",
    "Adaptado para o Brasil: substituições inteligentes de ingredientes caros"
  ];

  const scrollToOffers = () => {
    const offersSection = document.getElementById('ofertas');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6 text-red-600 px-2">
          Por que este e-book é diferente?
        </h2>

        <div className="max-w-3xl mx-auto px-2">
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-gray-800 text-sm md:text-base font-medium leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-200 mb-6">
            <h3 className="text-lg md:text-xl font-bold text-red-600 text-center mb-3">
              Garantia de Satisfação Total
            </h3>
            <p className="text-gray-700 text-center text-sm md:text-base leading-relaxed">
              Você tem <strong>7 dias</strong> para experimentar todas as receitas. Se por qualquer motivo não ficar satisfeito, devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToOffers}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl w-full max-w-sm animate-pulse"
            >
              QUERO MEU E-BOOK AGORA
            </button>
            <p className="text-gray-600 text-sm mt-4 italic">
              Compra 100% segura e entrega imediata
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
