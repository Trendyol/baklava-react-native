import { useCallback, useEffect, useState } from 'react';
import { Redirect, SplashScreen } from 'expo-router';
import * as Font from 'expo-font';
import { View } from 'react-native';
import { ThemeProvider, theme } from '@trendyol/baklava-react-native';

const Index = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
          'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
          'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
          'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
          'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View onLayout={onLayoutRootView}>
        <Redirect href="/list" />
      </View>
    </ThemeProvider>
  );
};

export default Index;
