import React, { useEffect, useState } from "react";
import styles from "./Board.module.css";
import Square from "../components/Square";
type Props = {};

const Board = (props: Props) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState(null);
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
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const reset = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "O" : "X");
  };
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <span className={styles["player_" + currentPlayer.toLowerCase()]}>
          {" "}
          {currentPlayer}{" "}
        </span>{" "}
        Turn
      </p>
      <div className={styles.grid}>
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <Square
              winner={winner}
              key={i}
              onClick={() => {
                return setSquareValue(i);
              }}
              value={squares[i]}
            />
          ))}
      </div>
      <button className={styles.reset} onClick={reset}>Reset</button>
    </div>
  );
};

export default Board;
