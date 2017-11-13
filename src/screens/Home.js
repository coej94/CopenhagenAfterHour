import React from 'react';
import { View, Text } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>
        København
      </Text>
      
    </View>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#242424'
  },
  city: {
    color: '#f4f4f4',
    fontSize: 50,
    marginTop: 40
  }
};

export { Home };
