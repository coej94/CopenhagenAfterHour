import React, {Component} from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import { TagDetail, Header } from '../common';

class TagList extends Component {
    state = { tags: [] };
    componentWillMount() {
        axios.get('http://localhost:7777/jtags') //<-- change this when content comes online
        .then(response => this.setState({ tags: response.data }));
        
    }

    renderTags() {
        return this.state.tags.map(tag => 
            <TagDetail key={tag._id} tag={tag} />
        );
    }

    render() {
        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    {this.renderTags()}
                </ScrollView>
            </View>
        );
    }
}

export { TagList };