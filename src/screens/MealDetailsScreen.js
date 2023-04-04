import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import {MEALS} from '../data/dummy-data';
import CustomHeaderButtons from '../components/HeaderButton';

const MealDetailsScreen = props => {
  const {navigation, route} = props;
  const {mealId} = route.params;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const [value, onChangeText] = React.useState(selectedMeal.title);
  React.useEffect(() => {
    navigation.setOptions({
      title: value,
      headerRight: () => (
        // <Icons name="remove" size={30} color="#cca300" />
        <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log('Favorite Clicked');
            }}
          />
        </HeaderButtons>
      ),
    });
  });

  return (
    <SafeAreaView style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go to Favourite Meals"
        onPress={() => {
          navigation.navigate('FavouritesMealScreen');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealDetailsScreen;
