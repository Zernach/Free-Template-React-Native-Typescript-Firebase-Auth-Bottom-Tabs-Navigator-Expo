// TAB THREE SCREEN

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Quote</Text>
      <View style={styles.separator} lightColor="#777777" darkColor="#777777" />
      <Text style={styles.h2}>Firstname Lastname</Text>
      <Text style={styles.h2}>email@email.com</Text>
      <Text style={styles.h2}>123-456-7890</Text>
      <Text style={styles.h2}></Text>
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
