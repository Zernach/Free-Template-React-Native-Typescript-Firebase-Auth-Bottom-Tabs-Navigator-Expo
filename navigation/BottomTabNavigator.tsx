// IMPORT DEPENDENCIES
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

// IMPORT SCREENS
import TrainingScreen from '../src/screens/1TrainingScreen';
import HistoryScreen from '../src/screens/2HistoryScreen';
import ProfileScreen from '../src/screens/3ProfileScreen';
import PayScreen from '../src/screens/4PayScreen';

// IMPORT OTHERS
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
  TabFourParamList
} from '../types';
import { Header } from 'react-native/Libraries/NewAppScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TRAINING"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }} >
      <BottomTab.Screen
        name="TRAINING"
        component={QRCodeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="barbell-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="HISTORY"
        component={HistoryNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="time-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="PROFILE"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-circle-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="PAY"
        component={PayNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="card-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function QRCodeNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TrainingScreen"
        component={TrainingScreen}
        options={{headerShown: false}}
        //{{ headerTitle: 'TRAINING' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function HistoryNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function ProfileNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function PayNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="PayScreen"
        component={PayScreen}
        options={{ headerShown: false }}
      />
    </TabFourStack.Navigator>
  );
}