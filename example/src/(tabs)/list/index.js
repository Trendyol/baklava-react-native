import { createStackNavigator } from '@react-navigation/stack';
import List from './list';
import Alert from './alert';
import Box from './box';
import Button from './button';
import Icon from './icon';
import Input from './input';
import Text from './text';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={List}
        options={{ headerTitle: 'Examples' }}
      />
      <Stack.Screen
        name="alert"
        component={Alert}
        options={{ headerTitle: 'Alert' }}
      />
      <Stack.Screen
        name="box"
        component={Box}
        options={{ headerTitle: 'Box' }}
      />
      <Stack.Screen
        name="button"
        component={Button}
        options={{ headerTitle: 'Button' }}
      />
      <Stack.Screen
        name="icon"
        component={Icon}
        options={{ headerTitle: 'Icon' }}
      />
      <Stack.Screen
        name="input"
        component={Input}
        options={{ headerTitle: 'Input' }}
      />
      <Stack.Screen
        name="text"
        component={Text}
        options={{ headerTitle: 'Text' }}
      />
    </Stack.Navigator>
  );
}
