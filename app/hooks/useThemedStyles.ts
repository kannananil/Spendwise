import { StyleSheet } from 'react-native';
import { useTheme } from './useTheme';

export const useThemedStyles = (styleFactory: (colors: any) => any) => {
  const { colors } = useTheme();
  return StyleSheet.create(styleFactory(colors));
};
