import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const MenuBox = () => {
    const { headline, backdropView, boxContainer, backdrop, miniBox, containerStyle } = styles;
    return (
        <View style={boxContainer}>
            <View style={containerStyle}>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={miniBox}>
                    <Image 
                    style={backdrop} 
                    source={ require('../../assets//happiness.jpg') } > 
                        <View style={backdropView}>
                            <Text style={headline}>Find a Bar</Text>
                        </View>
                    </Image>
                </View>
                </TouchableOpacity>
                

                <TouchableOpacity onPress={this._onPressButton}>
                <View style={miniBox}>
                    <Image 
                    style={backdrop} 
                    source={ require('../../assets/dance.jpg') } > 
                        <View style={backdropView}>
                            <Text style={headline}>See Your Favorites</Text>
                        </View>
                    </Image>
                </View>
                </TouchableOpacity>                
            </View>
            
            <View style={containerStyle}>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={miniBox}>
                    <Image 
                    style={backdrop} 
                    source={ require('../../assets/marriott-copenhagen-map.png') } > 
                        <View style={backdropView}>
                            <Text style={headline}>Find a place!</Text>
                        </View>
                    </Image>
                </View>
            </TouchableOpacity>
                
                <TouchableOpacity onPress={this._onPressButton}>
                <View style={miniBox}>
                    <Image 
                    style={backdrop} 
                    source={ require('../../assets/meh.jpg') } > 
                        <View style={backdropView}>
                            <Text style={headline}>Plan your Evening!</Text>
                        </View>
                    </Image>
                </View>
                </TouchableOpacity>
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
    backdrop: {
        paddingTop: 60,
        width: 150,
        height: 150
      },
      headline: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        padding: 3
      },
    miniBox: {
        width: 150,
        height: 150,
        backgroundColor: 'rgba(230,5,2,0.2)',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
    
};
export { MenuBox };
