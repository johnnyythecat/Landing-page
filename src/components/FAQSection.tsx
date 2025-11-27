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
      answer: "Sim! O livro digital pode ser impresso quantas vezes quiser. Você pode imprimir as receitas de massas que mais gosta ou o livro completo para ter sempre à mão na cozinha."
    },
    {
      question: "Como vou receber o acesso?",
      answer: "Você receberá o acesso completo por e-mail imediatamente após a compra."
    },
    {
      question: "Não sei cozinhar nada. Isso é pra mim?",
      answer: "Com certeza! É um guia completo passo a passo com receitas de massas italianas fáceis e deliciosas — até para iniciantes completos! Todas as receitas são simples de seguir."
    },
    {
      question: "Preciso de ingredientes especiais?",
      answer: "Não! Todas as receitas de massas usam ingredientes simples que você já tem em casa ou pode encontrar facilmente em qualquer supermercado."
    },
    {
      question: "Eu tenho garantia?",
      answer: "Sim! Você tem 7 dias de garantia. Se não ficar satisfeito, devolvemos 100% do seu dinheiro sem perguntas."
    },
    {
      question: "O livro é físico?",
      answer: "Não, é um livro digital que você pode acessar de onde quiser pelo seu celular, tablet ou computador. Mas se preferir, também pode imprimir as receitas de massas em casa!"
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