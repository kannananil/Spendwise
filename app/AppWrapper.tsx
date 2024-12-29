import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import colors from './styles/colors';
import {RealmProvider} from '@realm/react';
import {schemas} from './models';
import {Tabs} from './navigation/Tabs';

export const AppWrapper = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <RealmProvider schema={schemas}>
        <Tabs />
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
