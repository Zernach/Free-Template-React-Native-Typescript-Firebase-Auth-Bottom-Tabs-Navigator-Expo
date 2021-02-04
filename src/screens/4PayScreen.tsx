// TAB FOUR SCREEN

import * as React from 'react';
import { StyleSheet } from 'react-native';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import { Text, View } from '../../components/Themed';

export default function PayScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refill Your Sessions</Text>
      <View style={styles.separator} lightColor="#777777" darkColor="#777777" />
    </View>
  );
}

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');

// const App = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <MyCheckoutForm />
//     </Elements>
//   );
// };

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
