import * as React from 'react';
import CategoriesNavigator from './CategoryNavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavouriteStack from './FavouriteStack';
import Icons from 'react-native-vector-icons/Ionicons';
Icons.loadFont();

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        //tabBarLabel: 'Resto',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Categories') {
            iconName = focused ? 'ios-restaurant' : 'ios-restaurant-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'ios-star' : 'ios-star-outline';
          }
          return <Icons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Categories"
        component={CategoriesNavigator}
        options={styles.headerOptions}
      />
      <Tab.Screen
        name="Favorites"
        component={FavouriteStack}
        options={styles.headerOptions}
      />
    </Tab.Navigator>
  );
};

const styles = {
  headerOptions: {headerShown: false},
};

export default BottomTabNavigator;
