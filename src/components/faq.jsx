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
      title: "Produção de comerciais",
      text: (
        <p className="mt-3">
          Entregamos <b>comerciais incríveis, criativos e impactantes</b>,
          garantindo qualidade excepcional e resultados impressionantes.{" "}
          <b>Nossa abordagem inovadora e paixão pela excelência</b> nos tornam a
          escolha ideal para campanhas publicitárias de sucesso.
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
      title: "Diagramações",
      text: (
        <p className="mt-3">
          Criamos{" "}
          <b>diagramações excepcionais para revistas, jornais e livros</b>,
          combinando criatividade, organização e atenção aos detalhes. Nossos
          layouts são cuidadosamente projetados para destacar o conteúdo de
          forma atraente e informativa, garantindo uma experiência visual
          impactante para os leitores.
        </p>
      ),
      isOpen: false,
    },
    {
      title: "Comunicação Visual",
      text: (
        <p className="mt-3">
          Criamos comunicação visual impactante, abrangendo{" "}
          <b>letreiros, banners, comunicação em pontos de venda e online</b>.
          Nossos designs personalizados garantem uma mensagem eficaz e
          memorável, integrando elementos visuais e estratégias de marketing
          para envolver o público em qualquer ambiente.
        </p>
      ),
      isOpen: false,
    },
    {
      title: "Manipulações",
      text: (
        <p className="mt-3">
          Realizamos manipulações de imagem de alta qualidade, atendendo a
          diversas necessidades criativas e comerciais. Nossa equipe utiliza
          técnicas avançadas para{" "}
          <b>aprimorar, retocar e transformar imagens</b>, garantindo resultados
          impressionantes. Seja para publicidade, design editorial ou conteúdo
          digital, nossa experiência garante a entrega de trabalhos visualmente
          impactantes e autênticos.
        </p>
      ),
      isOpen: false,
    },
    {
      title: "Rótulos e Embalagens",
      text: (
        <p className="mt-3">
          Nossa equipe é especializada na criação de rótulos e embalagens que se
          destacam no mercado. Combinamos design inovador, informações claras e
          apelo visual para garantir que cada produto tenha uma embalagem
          atraente e funcional.{" "}
          <b>
            Levamos em consideração a identidade da marca, as regulamentações do
            setor e as preferências do consumidor
          </b>{" "}
          para criar rótulos e embalagens que se destacam nas prateleiras e
          comunicam efetivamente os atributos do produto.
        </p>
      ),
      isOpen: false,
    },
    {
      title: "Motion/Video",
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
      title: "Algo Surpreendente",
      text: (
        <p className="mt-3">
          Nós não nos limitamos a criação de apenas categorias, somos muito mais
          criativos do que você possa imaginar. Teve ideia de algo inovador?
          Conte conosco que vamos adorar fazer parte da sua história.
        </p>
      ),
      isOpen: false,
      isOrange: true,
    },
  ]);

  const toggleItem = (index) => {
    const newData = [...data];
    newData[index].isOpen = !newData[index].isOpen;
    setData(newData);
  };

  return (
    <section className="w-full flex justify-center items-center flex-col px-4 py-10 lg:px-20 gap-3">
      <h3 className="text-4xl text-center font-bold text-purple-900 mb-3">
        Soluções disponíveis para você
      </h3>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3  w-full">
        {data.map((item, index) => {
          return (
            <Fragment>
              {item.isOrange ? (
                <div className="flex flex-col" key={index}>
                  <div
                    className={`bg-orange-600 w-full py-4 cursor-pointer  ${
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
                    className={`text-orange-600 text-justify overflow-hidden px-3 border-2 text-lg ${
                      item.isOpen
                        ? "h-full border-orange-600 ease-in duration-100 delay-100 rounded-b-2xl pb-2"
                        : "h-0 border-transparent ease-in duration-100 "
                    }`}
                  >
                    {item.text}
                  </div>
                </div>
              ) : (
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
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};
