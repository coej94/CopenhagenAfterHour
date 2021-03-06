import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import {
    Home,
    Favorites,
    Categories,
    Maps,
    Settings,
    BarDetail
} from '../screens';


export const HomeStack = StackNavigator({
    Home: {
        screen: Home,
    },
    Details: {
        screen: BarDetail,
    }
}, {
    mode: 'modal',
    headerMode: 'none',
});

export const Tab = TabNavigator({
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                    name='ios-home'
                    type='ionicon'
                    size={30}
                    color={tintColor}

                    />
                )
            },
        },
        Favorites: {
            screen: Favorites,
            navigationOptions: {
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                    name='ios-heart'
                    type='ionicon'
                    size={30}
                    color={tintColor}

                    />
                )
            },
        },

        Categories: {
            screen: Categories,
            navigationOptions: {
                tabBarLabel: 'Categories',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                    name='ios-list-box'
                    type='ionicon'
                    size={30}
                    color={tintColor}

                    />
                )
            },
        },

        Maps: {
            screen: Maps,
            navigationOptions: {
                tabBarLabel: 'Map',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                    name='ios-pin'
                    type='ionicon'
                    size={30}
                    color={tintColor}

                    />
                )
            },
        },
        // Settings: {
        //     screen: Settings,
        //     navigationOptions: {
        //         tabBarLabel: 'Settings',
        //         tabBarIcon: ({ tintColor }) => (
        //             <Icon
        //             name='ios-settings'
        //             type='ionicon'
        //             size={30}
        //             color={tintColor}

        //             />
        //         )
        //     },
        // }, 
    },

    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: '#181818',
                
            },
            activeTintColor: '#980c0c'
        }
    });
