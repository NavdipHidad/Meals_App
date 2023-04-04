import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const Stack = createNativeStackNavigator();

const CategoriesNavigator = props => {
  return (
    <Stack.Navigator initialRouteName="Meals Hub">
      <Stack.Screen
        name="Category"
        component={CategoriesScreen}
        options={{
          title: 'My Categories',
        }}
        drawerProps={props}
      />
      <Stack.Screen name="MealCategories" component={CategoryMealScreen} />
      <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
      <Stack.Screen name="FavouritesMealScreen" component={FavouritesScreen} />
    </Stack.Navigator>
  );
};

export default CategoriesNavigator;
