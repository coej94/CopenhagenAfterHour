import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Hej verden!
      </Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, textStyle: {
    color: 'rgb(103,218,249)',
    fontSize: 50
  }
  
};

export default App;