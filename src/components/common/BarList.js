import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import { BarDetail } from './BarDetail';

class BarList extends Component {
    state = { bars: [] };
    componentWillMount() {
        axios.get('http://138.68.104.212:7777/jstores') //<-- change this when content comes online
        .then(response => this.setState({ bars: response.data }))
        .catch(error => {
            console.log(error.response)
        });
    }

    renderBars() {
        return this.state.bars.map(bar => 
            <BarDetail key={bar._id} bar={bar} />
        );
    }

    render(){   
        return (
            <ScrollView showsVerticalScrollIndicator={false} >
                {this.renderBars()}
            </ScrollView>
        );
    }
}

export { BarList };
