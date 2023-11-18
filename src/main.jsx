import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { MenuProvider } from "./hooks/useMenu.jsx";
import { GifProvider } from "./hooks/useGifState.jsx";
import { PlayButtonStateProvider } from "./hooks/usePlayButtonState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PlayButtonStateProvider>
    <GifProvider>
      <MenuProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MenuProvider>
    </GifProvider>
  </PlayButtonStateProvider>
);
