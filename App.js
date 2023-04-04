import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
import DrawerNavigator from './src/Navigation/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
