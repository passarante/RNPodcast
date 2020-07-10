import React from 'react';
import {SearchQuery_search} from 'src/types/graphql';
import {Box, Text} from 'react-native-design-utility';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface Props {
  item: SearchQuery_search;
}

const SearchTile: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  return (
    <Box h={90} dir="row" align="center" px="sm">
      <Box h={70} w={70} bg="blueLight" radius={10} mr={10}>
        <Image source={{uri: props.item.thumbnail}} style={styles.img} />
      </Box>
      <Box f={1}>
        <Text bold numberOfLines={1}>
          {props.item.podcastName}
        </Text>
        <Text size="xs" color="grey">
          {' '}
          {props.item.artist}
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PodcastDetails', {data: props.item})
          }>
          <Text size="xs" color="blueLight">
            {props.item.episodesCount} episodes
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default SearchTile;
const styles = StyleSheet.create({
  img: {
    flex: 1,
    borderRadius: 10,
  },
});
