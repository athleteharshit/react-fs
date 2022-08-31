import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Providers from './setup/provider/provider';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
