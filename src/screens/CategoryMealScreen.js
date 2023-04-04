import React, {useEffect} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {
  const {navigation, route} = props;
  const {categoryId} = route.params;
  useEffect(() => {
    // console.log(props.navigation.getParent());
    navigation.getParent().setOptions({
      headerShown: false,
    });
  }, []);
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          navigation.navigate('MealDetails', {mealId: itemData.item.id});
        }}
      />
    );
  };

  //console.log('props----->', props);

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  const [value, onChangeText] = React.useState(selectedCategory.title);
  React.useEffect(() => {
    navigation.setOptions({
      title: value,
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#00cc00"
        />
      ),
    });
  }, [navigation, value]);

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  );
};

CategoryMealScreen.navigationOption = navigationData => {
  const {categoryId} = route.params;
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
  //console.log(selectedCategory.title);
  //headerTitle: 'Category Of Meal',

  return {headerTitle: selectedCategory.title};
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMealScreen;
