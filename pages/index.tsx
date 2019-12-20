import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
// import { BottomNavigation } from 'react-native-material-ui';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// import { styles } from './App/Style';
import HouseContainer from './HouseContainer';
import PeopleContainer from './PeopleContainer';
import RentContainer from './RentContainer';
import ConfigContainer from './ConfigContainer';


const HouseStack = createStackNavigator(
  {
    HouseContainer
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: 'House',
    }),
  }
);
const PeopleStack = createStackNavigator(
  {
    PeopleContainer
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: 'People',
    }),
  }
);
const RentStack = createStackNavigator(
  {
    RentContainer
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: 'Rent',
    }),
  }
);
const ConfigStack = createStackNavigator(
  {
    ConfigContainer
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: 'Config',
    }),
  }
);


const TabNavigator = createBottomTabNavigator(
  {
    Home: HouseStack,
    People: PeopleStack,
    Rent: RentStack,
    Config: ConfigStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon = "▲";

        if (routeName === 'House') {
          icon = "🌈";
        } else if (routeName === 'People') {
          icon = "🌙"
        } else if (routeName === 'Rent') {
          icon = "🌙"
        } else if (routeName === 'Config') {
          icon = "🌙"
        }


        // can use react-native-vector-icons
        // <Icon name={iconName} size={iconSize} color={iconColor} />
        return <Text style={{ color: focused && "#46c3ad" || "#888" }}>{icon}</Text>
      }
    }),
    lazy: false,
    tabBarOptions: {
      activeTintColor: "#46c3ad",
      inactiveTintColor: "#888",
    },
  }
);

const AppStack = createStackNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
  }
);


export default function App() {
  createAppContainer(AppStack);
  return <AppStack />;
}

