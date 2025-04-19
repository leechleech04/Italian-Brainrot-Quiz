import { createStackNavigator } from '@react-navigation/stack';
import CardScreen from '../screens/CardScreen';
import CardDetail from '../screens/CardDetail';

const Stack = createStackNavigator();

const CardStacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CardScreen" component={CardScreen} />
      <Stack.Screen name="CardDetail" component={CardDetail} />
    </Stack.Navigator>
  );
};

export default CardStacks;
