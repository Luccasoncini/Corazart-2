import { createContext, useContext, useState, useEffect } from "react"

export const MenuContext = createContext({})

export function MenuProvider({ children }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  useEffect(() => {
    // ** Obtém a tag body
    const element = window.document.body

    // ** Remove as classes da tag body ao montar o componente
    element.classList.remove("overflow")

    // ** Se a variável isMenuOpened for verdadeira, adiciona a classe overflow
    if (isMenuOpened == true) {
      element.classList.add("overflow")
    }
  }, [isMenuOpened])

  return <MenuContext.Provider value={{ isMenuOpened, setIsMenuOpened }}>{children}</MenuContext.Provider>
}

export function useMenu() {
  const context = useContext(MenuContext)

  return context
}
