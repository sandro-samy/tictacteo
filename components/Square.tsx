import React from "react";
import styles from "./Square.module.css";
type Player = string | null;

const Square = ({
  winner,
  value,
  onClick,
}: {
  winner: Player;
  value: Player;
  onClick: () => void;
}) => {
  if (!value) {
    return (
      <button
        onClick={onClick}
        disabled={Boolean(winner)}
        className={styles.square}
      />
    );
  }
  return (
    <button disabled className={`${styles.square} ${styles["square_"+value.toLowerCase()]}`}>
      {value}
    </button>
  );
};

export default Square;
