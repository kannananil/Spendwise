import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Completed = () => (
  <View style={styles.container}>
    <Text>Completed Tasks</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
