import React from 'react';
import {Box} from 'react-native-design-utility';
import {theme} from '../../constants/theme';
import {ActivityIndicator} from 'react-native';

const SearchLoading = () => {
  return (
    <Box f={1} center>
      <ActivityIndicator size="large" color={theme.color.blueLight} />
    </Box>
  );
};

export default SearchLoading;
