import React from 'react';
import {Box, Text} from 'react-native-design-utility';
import {TextInput, StyleSheet, FlatList} from 'react-native';
import {theme} from '../../constants/theme';
import KeyboardDismissView from '../KeyboardDismissView';

const SearchScreen = () => {
  return (
    <KeyboardDismissView>
      <Box f={1} bg="white">
        <Box h={50} w="100%" px="sm" my="sm">
          <TextInput
            style={styles.input}
            selectionColor={theme.color.blueLight}
            placeholder="Search Podcast"
          />
        </Box>
        <FlatList
          style={styles.list}
          data={[{id: 1}, {id: 2}]}
          renderItem={() => (
            <Box h={90} dir="row" align="center" px="sm">
              <Box h={70} w={70} bg="blueLight" radius={10} mr={10} />
              <Box>
                <Text bold>Joe Rogan</Text>
                <Text size="xs" color="grey">
                  This is the subtitle
                </Text>
                <Text size="xs" color="blueLight">
                  400 episodes
                </Text>
              </Box>
            </Box>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </Box>
    </KeyboardDismissView>
  );
};

export default SearchScreen;
const styles = StyleSheet.create({
  input: {
    height: 40,
    flex: 1,
    backgroundColor: theme.color.greyLightest,
    borderRadius: 10,
    paddingHorizontal: theme.space.sm,
    fontSize: theme.text.size.md,
  },
  list: {
    minHeight: '100%',
  },
});
