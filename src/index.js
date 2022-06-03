// importar libreria de React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Agarra un app que ya existe de REACT
// function App(){
//   return "Hola Mundo"
// }
import App from './App';

// mostrar la APP en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
