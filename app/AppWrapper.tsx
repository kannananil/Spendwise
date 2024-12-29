import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import colors from './styles/colors';
import {App} from './App';

import {RealmProvider} from '@realm/react';
import {schemas} from './models';

export const AppWrapper = () => {
  // If sync is disabled, setup the app without any sync functionality and return early
  return (
    <SafeAreaView style={styles.screen}>
      <RealmProvider schema={schemas}>
        <App />
      </RealmProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
