import { useState } from "react";
import chicken from "./images/Chicken.png";
import './index.css';
import egg from "./images/Egg.png";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {/* {props.value} */}
      {props.value && (
        <img
          src={props.value === "X" ? chicken : egg}
          alt="img"
          className="chicken"
        />
      )}
    </button>
  );
}

function renderSquare(i, props, abd) {
  return (
    <Square
      value={props.squares[i]}
      onClick={() => props.onClick(i)}
      squareImg={props.squareImg}
      setSquareImg={props.setSquareImg}
    />
  );
}

function statusUpdate(props, abd) {
  // console.log("new game btn", newGameBtn);
  let status = "";
  if (props.winner) {
    if (props.winner === "Draw") {
      status = "Draw! Well played";
    } else {
      status = "Winner is : ";
    }
  }
  // else{
  //     status = "Next Player : "
  //     status+= props.xIsNext ? 'X' : 'O';
  // }

  return status ? (
    <div className="next-player">
      <p>{status}</p>
      {props.winner !== "Draw" && (
        <img
          src={props.winner === "X" ? chicken : egg}
          alt="img"
          className="chicken"
        />
      )}
      <br />
      <button onClick={props.newGameBtn} className="okButton">ok</button>
    </div>
  ) : null;
}

const Board = (props) => {
  return (
    <div className="game-board">
      <div className="one-row">
        {renderSquare(0, props)}
        {renderSquare(1, props)}
        {renderSquare(2, props)}
      </div>
      <div className="one-row">
        {renderSquare(3, props)}
        {renderSquare(4, props)}
        {renderSquare(5, props)}
      </div>
      <div className="one-row">
        {renderSquare(6, props)}
        {renderSquare(7, props)}
        {renderSquare(8, props)}
      </div>

      {statusUpdate(props)}
      {/* <p>Next Player : {props.xIsNext ? 'X' : 'O'}</p> */}
    </div>
  );
};

export default Board;
