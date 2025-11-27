import React from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';

interface Testimonial {
  name: string;
  avatar: string;
  time: string;
  content: string;
  likes: number;
  verified?: boolean;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Ana Paula Rodrigues",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=50&h=50&fit=crop&crop=face",
      time: "3h",
      content: "Essas receitas de massas são PERFEITAS! Já fiz a Carbonara, Cacio e Pepe e Amatriciana. Ficaram exatamente como na Itália. Meu marido disse que abro um restaurante italiano!",
      likes: 38,
      verified: true
    },
    {
      name: "Mariana Costa",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      time: "5h",
      content: "Esse livro transformou minha cozinha! As dicas de massa al dente são ouro puro. Faço jantar italiano toda semana agora e economizo muito!",
      likes: 42
    },
    {
      name: "Juliana Almeida",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face",
      time: "1d",
      content: "Nunca imaginei que conseguiria fazer massas italianas tão autênticas em casa! Passo a passo simples e ingredientes fáceis de encontrar. Recomendo demais!",
      likes: 51,
      verified: true
    }
  ];

  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6 text-red-600 px-2">
          Veja o que nossos clientes estão falando:
        </h2>

        <div className="max-w-md mx-auto space-y-4 px-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Header do post */}
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-8 h-8 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold text-sm text-gray-900">{testimonial.name}</span>
                      {testimonial.verified && (
                        <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">{testimonial.time}</span>
                  <MoreHorizontal size={16} className="text-gray-400" />
                </div>
              </div>

              {/* Conteúdo do post */}
              <div className="px-3 pb-2">
                <p className="text-sm text-gray-800 leading-relaxed">{testimonial.content}</p>
              </div>

              {/* Ações do post */}
              <div className="flex items-center justify-between px-3 py-2 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 hover:bg-gray-50 px-2 py-1 rounded-full transition-colors">
                    <Heart size={16} className="text-red-500" />
                    <span className="text-xs text-gray-600 font-medium">{testimonial.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:bg-gray-50 px-2 py-1 rounded-full transition-colors">
                    <MessageCircle size={16} className="text-gray-500" />
                    <span className="text-xs text-gray-600">Comentar</span>
                  </button>
                </div>
                <button className="hover:bg-gray-50 p-1 rounded-full transition-colors">
                  <Share size={16} className="text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
