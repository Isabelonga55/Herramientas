import React from "react";
import styles from "./school.css";

const IaList = () => {
  const extensions = [
    {
      name: "Prettler",
      description: "Formatea el código según las reglas de cada lenguaje",
    },
    {
      name: "Live Share",
      description: "Permite editar y depurar el código en tiempo real con otro programador.",
    },
    {
      name: "GitLens",
      description: "Proporciona información sobre el control de versiones en el editor de código",
    },
    {
      name: "Polacode",
      description: "Genera un código de ejemplo para una API o función",
    },
    {
      name: "ESLint",
      description: "Detecta errores de sintaxis y estilo en código JavaScript y TypeScript",
    },
    {
      name: "Indent Rainbow",
      description: "Colorea los espacios de tabulación para ayudar a visualizar la estructura del código",
    },
    {
      name: "Live Server",
      description: "Crea un servidor local para que las páginas web se puedan visualizar en un navegador",
    },
    {
      name: "SVG",
      description: "Proporciona herramientas para trabajar con gráficos vectoriales SVG",
    },
    {
      name: "Just Files",
      description: "La extensión Just Files para Visual Studio Code agrega una nueva vista de contenedor para agregar los archivos que deseas ver. Esto permite personalizar tu espacio de trabajo sin afectar su configuración original1. Es una herramienta útil para gestionar y navegar a través de tus archivos de manera más eficiente.",
    },
  ];

  return (
    <table>
      <tr>
        <th>Extensión</th>
        <th>Descripción</th>
      </tr>
      {extensions.map((extension) => (
        <tr key={extension.name}>
          <td>{extension.name}</td>
          <td>{extension.description}</td>
        </tr>
      ))}
    </table>
  );
};

export default IaList;
