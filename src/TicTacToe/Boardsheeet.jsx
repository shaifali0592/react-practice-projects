import { useState } from "react";
import BoardColumn from "./BoardColumn";



function Boardsheeet() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isxturn, setXturn] = useState(true);
  console.log(state);

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    } else {
      const copystate = [...state];
      copystate[index] = isxturn ? "x" : "o";
      setState(copystate);
      setXturn(!isxturn);
    }

  }

  const checkWinner = () => {
    const winnerlogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let logic of winnerlogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }

    }
    return false;



  }

  const isWinner = checkWinner();
  const isdraw = !isWinner && state.every(cell => cell !==null);
  const handleReset =() => {

    setState(Array(9).fill(null))

  }

  return (
    <div>
       <h1 className="tictactoe"> Tic-Tac-Toe Game</h1>
      <div className="next-player"> Next Player is { isxturn ? "x"  : "o"}</div>
      {isWinner ?
       (<div className="winner">{isWinner} is Winner</div>) : 
       isdraw ? ( <div className="draw">Game is Draw!</div>) : null }
      <div className="board">
        <div className="board-row">
          <BoardColumn onClick={() => handleClick(0)} value={state[0]} />
          <BoardColumn onClick={() => handleClick(1)} value={state[1]} />
          <BoardColumn onClick={() => handleClick(2)} value={state[2]} />

        </div>
        <div className="board-row">
          <BoardColumn onClick={() => handleClick(3)} value={state[3]} />
          <BoardColumn onClick={() => handleClick(4)} value={state[4]} />
          <BoardColumn onClick={() => handleClick(5)} value={state[5]} />

        </div>
        <div className="board-row">
          <BoardColumn onClick={() => handleClick(6)} value={state[6]} />
          <BoardColumn onClick={() => handleClick(7)} value={state[7]} />
          <BoardColumn onClick={() => handleClick(8)} value={state[8]} />

        </div>

      </div>

       <button className="replay" onClick={handleReset}>Play Again</button>

    </div>
   
  )

}

export default Boardsheeet;