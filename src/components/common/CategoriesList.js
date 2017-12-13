import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, SectionList } from 'react-native';

var _ = require('lodash')

let dataSource = [
  { name: "NightFever", adress: "Kattesundet", distance: 2, priceLevel: 3, rating: 2 },
  { name: "Tyrolia", adress: "VesterGade", distance: 4, priceLevel: 2, rating: 1 }
]

dataSource = _.groupBy(dataSource, d => d.name);

dataSource = _.reduce(dataSource, (acc, next, index) => {
  acc.push({
    key: index,
    data: next
  })
  return acc
}, []);


class CategoriesList extends Component {
  renderItem = (item) => {
    return <Text style={styles.text}>{item.item.adress}</Text>
  }
  renderHeader = (headerItem) => {
    return <Text style={styles.header}>{headerItem.section.key}</Text>
  }
  render() {
    return (    
      <View style={styles.container}>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderHeader}
          sections={dataSource}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  };
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 40
  },
  text:{
    fontSize: 30,
  }
};
export { CategoriesList };
