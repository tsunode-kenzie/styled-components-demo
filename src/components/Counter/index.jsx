import { useState } from 'react';
import { Container, Button } from './styles';

// import './styles.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function addNumber() {
    setCounter((oldCounter) => oldCounter + 1);
  }

  function subNumber() {
    setCounter(counter - 1);
  }

  return (
    <Container teste='banana' height={90}>
      <p>{counter}</p>
      <div className='teste'>
        <button onClick={addNumber}>+</button>
        <button onClick={subNumber}>-</button>
      </div>
      <div></div>
    </Container>
  );
};

export default Counter;