import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/common';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Header headerText='Settings'>
      </Header>
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

export { Settings };
