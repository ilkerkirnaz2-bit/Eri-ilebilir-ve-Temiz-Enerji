import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Uygulamanın ana CSS dosyasını da buraya dahil etmemiz gerek
// Netlify'ın bu satırı bulması için
// import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
