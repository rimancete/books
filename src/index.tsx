import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { env } from './environments';
import { Home } from './Pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={env.ROUTER_UTILS.base.login} element={<App />} />
          <Route path={env.ROUTER_UTILS.base.home} element={<Home />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
