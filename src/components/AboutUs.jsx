import React, { useState } from 'react';

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullDescription = `Nossa paixão por animais de estimação vai além de um simples negócio. Somos uma família dedicada a oferecer o melhor cuidado, amor e atenção para todos os pets. Fundada em 2010, nossa loja nasceu do desejo de criar um espaço onde cada animal seja tratado com carinho e respeito. Trabalhamos incansavelmente para selecionar os melhores produtos, oferecer serviços de qualidade e criar uma comunidade de amantes de animais. Desde rações premium até acessórios personalizados, cada item em nossa loja é escolhido pensando no bem-estar e felicidade dos seus companheiros peludos.`;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="w-full h-80 md:h-96 overflow-hidden rounded-xl shadow-lg">
            <img 
              src="/api/placeholder/600/400" 
              alt="Nossa Equipe" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Sobre Nós
            </h2>
            
            <div 
              className={`text-gray-600 leading-relaxed 
                transition-all duration-500 ease-in-out 
                ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-24 opacity-100 overflow-hidden'}
              `}
            >
              {fullDescription}
            </div>

            {fullDescription.length > 250 && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
              >
                {isExpanded ? 'Mostrar menos' : 'Ler mais'}
              </button>
            )}

            <div className="flex space-x-4 mt-6">
              <div className="bg-blue-100 p-4 rounded-lg text-center flex-1">
                <h3 className="text-2xl font-bold text-blue-600">+10</h3>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg text-center flex-1">
                <h3 className="text-2xl font-bold text-green-600">+5000</h3>
                <p className="text-gray-600">Pets Atendidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;