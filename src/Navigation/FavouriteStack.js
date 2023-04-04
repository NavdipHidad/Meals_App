import * as React from 'react';
import FavouritesScreen from '../screens/FavouritesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const FavouriteStack = () => {
  return (
    <Stack.Navigator initialRouteName="Meals Hub">
      {/* <Stack.Screen name="draw" component={DrawerNavigator} /> */}
      <Stack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          title: 'My Favourites',
        }}
      />
    </Stack.Navigator>
  );
};

export default FavouriteStack;
