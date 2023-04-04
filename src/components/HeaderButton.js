import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icons from 'react-native-vector-icons/Ionicons';
Icons.loadFont();

const CustomHeaderButtons = props => {
  return (
    <HeaderButton {...props} IconComponent={Icons} iconSize={23} color="blue" />
  );
};

export default CustomHeaderButtons;
