import React from "react"
import CorazartGif from "../assets/gif/corazart.gif"
import { InstagramIcon } from "../assets/svg/instagram"
import animationData from "../assets/lottie/homeAnimation.json"
import Lottie from "react-lottie"
import { useGifState } from "../hooks/useGifState"
import { motion } from "framer-motion"

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

  return (
    <div className="h-[100vh] w-full flex justify-start items-center">
      <motion.a
        initial={{ x: -200, opacity: 0, rotate: "270deg" }}
        animate={gifFinished ? animation : ""}
        className="group flex justify-center items-center absolute gap-2 cursor-pointer z-20 left-[-3rem] lg:left-4"
        href="https://www.instagram.com/corazart_/"
      >
        <h4 className="font-montserrat text-white font-semibold text-3xl m-0 relative ease-in duration-200 group-hover:left-[-0.5rem] ">
          siga-nos
        </h4>
        <InstagramIcon />
      </motion.a>
      <div className="w-full h-full">
        {/* <img src={CorazartGif} alt="CorazartGif" /> */}
        <Lottie options={defaultOptions} eventListeners={eventListeners} />
      </div>
    </div>
  )
}
