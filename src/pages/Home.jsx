import { Fragment, useRef, useEffect, useState } from "react";

import { InstagramIcon } from "../assets/svg/instagram";
import instagramCards from "../assets/img/instagramcards.png";
import Borboleta from "../assets/img/Borboleta.png";
import Crt from "../assets/img/Crt.png";
import Performance from "../assets/img/Performance.png";
import framefinal from "../assets/img/framefinal.png";
import Festpan from "../assets/img/festpan.png";
import Nestle from "../assets/img/nestle.png";

import CorazartAnimation from "../assets/video/corazartAnimation.mp4";

import { motion } from "framer-motion";

import { Faq } from "../components/faq";
import { TopButton } from "../components/TopButton";

import { Play } from "phosphor-react";

import { usePlayButtonState } from "../hooks/usePlayButtonState";
import { useGifState } from "../hooks/useGifState";

export const Home = () => {
  const { gifFinished, setGifFinished } = useGifState();
  const { playButtonIsVisible, setPlayButtonIsVisible } =
    usePlayButtonState(true);

  const videoRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.title = "Coraz`art | Home";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const verificaTipoDispositivo = () => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      setIsMobile(mediaQuery.matches);
    };

    window.addEventListener("resize", verificaTipoDispositivo);

    return () => {
      window.removeEventListener("resize", verificaTipoDispositivo);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setPlayButtonIsVisible(false);
      setGifFinished(true);
    }
  }, [isMobile]);

  const animation = {
    x: [-200, 100, 0],
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  };

  useEffect(() => {
    if (gifFinished) setPlayButtonIsVisible(false);
  });

  const playButton = () => {
    videoRef.current.play();
    setPlayButtonIsVisible(false);
  };

  const skipVideo = () => {
    const video = videoRef.current;
    video.currentTime = video.duration;
    video.play();
    setPlayButtonIsVisible(false);
    setGifFinished(true);
  };

  return (
    <main className="flex flex-wrap justify-center items-center w-full">
      <section className="h-[100vh] w-full flex justify-center items-center relative bg-slate-600 hidden lg:flex">
        <motion.a
          initial={{ x: -200, opacity: 0, rotate: "270deg" }}
          animate={gifFinished ? animation : ""}
          className="group flex gap-2 cursor-pointer justify-center items-center  z-20 left-[-55px] absolute lg:left-2"
          href="https://www.instagram.com/corazart_/"
          target="_blank"
        >
          <h4 className="font-montserrat text-white font-semibold text-3xl m-0 relative ease-in duration-200 group-hover:left-[-0.5rem] ">
            siga-nos
          </h4>
          <InstagramIcon />
        </motion.a>
        <div className="w-full h-full absolute left-0 top-0 flex justify-center items-center overflow-hidden">
          {gifFinished ? (
            <img
              src={framefinal}
              className="lg:max-w-[145%] xxl:max-w-none xxl:w-full"
            />
          ) : (
            <video
              className="absolute h-auto max-w-none xl:h-auto xl:w-full"
              onEnded={() => setGifFinished(true)}
              ref={videoRef}
            >
              <source src={CorazartAnimation} type="video/mp4" />
            </video>
          )}
        </div>
        {playButtonIsVisible && (
          <div className="flex flex-col justify-center items-center absolute w-auto gap-5">
            <button className="text-white font-atari text-lg">
              Aperte o botao para iniciar
            </button>
            <button
              className="rounded-full  bg-[#41416f] p-16 border-2 border-white text-white"
              onClick={() => playButton()}
            >
              <Play size={32} />
            </button>
            <button className="text-white" onClick={() => skipVideo()}>
              pular
            </button>
          </div>
        )}
      </section>

      <section className="h-[100vh] w-full flex justify-center items-center relative lg:hidden">
        <div className="w-full h-full absolute left-0 top-0 bg-home bg-cover bg-no-repeat flex justify-start items-center">
          <h3 className="text-white font-bold text-6xl ps-12">
            Olá, <br />
            somos os <br /> engenheiros <br /> do seu <br /> projeto!
          </h3>
        </div>
      </section>

      {gifFinished && (
        <Fragment>
          <section className="w-full flex-col flex justify-start items-center bg-gray_500 overflow-hidden lg:pl-20 lg:pr-0 lg:flex-row">
            <div className=" hidden w-full h-full lg:w-2/5 xxl:w-3/6 lg:order-2 lg:block">
              <img
                src={instagramCards}
                alt="Cards do instagram com trabalhos do Corazart"
                className="w-full h-full"
              />
            </div>
            <div className="w-full px-4 py-10 lg:w-3/5  xxl:w-3/6 lg:order-1 lg:px-0">
              <h2 className="text-purple_700 text-3xl lg:text-4xl xlg:text-5xl xxl:text-6xl font-bold font-montserrat">
                <i>
                  O Design é o primeiro <br /> estágio da paixão entre
                  <br />
                  <span className="font-light">
                    seu consumidor e sua marca!
                  </span>
                </i>
                <br />
                <span className="font-light text-2xl lg:text-3xl  xlg:text-4xl">
                  {" "}
                  - Flavia Barbieri
                </span>
              </h2>
            </div>
          </section>
          <section className="w-full bg-gradient-to-r from-purple_700 to-purple_400 flex flex-col items-start justify-center text-white px-4 py-10 lg:px-20">
            <h4 className="text-3xl lg:text-4xl">Coraz'art:</h4>
            <small className="text-lg block mb-7 font-light">
              substantivo:
            </small>
            <p className="text-xl xlg:text-3xl">
              uma expressão que denota imaginação, inovação e excelência na
              criação. Refere-se a um grupo ou entidade que se destaca pela sua
              capacidade de trazer emoções, originalidade e habilidade criativa
              para seus projetos e atividades.
            </p>
          </section>
          <div className="w-full bg-fundoultimassecoes bg-no-repeat bg-cover h-full">
            <section className="w-full flex justify-center items-center flex-col px-4 py-10 lg:px-20 lg:flex-row gap-3">
              <div className="w-full hidden lg:block lg:w-3/5">
                <b className="text-purple_700 text-2xl">
                  Nosso design não é padronizado
                </b>
                <h2 className="bg-gradient-to-r from-purple_700 to-purple_400 bg-clip-text  text-transparent text-4xl font-light xlg:text-7xl xl:text-8xl">
                  Ele é especial, <br className="hidden lg:block" />
                  pois <br className="lg:hidden" /> cada projeto{" "}
                  <br className="hidden lg:block" />
                  são{" "}
                  <b>
                    {" "}
                    novos sonhos <br className="hidden lg:block" /> se
                    realizando{" "}
                  </b>
                </h2>
              </div>
              <div className="w-full lg:w-2/5">
                <img src={Borboleta} alt="" className="w-full" />
              </div>
            </section>
            <Faq />
            {/* <section className="w-full flex justify-center items-center flex-col px-4 py-10 gap-3 lg:px-20 lg:flex-row lg:justify-between ">
            <div className="w-full lg:w-5/7 flex justify-start items-center">
              <img src={Lampada} alt="lampada" className="w-full" />
            </div>
            <div className="w-full lg:w-2/5 flex flex-col justify-between items-center gap-3 xl:gap-8">
              <button className="cursor-default block font-bold text-white bg-gradient-to-r from-purple_700 to-purple_400 w-full rounded-md text-xl py-3 xl:text-6xl xl:h-[100px] xl:max-w-[467px] ">Planejar</button>
              <button className="cursor-default block font-bold text-white bg-gradient-to-r from-purple_700 to-purple_400 w-full rounded-md text-xl py-3 xl:text-6xl xl:h-[100px] xl:max-w-[467px] ">Produzir</button>
              <button className="cursor-default block font-bold text-white bg-gradient-to-r from-purple_700 to-purple_400 w-full rounded-md text-xl py-3 xl:text-6xl xl:h-[100px] xl:max-w-[467px] ">Posicionar</button>
            </div>
            
          </section> */}
            <section className="w-full flex justify-center items-stretch flex-col px-4 py-10 lg:px-20 lg:flex-row gap-3">
              <div className="flex justify-center items-end gap-3 w-full lg:w-1/2">
                <div className="w-2/3 aspect-square bg-purple_700 rounded-3xl flex justify-center items-center">
                  <img
                    src={Festpan}
                    alt="Logo Festpan"
                    className="w-2/4 object-contain"
                  />
                </div>

                <div className="w-1/3 flex flex-col justify-between items-center h-full">
                  <div className="w-full flex flex-col ">
                    <div className="w-full flex gap-3 justify-start items-start">
                      <div className="w-1/2 aspect-square bg-purple_500 rounded-xl"></div>
                      <div className="w-1/2 aspect-square bg-transparent"></div>
                    </div>
                    <div className="w-full flex gap-3 justify-start items-start">
                      <div className="w-1/2 aspect-square bg-transparent"></div>
                      <div className="w-1/4 aspect-square bg-purple_700 rounded-lg"></div>
                    </div>
                  </div>

                  <div className="w-full aspect-square bg-purple_600 rounded-2xl flex justify-center items-center">
                    <img
                      src={Nestle}
                      alt="Performance"
                      className="w-3/4 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 w-full lg:w-1/2">
                <div className="w-5/12 flex justify-center items-center self-center">
                  <div className="w-full bg-purple_300 aspect-square rounded-xl flex justify-center items-center">
                    <img
                      src={Performance}
                      alt="Performance"
                      className="w-3/4 object-contain"
                    />
                  </div>
                </div>
                <div className="w-7/12 flex justify-center items-end self-end">
                  <div className="w-full bg-purple_700 aspect-square rounded-3xl flex justify-center items-center">
                    <img
                      src={Crt}
                      alt="Logo CRT"
                      className="w-2/4  object-contain"
                    />
                  </div>
                </div>
              </div>
            </section>
            <TopButton />
          </div>
        </Fragment>
      )}
    </main>
  );
};
