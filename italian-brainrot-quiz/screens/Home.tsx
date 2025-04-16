import styled from 'styled-components/native';
import colors from '../colors';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
`;

const Title = styled.Text`
  font-size: 60px;
  color: ${colors.beige};
  text-align: center;
  font-family: 'PoetsenOne-Regular';
`;

const Home = () => {
  return (
    <Container>
      <Title>
        Italian{'\n'}Brainrot{'\n'}Quiz
      </Title>
    </Container>
  );
};

export default Home;
