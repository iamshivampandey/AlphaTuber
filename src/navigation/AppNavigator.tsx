import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../modules/home';
import LibraryScreen from '../modules/library';
import MoreScreen from '../modules/more';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 70,
            backgroundColor: '#121212',
            borderTopWidth: 0,
          },
          tabBarIcon: ({ focused }) => {
            let iconName = 'home';
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Library') iconName = 'library-music';
            else if (route.name === 'More') iconName = 'more-horiz';

            const color = focused ? '#1DB954' : '#B3B3B3';
            return <Ionicons name={iconName} size={24} color={color} />;
          },
          tabBarLabel: ({ focused }) => {
            const color = focused ? '#1DB954' : '#B3B3B3';
            return (
              <Text style={{ color, fontSize: 12, fontWeight: focused ? 'bold' : 'normal' }}>
                {route.name}
              </Text>
            );
          },
          // tabBarButton: (props) => <AnimatedTabButton {...props} />,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
  );
};

const AnimatedTabButton = ({ children, onPress, accessibilityState }) => {
  const focused = accessibilityState.selected;
  const scale = useSharedValue(1);

  React.useEffect(() => {
    if (focused) {
      scale.value = withSpring(1.1);
    } else {
      scale.value = withSpring(1);
    }
  }, [focused, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[animatedStyle, { flex: 1 }]}>
      <Text
        onPress={onPress}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        {children}
      </Text>
    </Animated.View>
  );
};

export default AppNavigator;
