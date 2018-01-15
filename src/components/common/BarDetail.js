import React from 'react';
import {Image, View, Text } from 'react-native';
import { Card, CardSection, Heart, Button, GoToButton } from '../common';

const BarDetail = ({ bar }) => { //<-- bar is destructured out of props
    const { photo, name, location, thumbnail } = bar;
    const { textStyle, 
            infoView, 
            infoViewHeaderStyle, 
            thumbnailContainerStyle, 
            thumbnailStyle,
            imageStyle,
            heartContainerStyle,
            container
        } = styles;
    
    const firstAdd = location.address.split(',');
    //firstadd variable = first part of address string
    return (
        <Card> 
            <CardSection>
                    <Image 
                        style={ imageStyle }
                        source={{ uri: `http://138.68.104.212:7777/uploads/${photo || 'store.png'}` }}
                    />
            </CardSection>
    
            <CardSection>
                <View style={container}>
                    <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: `http://138.68.104.212:7777/uploads/${thumbnail || 'store.png'}` }}
                    />
                    </View>
                    
                    <View style={infoView}>
                        <Text style={infoViewHeaderStyle}>{name}</Text>
                        <Text style={textStyle}>{`${firstAdd[0]}`}</Text> 
                    </View> 
                    <View style={heartContainerStyle}>
                        <GoToButton />
                        <Heart />
                    </View>
                </View>
            </CardSection>  
        </Card>
    );
};
const styles = {
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    textStyle: {
        color: '#fcfcfc'
    },
    
    infoView: {
        flex:1,
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
    Style: {
        width: 50, 
        height: 50
    },
    thumbnailStyle: {
        width: 50, 
        height: 50
    },
    imageStyle: {
        height: 300,
         flex: 1,
         width: null
    },
    heartContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
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