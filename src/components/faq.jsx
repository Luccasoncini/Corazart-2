import { Fragment } from "react";
import { useState } from "react";

export const Faq = () => {
  const [data, setData] = useState([
    {
      title: "Identidade Visual",
      text: (
        <p className="mt-3">
          <b>A identidade visual é o rosto da sua marca</b>, transmitindo sua
          personalidade e valores em formas visuais. Ela cria conexões
          instantâneas, constrói confiança e
          <b> diferencia você dos concorrentes</b>. É a chave para se destacar e
          conquistar corações sem dizer uma palavra.
        </p>
      ),
    },
    {
      title: "Gestão de Redes",
      text: (
        <p className="mt-3">
          <b>Potencialize sua presença online</b>, alcance seu público-alvo de
          forma estratégica, crie conexões genuínas com seus clientes, fortaleça
          sua marca, monitore tendências e obtenha insights valiosos. A gestão
          de redes sociais impulsiona seu negócio,
          <b>aumentando sua visibilidade e oportunidades</b> de crescimento no
          mundo digital.
        </p>
      ),
      isOpen: false,
    },
    {
      title: "Sites e LPs",
      text: (
        <p className="mt-3">
          <b>Eleve sua empresa para o próximo nível no mundo digital</b>,
          ofereça uma vitrine online 24 horas por dia, 7 dias por semana,
          alcance potenciais clientes em qualquer lugar, fortaleça sua
          credibilidade, transmita profissionalismo e amplie suas oportunidades
          de negócio. Ter um site é essencial para o sucesso na era digital.
        </p>
      ),
      isOpen: false,
    },
    {
      title: "Sistemas",
      text: (
        <p className="mt-3">
          <b>Eleve sua empresa para o próximo nível no mundo digital</b>,
          ofereça uma vitrine online 24 horas por dia, 7 dias por semana,
          alcance potenciais clientes em qualquer lugar, fortaleça sua
          credibilidade, transmita profissionalismo e amplie suas oportunidades
          de negócio. Ter um site é essencial para o sucesso na era digital.
        </p>
      ),
      isOpen: false,
    },
    {
      title: "E-commerce",
      text: (
        <p className="mt-3">
          Um <b>e-commerce</b> próprio é fundamental para fortalecer sua marca,
          expandir alcance e gerar lucros. Oferece controle total sobre a
          experiência do cliente, dados valiosos e flexibilidade para se adaptar
          às necessidades em constante evolução do mercado. É o futuro dos
          negócios online.
        </p>
      ),
      isOpen: false,
    },
    {
      title: "Google Meu Negócio",
      text: (
        <p className="mt-3">
          O <b>Google Meu Negócio</b> é essencial para empresas locais. Torna
          sua empresa visível no Google Maps e nas buscas locais,{" "}
          <b>
            aumentando a visibilidade, gerando confiança e direcionando o
            tráfego para sua loja física ou site.
          </b>
          É uma ferramenta poderosa para aquisição de clientes locais.
        </p>
      ),
      isOpen: false,
    },
    {
      title: "Anúncios Online",
      text: (
        <p className="mt-3">
          Anúncios online, como Google Ads e Meta Ads (anteriormente Facebook
          Ads), são fundamentais para alcançar públicos-alvo específicos. Eles
          oferecem segmentação precisa, maximizam o ROI e
          <b> aumentam a visibilidade da marca. </b>Essas plataformas permitem
          mensuração detalhada, otimização contínua e são essenciais para o
          sucesso do marketing digital.
        </p>
      ),
      isOpen: false,
    },
    {
      title: "Análise de SEO",
      text: (
        <p className="mt-3">
          SEO (Search Engine Optimization)
          <b>é a espinha dorsal do marketing digital</b>. Ele melhora o ranking
          do seu site nos motores de busca, aumenta a visibilidade orgânica,
          gera tráfego de alta qualidade e constrói autoridade online. Uma
          estratégia de SEO bem executada é crucial para o sucesso a longo prazo
          na web.
        </p>
      ),
      isOpen: false,
    },
    {
      title: "Montion/Video",
      text: (
        <p className="mt-3">
          O conteúdo de vídeo e motion é cativante e altamente envolvente. Ele
          pode transmitir mensagens de forma eficaz, contar histórias,
          demonstrar produtos e gerar conexões emocionais com o público. Em um
          mundo cada vez mais visual e dinâmico, o vídeo é uma ferramenta
          valiosa para o marketing digital, atraindo e retendo a atenção dos
          espectadores.
        </p>
      ),
      isOpen: false,
    },
    {
      title: "Cobertura de Eventos",
      text: (
        <p className="mt-3">
          Cobrir um evento é fundamental para documentar momentos
          significativos, compartilhar informações em tempo real e criar
          conteúdo autêntico. Isso fortalece a presença online, envolve a
          audiência e oferece oportunidades valiosas de networking e branding.
        </p>
      ),
      isOpen: false,
    },
    {
      title: "Captação",
      text: (
        <p className="mt-3">
          Nós também posssuímos uma equipe especializada em captação e gravação
          de imagens/videos, assim conseguimos entregar qualidade e
          originalidade em nossos serviços, assim você poderá criar videos
          intitucionais, reels, e muito mais.
        </p>
      ),
      isOpen: false,
    },
    {
      title: "Jornalismo",
      text: (
        <p className="mt-3">
          O jornalismo desempenha um papel crucial na publicidade, trazendo
          credibilidade e autenticidade às mensagens publicitárias. O uso de
          princípios jornalísticos, como apuração rigorosa e storytelling,
          aumenta a confiança do público, tornando as campanhas de marketing
          mais persuasivas e eficazes.
        </p>
      ),
      isOpen: false,
    },
  ]);

  const toggleItem = (index) => {
    const newData = [...data];
    newData[index].isOpen = !newData[index].isOpen;
    setData(newData);
  };

  return (
    <section className="w-full flex justify-center items-center flex-col px-4 py-10 lg:px-20 gap-3">
      <h3 className="text-4xl font-bold text-purple-900 mb-3">
        Soluções disponíveis para você
      </h3>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 xlg:grid-cols-4 w-full">
        {data.map((item, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <div
                className={`bg-purple-900 w-full py-4 cursor-pointer  ${
                  item.isOpen
                    ? "rounded-t-2xl ease-in duration-100"
                    : "rounded-2xl ease-in duration-100 delay-100"
                }`}
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-white text-center font-bold text-2xl ">
                  {item.title}
                </h3>
              </div>
              <div
                className={`text-purple_900 text-justify overflow-hidden px-3 border-2 text-lg ${
                  item.isOpen
                    ? "h-full border-purple_900 ease-in duration-100 delay-100 rounded-b-2xl pb-2"
                    : "h-0 border-transparent ease-in duration-100 "
                }`}
              >
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
