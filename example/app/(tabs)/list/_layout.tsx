import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'Examples' }} />
      <Stack.Screen name="alert" options={{ headerTitle: 'Alert' }} />
      <Stack.Screen name="box" options={{ headerTitle: 'Box' }} />
      <Stack.Screen name="button" options={{ headerTitle: 'Button' }} />
      <Stack.Screen name="icon" options={{ headerTitle: 'Icon' }} />
      <Stack.Screen name="input" options={{ headerTitle: 'Input' }} />
      <Stack.Screen name="text" options={{ headerTitle: 'Text' }} />
    </Stack>
  );
}
