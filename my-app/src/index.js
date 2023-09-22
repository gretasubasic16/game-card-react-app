import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GamesProvider } from "./context"



ReactDOM.render(
  <React.StrictMode>
    <GamesProvider>
    <App />
    </GamesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

