import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Quiz from '../screens/QuizScreen';
import { Ionicons } from '@expo/vector-icons';
import colors from '../colors';
import CardStacks from './CardStacks';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.beige },
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.orange,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <Ionicons name="home" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Card"
        component={CardStacks}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <Ionicons name="albums" size={size} color={color} />
            ) : (
              <Ionicons name="albums-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (
              <Ionicons name="school" size={size} color={color} />
            ) : (
              <Ionicons name="school-outline" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
