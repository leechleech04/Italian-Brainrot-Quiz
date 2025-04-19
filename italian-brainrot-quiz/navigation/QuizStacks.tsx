import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from '../screens/QuizScreen';
import ImageAndNameQuiz from '../screens/ImageAndNameQuiz';
import AbilityAndMotiveQuiz from './AbilityAndMotiveQuiz';

const Stack = createStackNavigator();

const CardStacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
      <Stack.Screen name="CardDetail" component={ImageAndNameQuiz} />
      <Stack.Screen name="CardDetail" component={AbilityAndMotiveQuiz} />
    </Stack.Navigator>
  );
};

export default CardStacks;
