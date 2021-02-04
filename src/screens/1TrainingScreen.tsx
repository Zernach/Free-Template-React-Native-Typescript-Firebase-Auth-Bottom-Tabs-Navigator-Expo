// TAB ONE SCREEN

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { logoutUser } from "../../api/auth-api";
import Button from "../../components/Button";

export default function TrainingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Firstname!</Text>
      <Text>You have [x] sessions remaining.</Text>
      <View style={styles.separator} lightColor="#777777" darkColor="#777777" />
      <Text style={styles.h3}>[Insert QR Code Here]</Text>
      <Button mode="outlined" color="#1c1c1c" onPress={() => logoutUser()} style={{marginTop: 50,  width: "80%"}}>Logout</Button>
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
