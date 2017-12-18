import React from 'react';
import { View, Text } from 'react-native';
import { Header, BarList } from '../components/common';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header headerText='København'>
        København
      </Header>
      <BarList />
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

export { Home };
