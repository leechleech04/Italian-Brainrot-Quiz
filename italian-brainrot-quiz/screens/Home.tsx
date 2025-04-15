import styled from 'styled-components/native';
import colors from '../colors';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
`;

const Home = () => {
  return <Container></Container>;
};

export default Home;
