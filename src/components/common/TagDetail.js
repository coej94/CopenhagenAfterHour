import React from 'react';
import { Card, CardSection } from '../common';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const TagDetail = ({ tag }) => {
    const { _id, count } = tag;
    const { infoView, idStyle, textStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={infoView}>
                    <Text style={idStyle}>{_id}</Text>
                    <Text style={textStyle}> Number of bars in this Category: {count} </Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    container: {
        flex: 1
    },
    idStyle: {
        fontSize: 30,
        color: '#fc9000'
    },
    infoView: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        width: 50, 
        height: 50
    },
    textStyle: {
        color: '#fcfcfc'
    },
}

export { TagDetail };