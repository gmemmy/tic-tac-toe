import { SQUARE_DIMS, DIMS } from '../constants';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: `${DIMS * (SQUARE_DIMS + 5)}px`,
    // height: '100%',
    flexFlow: 'wrap',
    position: 'relative',
  },
  square: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: `${SQUARE_DIMS}px`,
    height: `${SQUARE_DIMS}px`,
    border: '1px solid black',
  
    '&:hover': {
      cursor: 'pointer',
    }
  },
  text: {
    fontSize: '68px',
  }
}

export default styles;
