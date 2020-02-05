import React, { useState } from 'react';
import { DIMS, SQUARE_DIMS, PLAYER_X, PLAYER_Y } from '../constants';
import styles from './styles';

const array = new Array(DIMS ** 2).fill(null);

const TicTacToe = () => {
  const [grid, setGrid ] = useState(array);
  const [players, setPlayers] = useState({
    human: PLAYER_X,
    computer: PLAYER_Y,
  })

  const move = (index, player) => {
    setGrid(grid => {
      const gridCopy = grid.concat();
      gridCopy[index] = player
      return gridCopy;
    })
  }

  const humanMove = (index) => {
    if(!grid[index]) {
      move(index, players.human)
    }
  }

  return (
    <div style={styles.container}>
      {grid.map((value, index) => {
        const isActive = value !== null;
        return (
          <div style={styles.square}
            key={index}
            onClick={() => humanMove(index)}
          >
            {isActive && 
              <p style={styles.text}>
                {value === PLAYER_X ? 'X' : 'Y'}
              </p>}
          </div>
        );
      })}
    </div>
  )
}

export default TicTacToe