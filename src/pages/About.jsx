import React from "react";
import { LogoCorazartIcon } from "../assets/svg/logo";
import Borboleta from "../assets/img/Borboleta.png";
import { useGifState } from "../hooks/useGifState";
import { useEffect } from "react";

export const About = () => {
  const { gifFinished, setGifFinished } = useGifState();

  useEffect(() => {
    setGifFinished(true);
  }, []);

  return (
    <main className="w-full relative ">
      <section className="flex flex-col justify-center items-center w-full px-4 py-10 lg:px-20 lg:pt-10">
        <h5 className="font-extralight text-purple_700 text-2xl  lg:text-5xl ">
          Somos a
        </h5>
        <div className="w-4/5 lg:w-2/5 text-purple_900">
          <LogoCorazartIcon color="#704293" />
        </div>
      </section>

      <section className="flex flex-wrap justify-center items-start px-4 lg:px-20 lg:pb-8 xl:pb-4">
        <div className="flex justify-center items-center w-full mb-5 lg:w-1/2">
          <img
            src={Borboleta}
            alt=""
            className="w-full lg:w-[95%] xl:w-[50%]"
          />
        </div>
        <div className="flex flex-col justify-center items-start w-full lg:w-1/2 ">
          <p className="text-gray_700 text-xl mb-5 xlg:text-2xl lg:leading-10 ">
            Nascemos em 2018 com o propósito de criar histórias interessantes
            através de uma ONG que ajudava pessoas em situação de
            vulnerabilidade social em São Paulo. Dois anos depois, vimos nosso
            crescimento, atendendo empresas de micro a grande porte.
          </p>
          <p className="text-gray_700 text-xl mb-5 xlg:text-2xl lg:leading-10">
            Nossa função sempre foi nos comunicar com as pessoas de forma
            assertiva e criativa, saindo do padrão convencional. Através de
            campanhas, mostramos ao mundo que a criatividade é algo que precisa
            ser lapidado. Com nossa equipe, alcançamos sucesso, proporcionando a
            melhor experiência tanto para nossos clientes quanto para
            os clientes deles.
          </p>
          <b className="text-purple_700 text-xl italic lg:text-2xl">
            Por isso conectamos histórias e inspiramos resultados!
          </b>
        </div>
      </section>

      {/* <TopButton /> */}
    </main>
  );
};
