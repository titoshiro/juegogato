import React from "react";
import { useState } from "react";

const Tabla = ({ clicGato, tabla, indexTabla }) => {
  return (
    <div onClick={() => clicGato(indexTabla)} className="Game-tablas">
      {tabla[indexTabla]}
    </div>
  );
};

const Game = ({ clicGato, tabla }) => {
  return (
    <section className="Game">
      <Tabla tabla={tabla} clicGato={clicGato} indexTabla={0} />
      <Tabla tabla={tabla} clicGato={clicGato} indexTabla={1} />
      <Tabla tabla={tabla} clicGato={clicGato} indexTabla={2} />
      <Tabla tabla={tabla} clicGato={clicGato} indexTabla={3} />
      <Tabla tabla={tabla} clicGato={clicGato} indexTabla={4} />
      <Tabla tabla={tabla} clicGato={clicGato} indexTabla={5} />
      <Tabla tabla={tabla} clicGato={clicGato} indexTabla={6} />
      <Tabla tabla={tabla} clicGato={clicGato} indexTabla={7} />
      <Tabla tabla={tabla} clicGato={clicGato} indexTabla={8} />
    </section>
  );
};

export { Game };
