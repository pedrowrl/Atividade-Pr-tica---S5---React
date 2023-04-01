// Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Pedro Wilson Rodrigues de Lima 
//DATA 01/04/2023


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SimpsonsCities() {
  return (
    <div className="container">
      <h1><strong>Cidades que já apareceram em Os Simpsons:</strong></h1>
      <div className="row">
        <div className="col-md-4">
          <h2><strong>Springfield</strong></h2>
          <img src="springfield.jpg" alt="Imagem de Springfield" className="img-fluid" />
          <p>Essa é a cidade em que mora a família Simpson.</p>
        </div>
        <div className="col-md-4">
          <h2><strong>Shelbyville</strong></h2>
          <img src="shelbyville.jpg" alt="Imagem de Shelbyville" className="img-fluid" />
          <p>As pessoas de Shelbyville não são aparentemente mais inteligentes ou menos agressivas que as pessoas de Springfield, como foi notado no episódio Homer ama Flanders, em que é citado que pessoas de Shelbyville sabotaram o reservatório de água de Springfield como vingança por pessoas de Springfield terem incendiado a prefeitura de Shelbyville.</p>
        </div>
        <div className="col-md-4">
          <h2><strong>Ogdenville</strong></h2>
          <img src="ogdenville.jpg" alt="Imagem de Ogdenville" className="img-fluid" />
          <p>Ogdenville é a cidade que fica no estado de Takoma, vizinha da cidade de Springfield, e foi a primeira a ser mencionada por Lyle Lanley onde ele já construiu um de seus monotrilhos no episódio Marge contra o monotrilho.</p>
        </div>
      </div>
    </div>
  );
}

export default SimpsonsCities;
