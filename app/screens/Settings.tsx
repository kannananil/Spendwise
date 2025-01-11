import React from 'react';
import { View, Text } from 'react-native';
import { useThemedStyles } from '../hooks/useThemedStyles';

export const Settings = () => {
  const styles = useThemedStyles((colors) => ({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }));

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
}
