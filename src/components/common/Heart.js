import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

const Heart = () => {
    return (
        <View style={styles.iconContainer}>
            <Icon
            name='heart'
            type='evilicon'
            color='#f50'
            size={50}
            iconStyle={styles.iconStyling}
            onPress={() => console.log('hello')} />
        </View>
    );
};

const styles = {
    iconStyling: {
        backgroundColor: '#131313'
    }, 
    iconContainer: {
        justifyContent: 'center',
        height: 50,
        width: 50,
        
    }
};

export { Heart };