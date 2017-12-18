import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyling}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyling: {
        borderBottomWidth: 1,
        padding: 5, 
        backgroundColor: '#131313',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#f00',
        position: 'relative'
    }
};

export { CardSection };
