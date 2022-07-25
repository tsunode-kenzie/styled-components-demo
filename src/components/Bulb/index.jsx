import { AiFillBulb } from 'react-icons/ai';
import { Container } from './styles';

const Bulb = ({ isLight }) => {
  return (
    <Container isLight={isLight}>
      <AiFillBulb />
    </Container>
  )
};

export default Bulb;