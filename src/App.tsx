import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./styles/global";

import AppProvider from "./hooks/index";

import Routes from "./routes";

const App: React.FC = () => (
    <Router>
        <GlobalStyle />
        <AppProvider>
            <Routes />
        </AppProvider>
   
    </Router>
);

export default App;
