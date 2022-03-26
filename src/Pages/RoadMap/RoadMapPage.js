import React from 'react';
import RoadMap from '../../Components/Roadmap/RoadMap';
import Nav from '../../Components/Shared/nav';

export const testData = {
  name: "Ingeniería de Software",
  roadMap: [
    {
      id: "1",
      content: "Semestre 1",
    },
    {
      id: "2",
      content: "Semestre 2",
    },
    {
      id: "3",
      content: "Intro a la Programación",
      link: "1",
    },
    {
      id: "4",
      content: "Base de Datos I",
      link: "1",
    },
    {
      id: "5",
      content: "Semestre 3",
    },
    {
      id: "6",
      content: "Semestre 4",
    },
    {
      id: "7",
      content: "Desarrollo de Sistemas Web",
      link: "6"
    },
    {
      id: "8",
      content: "Algebra Lineal",
      link: "5",
    },
    {
      id: "9",
      content: "Algoritmos",
      link: "5"
    },
    {
      id: "10",
      content: "Matemáticas discretas",
      link: "1"
    },
    {
      id: "11",
      content: "Programación Orientada a Objetos",
      link: "2"
    },
    {
      id: "12",
      content: "Semestre 5",
    },
    {
      id: "13",
      content: "Semestre 6",
    },
    {
      id: "14",
      content: "Semestre 7",
    },
    {
      id: "15",
      content: "Redes II",
      link: "6",
    },
    {
      id: "16",
      content: "Base de Datos II",
      link: "6",
    },
    {
      id: "17",
      content: "Estructuras de Datos",
      link: "6",
    },
    {
      id: "18",
      content: "Análisis y Diseño de Sistemas",
      link: "6",
    },
    {
      id: "19",
      content: "Teoría de la Computación",
      link: "6",
    }

  ]
};


const RoadMapPage = () => {
  return (
    <div>
      <Nav />
      <RoadMap data={testData} />
    </div>
  );
};

export default RoadMapPage;
