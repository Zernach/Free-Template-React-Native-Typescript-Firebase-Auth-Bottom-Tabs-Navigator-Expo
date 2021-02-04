import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/images/icon.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 210,
    height: 150,
    marginBottom: 0,
  },
});

export default memo(Logo);
