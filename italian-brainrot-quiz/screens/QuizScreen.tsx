import styled from 'styled-components/native';
import colors from '../colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type QuizNavigationProp = StackNavigationProp<RootStackParamList>;

const Container = styled(LinearGradient).attrs({
  colors: [colors.blue, colors.skyBlue],
  start: { y: 0 },
  end: { y: 1 },
})`
  flex: 1;
  background-color: ${colors.blue};
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 60px;
  color: ${colors.beige};
  text-align: center;
  font-family: 'PoetsenOne-Regular';
`;

const QuizButton = styled.Pressable`
  background-color: ${colors.orange};
  border: 5px solid ${colors.beige};
  border-radius: 20px;
  padding: 10px 30px;
  margin-top: 60px;
`;

const QuizButtonText = styled.Text`
  font-size: 20px;
  color: ${colors.beige};
  text-align: center;
  font-family: 'PoetsenOne-Regular';
`;

const QuizScreen = () => {
  const navigation = useNavigation<QuizNavigationProp>();

  return (
    <Container>
      <Title>Quiz</Title>
      <QuizButton
        onPress={() => {
          navigation.navigate('ImageAndNameQuiz');
        }}
      >
        <QuizButtonText>Image and Name Quiz</QuizButtonText>
      </QuizButton>
      <QuizButton style={{ backgroundColor: colors.blue }}>
        <QuizButtonText>Coming Soon!</QuizButtonText>
      </QuizButton>
    </Container>
  );
};

export default QuizScreen;
