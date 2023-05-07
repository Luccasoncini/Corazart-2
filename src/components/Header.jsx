import React, { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { LogoCorazartIcon } from "../assets/svg/logo"
import { useMenu } from "../hooks/useMenu"
import { ContatoIcon } from "../assets/svg/contato"
import { useGifState } from "../hooks/useGifState"
import { motion } from "framer-motion"

export const Header = () => {
  const { gifFinished, setGifFinished } = useGifState()
  const { isMenuOpened, setIsMenuOpened } = useMenu()
  const location = useLocation()
  const [isHomePage, setIsHomePage] = useState(true)

  useEffect(() => {
    if (location.pathname === "/home" || location.pathname === "/") {
      setIsHomePage(true)
    } else {
      setIsHomePage(false)
    }
  }, [location])

  const onClickMenu = () => {
    setIsMenuOpened(!isMenuOpened)
  }

  const onClickLink = () => {
    setIsMenuOpened(false)
  }

  const menuLinks = [
    {
      texto: "Home",
      link: "/home"
    },

    {
      texto: "Sobre",
      link: "/about"
    },
    {
      texto: "Portifólio",
      link: "/portifolio"
    }
  ]

  const animation = {
    y: [-200, 100, 0],
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }

  return (
    <header
      className={`flex justify-between items-center fixed top-0 left-0 h-[75px] w-full px-4 z-30 lg:h-auto lg:py-5 lg:px-20
      ${isHomePage ? (isMenuOpened ? "bg-purple-900" : "bg-transparent") : "bg-purple-900"}`}
    >
      <Link to="/home" className="w-[150px] lg:w-[235px]">
        <motion.span initial={{ y: -200, opacity: 0 }} animate={gifFinished ? animation : ""} className="block">
          <LogoCorazartIcon />
        </motion.span>
      </Link>

      <div className="lg:w-[60%] lg:h-full lg:flex lg:justify-between lg:items-center">
        <div
          className="flex justify-center items-center flex-col relative w-[17.5px] h-5 lg:hidden"
          onClick={onClickMenu}
        >
          <span
            className={
              isMenuOpened
                ? "w-full h-[2px] my-[2px] bg-white ease-in duration-500 absolute rotate-[135deg] lg:rotate-0 lg:relative"
                : "w-full h-[2px] my-[2px] bg-white ease-in duration-500"
            }
          ></span>
          <span
            className={
              isMenuOpened
                ? "w-full h-[2px] my-[2px] bg-white ease-in duration-500 hidden"
                : "w-full h-[2px] my-[2px] bg-white ease-in duration-500"
            }
          ></span>
          <span
            className={
              isMenuOpened
                ? "w-full h-[2px] my-[2px] bg-white ease-in duration-500 absolute rotate-[225deg] lg:rotate-0 lg:relative"
                : "w-full h-[2px] my-[2px] bg-white ease-in duration-500"
            }
          ></span>
        </div>
        <div
          className={
            isMenuOpened
              ? "block fixed top-[75px] w-full bg-purple-900 h-navigation right-0 ease-in duration-500 p-9 z-30 lg:relative lg:top-0 lg:right-0 lg:bg-transparent lg:h-full lg:p-0 lg:flex lg:justify-end lg:items-center "
              : "fixed top-[75px] w-full bg-purple-900 h-calc(100% - 50px) right-[-100vw] ease-in duration-500 p-9 z-30 lg:relative lg:top-0 lg:right-0 lg:bg-transparent lg:h-full lg:p-0 lg:flex lg:justify-end lg:items-center"
          }
        >
          <nav className="relative h-full">
            <ul className="lg:flex lg:justify-center lg:items-center lg:w-full lg:h-full gap-6">
              {menuLinks.map(({ texto, link }) => {
                return (
                  <motion.li
                    key={texto + link}
                    initial={{ y: -200, opacity: 0 }}
                    animate={gifFinished ? animation : ""}
                  >
                    <NavLink
                      onClick={() => onClickLink()}
                      to={link}
                      className="text-white pr-3 font-normal text-3xl font-inter relative after:content-[''] after:h-[1px] after:w-full after:absolute after:left-0 after:bottom-[-5px] after:bg-white
                      "
                    >
                      {texto}
                    </NavLink>
                  </motion.li>
                )
              })}

              <motion.li initial={{ y: -200, opacity: 0 }} animate={gifFinished ? animation : ""}>
                <NavLink
                  onClick={() => onClickLink()}
                  to="/contact"
                  className="bg-white px-8 py-2 flex justify-center text-dark_purple_900 items-center rounded-2xl border border-white ease-in duration-200 hover:bg-transparent hover:text-white"
                >
                  <ContatoIcon />
                </NavLink>
              </motion.li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
