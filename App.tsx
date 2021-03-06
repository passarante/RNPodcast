import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UtilityThemeProvider, Box} from 'react-native-design-utility';
import {ApolloProvider} from '@apollo/react-hooks';
import {theme} from './src/constants/theme';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import {client} from './src/graphql/client';
import TrackPlayer from 'react-native-track-player';
import {ActivityIndicator} from 'react-native';
import {PlayerContextProvider} from './src/contexts/PlayerContext';

const App = () => {
  const [isReady, setIsReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.updateOptions({
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_STOP,
          TrackPlayer.CAPABILITY_JUMP_FORWARD,
          TrackPlayer.CAPABILITY_JUMP_BACKWARD,
        ],
        jumpInterval: 30,
      });

      setIsReady(true);
    });
  }, []);
  return (
    <UtilityThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        {isReady ? (
          <PlayerContextProvider>
            <NavigationContainer>
              <MainStackNavigator />
            </NavigationContainer>
          </PlayerContextProvider>
        ) : (
          <Box f={1}>
            <ActivityIndicator />
          </Box>
        )}
      </ApolloProvider>
    </UtilityThemeProvider>
  );
};

export default App;
