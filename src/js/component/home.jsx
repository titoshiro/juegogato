import React, { useState } from "react";
import { Game } from "./componentes/game.jsx";
import "./componentes/estilo.css";
import "./componentes/estiloGame.css";

//create your first component
const Home = () => {
  //
  const [player, setPlayer] = useState("X");

  const [tabla, setTabla] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [nombre1, setNombre1] = useState("");
  const [nombre2, setNombre2] = useState("");
  const [empate, setEmpate] = useState(false);

  const clicGato = (index) => {
    if (tabla[index] === null && !saberGanador(tabla)) {
      const newTabla = tabla.slice();
      newTabla[index] = player;
      setTabla(newTabla);

      setPlayer(player === "X" ? "O" : "X");
    }
    if (newTabla.every((cell) => cell !== null)) {
      setEmpate(true);
    }
  };
  const jugador1 = (event) => {
    setNombre1(event.target.value);
  };

  const jugador2 = (event) => {
    setNombre2(event.target.value);
  };
  const saberGanador = (tabla) => {
    const Ganador = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [2, 5, 8],
      [1, 4, 7],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combinacion of Ganador) {
      const [a, b, c] = combinacion;
      if (tabla[a] && tabla[a] === tabla[b] && tabla[a] === tabla[c]) {
        return tabla[a];
      }
    }
    if (tabla.every((cell) => cell !== null)) {
      return "Empate";
    }

    return null;
  };

  const ganador = saberGanador(tabla);

  const reiniciarPartida = () => {
    window.location.reload();
  };

  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Juguemos un Gato #</h1>
      <h3>
        Turno de "{player}": {player === "X" && nombre1}
        {player === "O" && nombre2}
      </h3>
      <label>
        Nombre del Jugador X:
        <br />
        <input type="text" value={nombre1} onChange={jugador1} />
      </label>
      <br />
      <label>
        Nombre del Jugador O:
        <br />
        <input type="text" value={nombre2} onChange={jugador2} />
      </label>
      <br />
      <br />
      <Game tabla={tabla} clicGato={clicGato} player={player} />
      <h1>
        {ganador === "X" && `${nombre1} es el Ganador`}
        {ganador === "O" && `${nombre2} es el Ganador`}
        {ganador === "Empate" && "¡Es un empate!"}
      </h1>
      <button onClick={reiniciarPartida}>Reiniciar</button>
    </div>
  );
};

export default Home;
