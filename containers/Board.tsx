import React, { useEffect, useState } from "react";
import styles from "./Board.module.css";
import Square from "../components/Square";
export type Player = "X" | "O" | "BOTH" | null;

const calcWinner = (squares: Player[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<Player>(null);

  useEffect(() => {
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "O" : "X");
  }, []);

  const setSquareValue = (index: number) => {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares([...newData]);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const reset = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "O" : "X");
  };

  useEffect(() => {
    const win = calcWinner(squares);
    if (win) {
      setWinner(win);
    }
    if (!win && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  }, [squares]);

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {!winner && (
          <>
            <span className={styles["player_" + currentPlayer.toLowerCase()]}>
              {currentPlayer}{" "}
            </span>
            Turn
          </>
        )}
        {winner && ["X", "O"].includes(winner) && (
          <>
            Congratulations to
            <span
              className={
                currentPlayer === "X" ? styles.player_o : styles.player_x
              }
            >
              {" "}
              {currentPlayer !== "X" ? "X" : "O"}
            </span>
            🎉
          </>
        )}
        {winner === "BOTH" && "Drew ⚖️" }
      </p>
      <div className={styles.grid}>
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <Square
              winner={winner}
              key={i}
              onClick={() => {
                !winner && setSquareValue(i);
              }}
              value={squares[i]}
            />
          ))}
      </div>
      <button className={styles.reset} onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Board;
