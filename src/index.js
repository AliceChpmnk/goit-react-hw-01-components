import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#2a2a2a',
    white: '#FFFEFC',
    green: 'green',
    red: 'red',
    gray: '#808080',
    lightGray: '#F0F0F0',
    borderGray: '#bebebe',
    purple: '#6c7ae0',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
