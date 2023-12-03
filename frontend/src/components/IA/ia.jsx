import React from "react";
import styles from "./ia.css";

const IaList = () => {
  const extensions = [
    {
      name: <a href="https://openai.com/language-models/gpt-3/" target="_blank" rel="noopener noreferrer" style={{ color: '#0062cc', fontWeight: 'bold' }}>GPT-3</a>,
      description: "Una herramienta de IA generativa que puede crear texto, traducir idiomas, escribir distintos tipos de contenido creativo y responder a las preguntas de manera informativa.",
    },
    {
      name: <a href="https://www.bardlabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1d2b53', fontWeight: 'bold' }}>Bard</a>,
      description: "Este es un chatbot que tiene las mismas funciones que GPT-3, LaMDA y Bing.",
    },
    {
      name: <a href="https://www.bing.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#2d89ef', fontWeight: 'bold' }}>Bing</a>,
      description: "Es similar a todas las IAs anteriores.",
    },
    {
      name: <a href="https://www.copy.ai/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff006a', fontWeight: 'bold' }}>Copy.ai</a>,
      description: "Una herramienta que utiliza inteligencia artificial para generar contenido de marketing, como descripciones de productos, anuncios y correos electrónicos.",
    },
    {
      name: <a href="https://www.hotpot.ai/" target="_blank" rel="noopener noreferrer" style={{ color: '#f76d57', fontWeight: 'bold' }}>Hotpot.ai</a>,
      description: "Una herramienta que utiliza inteligencia artificial para crear diseños de logotipos, presentaciones y otros materiales de marketing.",
    },
    {
      name: <a href="https://www.myheritage.com/deep-nostalgia" target="_blank" rel="noopener noreferrer" style={{ color: '#6495ed', fontWeight: 'bold' }}>MyHeritage</a>,
      description: "Una herramienta que utiliza inteligencia artificial para mejorar la calidad de las fotos antiguas y colorearlas.",
    },
    {
      name: <a href="https://pfpmaker.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#9b59b6', fontWeight: 'bold' }}>Pfpmaker</a>,
      description: "Una herramienta con inteligencia artificial que crea diseños de presentaciones y folletos.",
    },
    {
      name: <a href="https://www.brandmark.io/" target="_blank" rel="noopener noreferrer" style={{ color: '#1abc9c', fontWeight: 'bold' }}>Brandmark.io</a>,
      description: "Esta inteligencia artificial crea diseños de logotipos personalizados.",
    },
    {
        name: <a href="https://lexica.art/" target="_blank" rel="noopener noreferrer" style={{ color: '#Ffffff', fontWeight: 'bold' }}>Lexica</a>,
        description: "Lexica es una herramienta de inteligencia artificial para crear imagenes nuevas o a partir de alguna que le quieras añadir a tu prompt.",
      },
      {
        name: <a href="https://ideogram.ai/t/trending" target="_blank" rel="noopener noreferrer" style={{ color: '#222222', fontWeight: 'bold' }}>Ideogram.ai</a>,
        description: "Ideogram AI es un sistema de inteligencia artificial que puede generar imágenes con descripciones de texto. Puede crear texto coherente con la imagen generada. Puedes usarlo para crear imágenes con tu nombre, una palabra o una frase.",
      },
      {
        name: <a href="" target="_blank" rel="noopener noreferrer" style={{ color: '#1abc9c', fontWeight: 'bold' }}></a>,
        description: "Esta inteligencia artificial crea diseños de logotipos personalizados.",
      },
      {
        name: <a href="https://www.promeai.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#109DFA', fontWeight: 'bold' }}>PromeAI.com</a>,
        description: "PromeAI es una herramienta de asistente de diseño impulsada por IA que proporciona un conjunto integral de soluciones para ayudar a los diseñadores a crear gráficos sorprendentes, videos y animaciones, tambien puedes utilizarla para pasar de un dibujo a una imagen con el estilo de tu preferencia",
      },
  ];

  return (
    <table>
      <tr>
        <th>Herramienta</th>
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
