import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// import { BottomNavigation } from 'react-native-material-ui';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';

// import { styles } from './App/Style';
import BuildingsContainer from './pages/BuildingsContainer';
import BuildingDetailContainer from './pages/BuildingDetailContainer';
import EditBuildingContainer from './pages/EditBuildingContainer';
import AddBuildingContainer from './pages/AddBuildingContainer';
import AddRoomContainer from './pages/AddRoomContainer';
import PeopleContainer from './pages/PeopleContainer';
import RentContainer from './pages/RentContainer';
import ConfigContainer from './pages/ConfigContainer';
import AuthContainer from './pages/AuthContainer';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";


const client = new ApolloClient({
  uri: "https://us-central1-house-rental-8c426.cloudfunctions.net/graphql",
  // tell apollo to include credentials for csrf token protection
  credentials: "include",
  // async operation with fetch to get csrf token
  cache: new InMemoryCache(),
  clientState: {
    defaults: {
      data: { __typename: "data" }
    },
    resolvers: {},
    typeDefs: ``
  }
});

const BuildingStack = createStackNavigator(
  {
    Building: BuildingsContainer,
    BuildingDetail: BuildingDetailContainer,
    EditBuilding: EditBuildingContainer,
    AddBuilding: AddBuildingContainer,
    AddRoom: AddRoomContainer
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: 'Building',
    }),
    initialRouteName: 'Building',
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
    AuthContainer
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: 'Config',
    }),
  }
);


const TabNavigator = createMaterialTopTabNavigator(
  {
    Building: { screen: BuildingStack },
    People: { screen: PeopleStack },
    Rent: { screen: RentStack },
    Config: { screen: ConfigStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon = "▲";

        if (routeName === 'Building') {
          icon = "🏡";
        } else if (routeName === 'People') {
          icon = "🙍"
        } else if (routeName === 'Rent') {
          icon = "📝"
        } else if (routeName === 'Config') {
          icon = "🔧"
        }

        // can use react-native-vector-icons
        // <Icon name={iconName} size={iconSize} color={iconColor} / >
        return <Text style={{ color: focused && "#46c3ad" || "#888" }}>{icon}</Text>
      },
      animationEnabled: true,
      swipeEnabled: true,
      tabBarPosition: "bottom",
      tabBarOptions: {
        style: {
          backgroundColor: 'white'
        },
        activeTintColor: "#000",
        inactiveTintColor: "#aaa",
        iconStyle: { height: 30 },
        upperCaseLabel: false,
        showLabel: true,
        showIcon: true,
      }
    }),
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
  const [isReady, setIsReady] = useState(false);

  async function fontLoad() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setIsReady(true);
  }

  useEffect(() => {
    fontLoad();
  })
  if (!isReady) {
    return <AppLoading />;
  }
  const AppContainer = createAppContainer(AppStack);
  return (
    <ApolloProvider client={client}>
      <AppContainer />
    </ApolloProvider>
  );
}
