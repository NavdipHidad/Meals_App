import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import DrawerNavigator from '../Navigation/DrawerNavigator';
import {useCallback} from 'react';

const CategoriesScreen = props => {
  const {navigation} = props;

  useFocusEffect(
    useCallback(() => {
      // console.log(props.navigation.getParent());
      navigation.getParent().setOptions({
        headerShown: true,
      });
    }),
  );
  const renderGridItem = itemData => {
    // <DrawerNavigator />;
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate('MealCategories', {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };
  return (
    // <View style={styles.screen}>
    //   <Text>Categories Screen</Text>
    //   <Button title="Go to Category Meals" onPress={props.onMealScreen} />
    // </View>

    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoriesScreen;
