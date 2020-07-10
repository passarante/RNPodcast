import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListenNowScreen from '../components/listenNow/ListenNowScreen';
import LibraryScreen from '../components/library/LibraryScreen';
import SearchScreen from '../components/search/SearchScreen';
import {createStackNavigator} from '@react-navigation/stack';
import PodcastDetailsScreen from '../components/podcastDetails/PodcastDetailsScreen';
import {theme} from '../constants/theme';

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
      screenOptions={{headerTintColor: theme.color.blueLight}}>
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
    <MainTab.Navigator>
      <MainTab.Screen name="ListenNow" component={ListenNowStackNavigator} />
      <MainTab.Screen name="Library" component={LibraryStackNavigator} />
      <MainTab.Screen name="Search" component={SearchStackNavigator} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
