import { createContext, useContext, useState, useEffect } from "react"

export const GifContext = createContext({})

export function GifProvider({ children }) {
  const [gifFinished, setGifFinished] = useState(false)

  return <GifContext.Provider value={{ gifFinished, setGifFinished }}>{children}</GifContext.Provider>
}

export function useGifState() {
  const context = useContext(GifContext)

  return context
}
