// src/main.jsx içeriği
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Eğer bir stil dosyanız varsa, onu da import etmelisiniz:
// import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
