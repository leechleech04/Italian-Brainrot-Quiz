import { createStackNavigator } from '@react-navigation/stack';
import QuizScreen from '../screens/QuizScreen';
import ImageAndNameQuiz from '../screens/ImageAndNameQuiz';

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
    </Stack.Navigator>
  );
};

export default QuizStacks;
