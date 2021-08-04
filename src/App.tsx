import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppProvider from "./hooks";
import GlobalStyle from "./styles/GlobalStyle";

import Routes from "./routes";

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Routes />
      </AppProvider>
    </BrowserRouter>
  </>
);

export default App;
