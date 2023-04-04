import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';

import FavouriteStack from './FavouriteStack';
import CategoriesNavigator from './CategoryNavigation';

const Drawer = createDrawerNavigator();
//   MealsFavs: BottomTabNavigator,
//   Filter: FavouriteStack,
// });

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Categories!!!!"
        component={CategoriesNavigator}
        options={{
          drawerLabel: 'Meal Categories',
          title: 'Meal Categories',
          //   headerShown: false,
        }}
      />
      <Drawer.Screen name="Filter" component={FavouriteStack} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
