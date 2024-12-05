import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { ObjetoProvider } from './views/CadastroRep/components/ObjectContext'; // Certifique-se de que o caminho está correto

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ObjetoProvider>
      <App />
    </ObjetoProvider>
  </React.StrictMode>
);

reportWebVitals();
