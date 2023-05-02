import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider, theme } from '@trendyol/baklava-react-native';
import AppNavigator from './src/index';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
