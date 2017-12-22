import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView, View } from 'react-native';
import { BarDetail, Header } from '../components/common';

class Home extends Component {
    state = { bars: [] };
    componentWillMount() {
        axios.get('http://localhost:7777/jstores') //<-- change this when content comes online
        .then(response => this.setState({ bars: response.data }));
    }

    renderBars() {
        return this.state.bars.map(bar => 
            <BarDetail key={bar._id} bar={bar} />
        );
    }

      onLearnMore = (bar) => {
        this.props.navigation.navigate('Details', { ...bar });
      };

    render(){
        return (
          <View style={styles.container}>
          <Header headerText='København'/>
            <ScrollView showsVerticalScrollIndicator={false} >
                {this.renderBars()}
            </ScrollView>
          </View>
        );
    }
}

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
