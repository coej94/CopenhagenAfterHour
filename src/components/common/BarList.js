import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { BarDetail } from './BarDetail'
import axios from 'axios';

class BarList extends Component {
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

    render(){
        return (
            <ScrollView>
                {this.renderBars()}
            </ScrollView>
        );
    }
};

const styles = {
    textStyle: {
        color: '#fff'
    }
};

export { BarList };
