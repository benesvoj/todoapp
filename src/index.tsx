import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";
import {GlobalStyle} from "./GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>
);

