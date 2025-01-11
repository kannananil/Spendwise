import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import { RealmProvider } from '@realm/react';
import { schemas } from './models';
import { Tabs } from './navigation/Tabs';
import { theme } from './styles/theme';

export const AppWrapper = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView style={[
      styles.screen,
      { backgroundColor: isDark ? theme.dark.background : theme.light.background }
    ]}>
      <RealmProvider schema={schemas}>
        <Tabs />
      </RealmProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
