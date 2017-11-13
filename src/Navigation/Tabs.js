import React from "react";
import { TabNavigator } from 'react-navigation';
import {Home, Settings} from '../screens'

const MainScreenNavigator = TabNavigator({
    Recent: { screen: Home },
    All: { screen: Settings },
});

export default MainScreenNavigator;