import { useColorScheme } from 'react-native';
import { theme } from '../styles/theme';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  return {
    isDark,
    colors: isDark ? theme.dark : theme.light
  };
};
