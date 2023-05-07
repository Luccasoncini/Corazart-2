import React from "react"
import CorazartGif from "../assets/gif/corazart.gif"
import { InstagramIcon } from "../assets/svg/instagram"

export const Home = () => {
  return (
    <div className="h-[100vh] w-full flex justify-start items-center ">
      <a
        className="group flex justify-center items-center absolute gap-2 rotate-[270deg] cursor-pointer z-20 left-[-3rem] lg:left-4"
        href="https://www.instagram.com/corazart_/"
      >
        <h4 className="font-montserrat text-white font-semibold text-3xl m-0 relative ease-in duration-200 group-hover:left-[-0.5rem] ">
          siga-nos
        </h4>
        <InstagramIcon />
      </a>
      <div className="w-full h-full lg:h-[100vh]">
        <img src={CorazartGif} alt="CorazartGif" />
      </div>
    </div>
  )
}
