import { TabNavigator } from 'react-navigation';
import {
    Home,
    Favorites,
    Categories,
    Plan,
    Settings
} from '../screens';



const Tab = TabNavigator({
        Home: {
            screen: Home
        },
        Favorites: {
            screen: Favorites
        },
        Categories: {
            screen: Categories
        },
        Plan: {
            screen: Plan
        },
        Settings: {
            screen: Settings
        },
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

export default Tab;
