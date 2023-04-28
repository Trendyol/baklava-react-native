import { Box, Icon, Text } from '@trendyol/baklava-react-native';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs initialRouteName="list" screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="list"
        options={{
          tabBarLabel: ({ focused }) => (
            <Box px="m">
              <Text
                variant="captionMedium"
                color={focused ? 'primaryColor' : 'secondaryColor'}>
                Examples
              </Text>
            </Box>
          ),
          tabBarIcon: ({ focused }) => (
            <Icon
              name="listing"
              color={focused ? 'primaryColor' : 'secondaryColor'}
              size="m"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarLabel: ({ focused }) => (
            <Box px="m">
              <Text
                variant="captionMedium"
                color={focused ? 'primaryColor' : 'secondaryColor'}>
                About
              </Text>
            </Box>
          ),
          tabBarIcon: ({ focused }) => (
            <Icon
              name="info"
              color={focused ? 'primaryColor' : 'secondaryColor'}
              size="m"
            />
          ),
        }}
      />
    </Tabs>
  );
}
