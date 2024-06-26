import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';

const App = () => {
  const [board, setBoard] = useState(new Board)

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard) // сохраняю новый объект в состоянии
  }

  return (
    <div className='app'>
      <BoardComponent/>
    </div>
  );
}

export default App;
