import React from 'react';
import {Image, View, Text } from 'react-native';
import { Card, CardSection } from '../common';

const BarDetail = ({ bar }) => { //<-- bar is destructured out of props
    const { photo, name, location } = bar;
    const { textStyle, 
            infoView, 
            infoViewHeaderStyle, 
            thumbnailContainerStyle, 
            thumbnailStyle,
            imageStyle
        } = styles;
    
    const firstAdd = location.address.split(',');
    
    return (
        <Card> 
            <CardSection>
                <Image 
                    style={ imageStyle }
                    source={{ uri: `http://localhost:7777/uploads/${photo || 'store.png'}` }}
                />
            </CardSection>
    
            <CardSection>
                <View style={thumbnailContainerStyle}>
                <Image
                    style={thumbnailStyle}
                    source={{ uri: `http://localhost:7777/uploads/${photo || 'store.png'}` }}
                />
                </View>
                <View style={infoView}>
                    <Text style={infoViewHeaderStyle}>{name}</Text>
                    <Text style={textStyle}>{`${firstAdd[0]}, ${firstAdd[1]}`}</Text>
                </View> 
            </CardSection>
        </Card>
    );
};
const styles = {
    textStyle: {
        color: '#fcfcfc'
    },
    
    infoView: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    infoViewHeaderStyle: {
        fontSize: 18,
        color: '#f00'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    thumbnailStyle: {
        width: 50, 
        height: 50
    },
    imageStyle: {
        height: 300,
         flex: 1,
         width: null
    }
};

export { BarDetail };


/*
         <Card> 
            <CardSection>
                <View style={styles.infoView}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{ uri: `http://localhost:7777/uploads/${bar.photo || 'store.png'}` }}
                />
                </View>
                <View style={styles.infoView}>
                    <Text style={styles.textStyle}>{bar.name}</Text>
                    <Text style={styles.textStyle}>{bar.location.address}</Text>
                </View> 
            </CardSection>
        </Card>
 */