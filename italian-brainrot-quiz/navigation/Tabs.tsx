import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Card from '../screens/Card';
import Quiz from '../screens/Quiz';
import { Ionicons } from '@expo/vector-icons';
import colors from '../colors';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.beige },
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.blue,
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
        component={Card}
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
              <Ionicons name="help" size={size} color={color} />
            ) : (
              <Ionicons name="help-outline" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
