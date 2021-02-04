import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
        screens: {
          TrainingTab: {
            screen: {
              TrainingScreen: 'training',
            },
          },
          HistoryTab: {
            screen: {
              HistoryScreen: 'history',
            },
          },
          ProfileTab: {
            screen: {
              ProfileScreen: 'profile',
            },
          },
          PayTab: {
            screen: {
              PayScreen: 'pay',
            },
          }, 
        }, 
      },

      NotFound: '*',
    }