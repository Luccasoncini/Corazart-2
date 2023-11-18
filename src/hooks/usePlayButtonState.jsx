import { createContext, useContext, useState, useEffect } from "react";

export const PlayButtonStateContext = createContext({});

export function PlayButtonStateProvider({ children }) {
  const [playButtonIsVisible, setPlayButtonIsVisible] = useState(true);

  return (
    <PlayButtonStateContext.Provider
      value={{ playButtonIsVisible, setPlayButtonIsVisible }}
    >
      {children}
    </PlayButtonStateContext.Provider>
  );
}

export function usePlayButtonState() {
  const context = useContext(PlayButtonStateContext);

  return context;
}
