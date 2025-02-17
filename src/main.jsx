import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

// Componentes puros: Los componentes sólo deben retornar su JSX 
// sin generar cambios en cualquier variable u objeto externo con
//  existencia previa a la renderización del componente.

root.render(
  <React.StrictMode> {/*Modo estricto: llama a la función de cada componente dos veces*/}
    <App />
  </React.StrictMode>
);
