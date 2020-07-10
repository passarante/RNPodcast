import React from 'react';
import {Text, Box} from 'react-native-design-utility';
import {RouteProp, useRoute} from '@react-navigation/native';
import {SearchStackRouteParamsList} from 'src/navigators/types';
import {FlatList, Image, StyleSheet} from 'react-native';

type NavigationParams = RouteProp<SearchStackRouteParamsList, 'PodcastDetails'>;

const PodcastDetailsScreen = () => {
  const {data} = useRoute<NavigationParams>().params ?? {};

  return (
    <Box f={1} bg="white">
      <FlatList
        ListHeaderComponent={
          <>
            <Box dir="row" px="sm" mt="sm" mb="md">
              {data.thumbnail && (
                <Box mr={10}>
                  <Image source={{uri: data.thumbnail}} style={styles.img} />
                </Box>
              )}
              <Box f={1}>
                <Text size="lg" bold>
                  {data.podcastName}
                </Text>
                <Text size="xs" color="grey">
                  {data.artist}
                </Text>
                <Text color="blueLight" size="xs">
                  Subscribed
                </Text>
              </Box>
            </Box>
            <Box px="sm" mb="md">
              <Text>Play last episode</Text>
            </Box>
            <Box px="sm" mb="md">
              <Text bold size="lg">
                Episodes
              </Text>
            </Box>
          </>
        }
        data={[{id: '1'}, {id: '2'}]}
        ItemSeparatorComponent={() => (
          <Box w="100%" px="sm" my="sm">
            <Box style={{height: StyleSheet.hairlineWidth}} bg="grey" />
          </Box>
        )}
        renderItem={() => (
          <Box px="sm">
            <Text size="xs" color="grey">
              FRIDAY
            </Text>
            <Text bold>#400 - The Title</Text>
            <Text size="sm" color="grey" numberOfLines={2}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Text>
            <Text size="sm" color="grey">
              3hrs. 13min
            </Text>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default PodcastDetailsScreen;
const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
});
