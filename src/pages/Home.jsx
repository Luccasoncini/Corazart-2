import React from "react"
import CorazartGif from "../assets/gif/corazart.gif"
import { InstagramIcon } from "../assets/svg/instagram"
import animationData from "../assets/lottie/homeAnimation.json"
import Lottie from "react-lottie"
import { useGifState } from "../hooks/useGifState"
import { motion } from "framer-motion"

import AnacTrem from "../assets/instagramImgs/anacTrem.jpeg"
import EstacaoEspacial from "../assets/instagramImgs/estacaoEspacial.jpeg"
import EstacaoEspacial2 from "../assets/instagramImgs/estacaoEspacial2.jpeg"
import FogueteNoSol from "../assets/instagramImgs/fogueteNoSol.jpeg"
import MulherComEspada from "../assets/instagramImgs/mulherComEspada.jpeg"
import Tempo from "../assets/instagramImgs/tempo.jpeg"

import CorazartAnimation from "../assets/video/corazartAnimation.mp4"

import CorazartInstaLogo from "../assets/img/logoInsta.jpg"
import { HeartIcon } from "../assets/svg/heart"
import { CommentIcon } from "../assets/svg/comment"
import { FavoriteFlagIcon } from "../assets/svg/favoriteFlag"

export const Home = () => {
  const { gifFinished, setGifFinished } = useGifState()

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  const eventListeners = [
    {
      eventName: "complete",
      callback: () => setGifFinished(true)
    }
  ]

  const animation = {
    x: [-200, 100, 0],
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }

  const cardsImgs = [
    {
      img: AnacTrem
    },
    {
      img: EstacaoEspacial
    },
    {
      img: EstacaoEspacial2
    },
    {
      img: FogueteNoSol
    },
    {
      img: MulherComEspada
    },
    {
      img: Tempo
    },
    {
      img: FogueteNoSol
    },
    {
      img: MulherComEspada
    },
    {
      img: Tempo
    }
  ]

  return (
    <main>
      <section className="h-[100vh] w-full flex justify-start items-center px-4 lg:px-20 relative">
        <motion.a
          initial={{ x: -200, opacity: 0, rotate: "270deg" }}
          animate={gifFinished ? animation : ""}
          className="group flex justify-center items-center absolute gap-2 cursor-pointer z-20 left-0"
          href="https://www.instagram.com/corazart_/"
        >
          <h4 className="font-montserrat text-white font-semibold text-3xl m-0 relative ease-in duration-200 group-hover:left-[-0.5rem] ">
            siga-nos
          </h4>
          <InstagramIcon />
        </motion.a>
        <div className="w-full h-full absolute left-0 top-0">
          <video onEnded={() => setGifFinished(true)} autoPlay>
            <source src={CorazartAnimation} type="video/mp4" />
          </video>
          {/* <Lottie options={defaultOptions} eventListeners={eventListeners} /> */}
          {/* <img src={CorazartGif} alt="CorazartGif" /> */}
        </div>
      </section>
      <section className="h-[70vh] w-full flex flex-nowrap justify-start items-center px-4 lg:pl-20 lg:pr-0 bg-gray_500 overflow-hidden">
        <div className="w-full lg:w-3/5">
          <h2 className="text-purple_700 text-6xl font-bold font-montserrat">
            <i>
              O Design é o primeiro <br /> estágio da paixão entre
              <br />
              <span className="font-light">seu consumidor e sua marca!</span>
            </i>
            <br />
            <span className="font-light text-4xl"> - Flavia Barbieri</span>
          </h2>
        </div>
        <div className="w-full h-full lg:w-2/5 relative overflow-scroll border border-black">
          <div className="w-full h-full lg:w-[60vw] lg:h-[100vh] absolute left-0">
            <div className="w-full h-full flex justify-center items-center flex-wrap gap-8 ">
              {cardsImgs.map(({ img }) => {
                return (
                  <div className="w-[325px] h-[425px] flex flex-col justify-center items-center px-2 bg-gray_100 rounded-lg shadow-lg shadow-black_100">
                    <div className="w-full px-3 flex justify-start items-center py-3">
                      <img
                        src={CorazartInstaLogo}
                        alt="corazartInstaLogo"
                        className="w-10 h-10 rounded-full mr-2 border-[3px] border-red-600"
                      />
                      <span className="text-base font-bold m-0">corazart_</span>
                    </div>
                    <img className="w-full h-[300px] object-cover rounded-lg" src={img} />
                    <div className="w-full px-3 flex justify-between items-center py-5">
                      <div className="flex justify-center items-center text-black gap-2">
                        <span className="text-red-600">
                          <HeartIcon />
                        </span>
                        <CommentIcon /> view all comment
                      </div>
                      <FavoriteFlagIcon />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
