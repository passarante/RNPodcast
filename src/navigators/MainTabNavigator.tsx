import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListenNowScreen from '../components/listenNow/ListenNowScreen';
import LibraryScreen from '../components/library/LibraryScreen';
import SearchScreen from '../components/search/SearchScreen';
import {createStackNavigator} from '@react-navigation/stack';
import PodcastDetailsScreen from '../components/podcastDetails/PodcastDetailsScreen';
import {theme} from '../constants/theme';
import FeatherIcon from 'react-native-vector-icons/Feather';

const ICON_SIZE = 24;

const MainTab = createBottomTabNavigator();

const ListenNowStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const SearchStack = createStackNavigator();

const ListenNowStackNavigator = () => {
  return (
    <ListenNowStack.Navigator>
      <ListenNowStack.Screen
        options={{
          title: 'Listen Now',
        }}
        name="ListenNow"
        component={ListenNowScreen}
      />
    </ListenNowStack.Navigator>
  );
};
const LibraryStackNavigator = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        options={{
          title: 'Library',
        }}
        name="Library"
        component={LibraryScreen}
      />
    </LibraryStack.Navigator>
  );
};
const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerTintColor: theme.color.blueLight,
        headerTitleStyle: {
          color: theme.color.black,
        },
      }}>
      <SearchStack.Screen
        options={{
          title: 'Search',
        }}
        name="Search"
        component={SearchScreen}
      />
      <SearchStack.Screen
        options={{
          headerTitle: '',
        }}
        name="PodcastDetails"
        component={PodcastDetailsScreen}
      />
    </SearchStack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator tabBarOptions={{activeTintColor: theme.color.blueLight}}>
      <MainTab.Screen
        name="ListenNow"
        component={ListenNowStackNavigator}
        options={{
          tabBarIcon: (props) => (
            <FeatherIcon
              color={props.color}
              name="headphones"
              size={ICON_SIZE}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Library"
        component={LibraryStackNavigator}
        options={{
          tabBarIcon: (props) => (
            <FeatherIcon color={props.color} name="inbox" size={ICON_SIZE} />
          ),
        }}
      />
      <MainTab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: (props) => (
            <FeatherIcon color={props.color} name="search" size={ICON_SIZE} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
