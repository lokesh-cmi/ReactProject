import React, { useState } from 'react';
import Board from './Board';
import History from './History';
import Status_message from './Status_message';
import { CalculateWinner } from './CalculateWinner';
import { Link } from 'react-router-dom';
import './main.scss';

const New_game = [{ board: Array(9).fill(null), isXnext: true }];
const TicTacToe = () => {
  const [history, update_history] = useState(New_game);
  const [currentmove, set_currentmove] = useState(0);

  const curr = history[currentmove];

  const { winner, winningSquare } = CalculateWinner(curr.board);

  const handlesquareclick = position => {
    if (curr.board[position] || winner) return;

    update_history(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXnext ? 'O' : 'X';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXnext: !last.isXnext });
    });
    set_currentmove(prev => prev + 1);
  };

  const moveTo = move => {
    set_currentmove(move);
  };

  const onNew_game = () => {
    update_history(New_game);
    set_currentmove(0);
  };

  return (
    <div className="main">
        <div className="navbar">   
            <div className="icon">
                <h2 className="logo">Lokesh</h2>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Todo">Todo</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="app">
            <h1>
                {' '}
                <span className="text-green"> Tic </span>{' '}
                <span className="text-orange"> Tac </span>{' '}
                <span className="text-green"> Toe </span>{' '}
            </h1>
            <Status_message winner={winner} curr={curr} />
            <Board
                board={curr.board}
                handlesquareclick={handlesquareclick}
                winningSquare={winningSquare}
            />
            <button
                type="button"
                onClick={onNew_game}
                className={`btn-reset ${winner ? 'active' : ''}`}
            >
                {' '}
                Start new Game{' '}
            </button>
            <h2>
                {' '}
                <span className="text-orange">Current</span>{' '}
                <span className="text-green"> Game </span>{' '}
                <span className="text-orange"> History </span>
            </h2>
            <History history={history} moveTo={moveTo} />
            <div className="bg-balls" />
        </div>
    </div>
  );
};

export default TicTacToe;