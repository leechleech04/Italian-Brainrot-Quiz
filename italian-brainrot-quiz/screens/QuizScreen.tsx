import styled from 'styled-components/native';
import colors from '../colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

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
  margin-top: 20px;
`;

const QuizButtonText = styled.Text`
  font-size: 20px;
  color: ${colors.beige};
  text-align: center;
  font-family: 'PoetsenOne-Regular';
`;

const QuizImage = styled.Image`
  width: ${width / 3}px;
  height: ${width / 3}px;
  border-radius: 20px;
  border: 5px solid ${colors.beige};
`;

const QuizImageContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 20px 0;
  width: 100%;
`;

const QuizScreen = () => {
  const navigation = useNavigation<QuizNavigationProp>();

  return (
    <Container>
      <Title>Quiz</Title>
      <QuizButton
        style={{ marginTop: 60 }}
        onPress={() => {
          navigation.navigate('ImageAndNameQuiz');
        }}
      >
        <QuizButtonText>Image and Name Quiz</QuizButtonText>
      </QuizButton>
      <QuizButton style={{ backgroundColor: colors.blue }}>
        <QuizButtonText>Coming Soon!</QuizButtonText>
      </QuizButton>
      <QuizImageContainer>
        <QuizImage source={require('../assets/TralaQuiz.png')} />
        <QuizImage source={require('../assets/SahurQuiz.png')} />
      </QuizImageContainer>
    </Container>
  );
};

export default QuizScreen;
