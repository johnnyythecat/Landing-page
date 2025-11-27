import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Pode ser impresso?",
      answer: "Sim! O livro digital pode ser impresso quantas vezes quiser. Você pode imprimir as receitas que mais gosta ou o livro completo para ter sempre à mão na cozinha."
    },
    {
      question: "Como vou receber o acesso?",
      answer: "Você receberá o acesso completo por e-mail imediatamente após a compra. Basta clicar no link e começar a usar!"
    },
    {
      question: "Funciona para iniciantes?",
      answer: "Com certeza! É um guia completo passo a passo com receitas fáceis e deliciosas — até para quem nunca cozinhou! Todas as receitas são simples de seguir com ingredientes acessíveis."
    },
    {
      question: "Preciso de ingredientes caros?",
      answer: "Não! Essa é a beleza do e-book. Todas as receitas usam ingredientes simples que você tem em casa ou encontra facilmente no mercado. Temos dicas de substituição inteligente também!"
    },
    {
      question: "Tenho garantia?",
      answer: "Sim! Teste as receitas por 7 dias. Se você não sentir que economizou e comeu melhor, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia."
    },
    {
      question: "Quais são os bônus?",
      answer: "Ao comprar hoje, você recebe: Segredos do Cozimento Perfeito, Guia de Molhos Coringas, e Dicas de Substituição Inteligente - tudo SEM CUSTO EXTRA!"
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-2xl font-bold text-center mb-6 text-red-600 px-2">
          Perguntas Frequentes
        </h2>
        
        <div className="max-w-2xl mx-auto px-2">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md mb-3 overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-sm md:text-base text-gray-800 pr-2">{item.question}</span>
                {openItem === index ? (
                  <ChevronUp className="text-red-600 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-red-600 flex-shrink-0" size={20} />
                )}
              </button>
              
              {openItem === index && (
                <div className="px-4 pb-3">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;