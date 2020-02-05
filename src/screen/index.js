import React from 'react';
import styles from './styles'
import TicTacToe from '../components/tictactoe'

const App = () => {
  return (
    <main style={styles.container}>
      <TicTacToe />
    </main>
  );
}

export default App;
