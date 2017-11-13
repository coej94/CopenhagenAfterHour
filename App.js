import React from 'react';
import {View, Text, Image} from 'react-native';
import { TabNavigator } from 'react-navigation';
import {Home, Favorites, Categories, Plan, Settings} from './src/screens'

const App = TabNavigator({
    Home: { screen: Home },
    Favorites: { screen: Favorites },
    Categories: { screen: Categories },
    Plan: { screen: Plan },
    Settings: { screen: Settings },
});

export default App;