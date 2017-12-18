import React from 'react';
import { View, Text, Image } from 'react-native';
import { CategoriesList, TagList } from '../components/common';

const Categories = () => {
  return (
     <View style={styles.container}>
      <TagList />
     </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#202020'
  },
  city: {
    color: '#f4f4f4',
    fontSize: 50,
    marginTop: 40
  }
};
export { Categories };