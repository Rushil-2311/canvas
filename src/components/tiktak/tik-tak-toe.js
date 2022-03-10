import Board from "./board";
import { useState } from "react";
import noLosBot3x3O from "./3x3-O-noLosbot";
import chicken from './images/Chicken.png';
import egg from './images/Egg.png'
// import './index.css';
// import chicken from "../images/Chicken.png";
// import egg from "../images/Egg.png";
// const noLosBot3x3O = require('./3x3-O-noLosbot');

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [squareImg, setSquareImg] = useState(null);
  const [chooseHuman, setChooseHuman] = useState("");
  var ddd;
  var abd;
  if (chooseHuman === "X") {
    ddd = "X";
    abd = "O";
  } else if(chooseHuman === 'O') {
    ddd = "O";
    abd = "X";
  }
  console.log(abd);
  console.log(ddd);

  const [xIsNext, setxIsNext] = useState(true);

  const handleClick = (i) => {
    const newHistory = history.slice();
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    const winner = calculateWinner(squares);

    if (winner) {
      // alert(`${winner} has won the Game`);
      return;
    }
    if (squares[i] != null) {
      return;
    }
    squares[i] = xIsNext ? ddd : "O";

    setHistory(newHistory.concat([{ squares: squares }]));

    setxIsNext(!xIsNext);

    setTimeout(() => {
      autoPlayBot(squares);
      console.log(squares);
    }, 500);
  };

  function autoPlayBot(squares) {
    const winner = calculateWinner(squares);
    if (winner) {
      if (winner === "Draw") {
        // alert('match Drawed');
        return;
      }
      // alert(`${winner} has won the Game`);
      return;
    }

    const botSquares = noLosBot3x3O(squares, history,abd);

    const newHistory = history.slice();

    setHistory(newHistory.concat([{ squares: botSquares }]));

    setxIsNext(true);
  }

  const undoBtn = () => {
    const newHistory = history.slice(0, -1);
    setHistory(newHistory);
    // setxIsNext(!xIsNext);
  };

  const newGameBtn = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setxIsNext(true);
    setChooseHuman("")
  };

  function calculateWinner(squares) {
    // console.log(squares);

    if (history.length === 1) {
      return null;
    }

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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log(squares[a]);
        return squares[a];
      }
    }

    var isEnded = true;
    console.log(squares);
    squares.forEach((square) => {
      if (square === null) {
        isEnded = false;
      }
    });

    if (isEnded) {
      return "Draw";
    }

    return null;
  }

  return chooseHuman ? (
    <div className="game">
      <Board
        squares={history[history.length - 1].squares}
        xIsNext={xIsNext}
        winner={calculateWinner(history[history.length - 1].squares)}
        onClick={handleClick}
        history
        newGameBtn={newGameBtn}
        squareImg={squareImg}
        setSquareImg={setSquareImg}
      />

      <div className="controller-btns">
        {history.length === 1 ? null : (
          <button className="undoButton" onClick={undoBtn}>
            undo
          </button>
        )}
        {/* {calculateWinner(history[history.length-1].squares) ?  <button onClick={newGameBtn}>New Game</button> : null} */}
      </div>
    </div>
  ) : (
    <div className="startBoard">
      <span>START NEW GAME AS: </span>
      <div className="startButtons">
        <button className="startButton" onClick={() => setChooseHuman("X")}>
          <img src={chicken} alt="chicken" />
        </button>
        <button className="startButton" onClick={() => setChooseHuman("O")}>
          <img src={egg} alt="egg" />
        </button>
      </div>
    </div>
  );
};

export default Game;
