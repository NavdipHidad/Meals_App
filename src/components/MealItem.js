import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground style={styles.bgImg} source={{uri: props.image}}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text style={styles.mealDetailText}>{props.duration}m</Text>
            <Text style={styles.mealDetailText}>
              {props.complexity.toUpperCase()}
            </Text>
            <Text style={styles.mealDetailText}>
              {props.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '99%',
    marginVertical: 5,
    backgroundColor: '#666666',
    borderRadius: 15,
    overflow: 'hidden',
  },
  mealRow: {flexDirection: 'row'},
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  mealDetailText: {
    color: 'white',
  },
  bgImg: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 5,
    paddingHorizontal: 15,
    textAlign: 'center',
  },
});

export default MealItem;
