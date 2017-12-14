import React from 'react';
import { Text } from 'react-native';
import { Card } from './Card';

const BarDetail = (props) => {
    return (
        <Card> 
            <Text>
                {props.bar.name}
            </Text>
        </Card>
    );
};

export { BarDetail };
