import React, {useState} from 'react';
import {Box, Text} from 'react-native-design-utility';
import {TextInput, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {theme} from '../../constants/theme';
import {useLazyQuery} from '@apollo/react-hooks';
import {
  SearchQuery,
  SearchQuery_search,
  SearchQueryVariables,
} from '../../types/graphql';
import searchQuery from '../../graphql/query/searchQuery';
import SearchEmpty from './SearchEmpty';
import SearchTile from './SearchTile';
import SearchLoading from './SearchLoading';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [search, {data, loading, error}] = useLazyQuery<
    SearchQuery,
    SearchQueryVariables
  >(searchQuery);

  const onSearch = async () => {
    try {
      await search({variables: {term}});
    } catch (error) {}
  };

  return (
    <Box f={1} bg="white">
      <Box h={50} w="100%" px="sm" my="sm">
        <Box
          dir="row"
          align="center"
          h={40}
          bg="greyLightest"
          radius={10}
          px="sm">
          <Box mr={10}>
            <FeatherIcon name="search" size={20} color={theme.color.greyDark} />
          </Box>
          <TextInput
            style={styles.input}
            selectionColor={theme.color.blueLight}
            onChangeText={setTerm}
            autoCorrect={false}
            onSubmitEditing={onSearch}
            value={term}
            placeholder="Search Podcast"
          />
        </Box>
      </Box>
      {error ? (
        <Box f={1} center>
          <Text color="red">{error.message}</Text>
        </Box>
      ) : (
        <FlatList<SearchQuery_search>
          contentContainerStyle={styles.listContentContainer}
          ListHeaderComponent={<>{loading && <SearchLoading />}</>}
          ListEmptyComponent={<>{!loading && <SearchEmpty />}</>}
          data={data?.search ?? []}
          keyboardShouldPersistTaps="never"
          renderItem={({item}) => <SearchTile item={item} />}
          keyExtractor={(item) => String(item.feedUrl)}
        />
      )}
    </Box>
  );
};

export default SearchScreen;
const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: theme.text.size.md,
  },

  listContentContainer: {
    paddingBottom: 90,
  },
  img: {
    flex: 1,
    borderRadius: 10,
  },
});
