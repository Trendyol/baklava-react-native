import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Box, Icon, Text } from '@trendyol/baklava-react-native';
import AboutScreen from './about';
import ListScreen from './list/index';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <Tab.Navigator
      initialRouteName="list"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="list"
        component={ListScreen}
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
      <Tab.Screen
        name="about"
        component={AboutScreen}
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
    </Tab.Navigator>
  );
}
