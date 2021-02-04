// TAB TWO SCREEN

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sessions / Payments</Text>
      <View style={styles.separator} lightColor="#777777" darkColor="#777777" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
