import React from 'react';
import { View, Text, Image } from 'react-native';

const MenuBox = () => {
    const { boxContainer, boxText, miniBox, containerStyle } = styles;
    return (
        <View style={boxContainer}>
            <View style={containerStyle}>
                <View style={miniBox}>
                    
                    <Text style={boxText}> Find a Bar </Text>
                </View>
                <View style={miniBox}>

                    <Text style={boxText}> Plan your Pub Crawl</Text>
                </View>
            </View>
            <View style={containerStyle}>
                <View style={miniBox}> 
                    <Text style={boxText}>Find places near you</Text>
                </View>
                <View style={miniBox}>
                  <Text style={boxText}>See Your favorites</Text>
                </View>
            </View>
        </View>
    );
};


const styles = {
    containerStyle: {
       flexDirection: 'row',
       justifyContent: 'center',
    },
    boxContainer: {
        marginTop: 25
    },
    miniBox: {
        width: 150,
        height: 150,
        backgroundColor: 'rgba(230,5,2,0.2)',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxText: {
        fontSize: 25,
        color: 'red',
        textAlign: 'center',
        padding: 3
    }
}
export { MenuBox };
