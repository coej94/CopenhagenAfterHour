import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/common';

const Favorites = () => {
  return (
    <View style={styles.containerStyle}>
      <Header headerText='Favorites' />
      <Text style={styles.textStyle} > Your favorite bars will appear here in the future </Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#404040',
    flex: 1,
  },
  textStyle: {
    color: 'white',
    
  }
}
export { Favorites };