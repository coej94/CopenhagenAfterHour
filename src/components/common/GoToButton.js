import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

const GoToButton = () => {
    return (
        <View style={styles.iconContainer}>
            <Icon
            name='info'
            type='entypo'
            color='#f50'
            size={33}
            iconStyle={styles.iconStyling}
            onPress={ () => console.log('GoTo Button') } 
            />
        </View>
    );
};

const styles = {
    iconStyling: {
        backgroundColor: '#131313'
    }, 
    iconContainer: {
        justifyContent: 'center',
        height: 44,
        width: 33,
        
    }
};

export { GoToButton };