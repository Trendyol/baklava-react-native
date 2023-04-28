import { ThemeProvider, theme } from '@trendyol/baklava-react-native';
import { Stack } from 'expo-router';

theme.fonts = {
  light: 'Inter-Light',
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
  bold: 'Inter-Bold',
};

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack initialRouteName="(tabs)">
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
