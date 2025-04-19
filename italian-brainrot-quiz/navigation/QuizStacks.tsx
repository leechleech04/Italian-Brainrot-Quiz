import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from '../screens/QuizScreen';
import ImageAndNameQuiz from '../screens/ImageAndNameQuiz';
import AbilityAndMotiveQuiz from '../screens/AbilityAndMotiveQuiz';

const Stack = createStackNavigator();

const QuizStacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
      <Stack.Screen name="ImageAndNameQuiz" component={ImageAndNameQuiz} />
      <Stack.Screen
        name="AbilityAndMotiveQuiz"
        component={AbilityAndMotiveQuiz}
      />
    </Stack.Navigator>
  );
};

export default QuizStacks;
