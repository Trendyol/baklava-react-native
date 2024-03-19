import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import Button from '../Button/Button';
import Text from '../Text/Text';
import Toast from './Toast';
import ToastView from './ToastView';
import { ToastVariants, ToastDurations } from './types';
import Input from '../Input/Input';
import Box from '../Box/Box';

const ToastMeta: ComponentMeta<typeof ToastView> = {
  title: 'Toast',
  component: ToastView,
};

export default ToastMeta;

type ToastStory = ComponentStory<typeof ToastView>;

export const Basic: ToastStory = () => {
  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Toast
      </Text>
      <Button
        variant="primary"
        kind="neutral"
        label="Show DEFAULT toast"
        filled
        m="2xs"
        onPress={() =>
          Toast.show({
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          })
        }
      />
      <Button
        variant="primary"
        kind="success"
        label="Show SUCCESS toast"
        filled
        m="2xs"
        onPress={() =>
          Toast.show({
            variant: 'success',
            text: 'This is a SUCCESS toast',
          })
        }
      />
      <Button
        variant="primary"
        kind="danger"
        label="Show ERROR toast"
        filled
        m="2xs"
        onPress={() =>
          Toast.show({
            variant: 'error',
            text: 'This is an ERROR toast',
          })
        }
      />
      <Button
        variant="primary"
        label="Show WARNING toast"
        filled
        m="2xs"
        onPress={() =>
          Toast.show({
            variant: 'warning',
            text: 'This is an WARNING toast',
          })
        }
      />
      <Box m="2xs">
        <Input placeholder="Focus to show keyboard" />
      </Box>
    </>
  );
};

export const WithAction: ToastStory = () => {
  return (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Toast with action
      </Text>
      <Button
        variant="primary"
        kind="neutral"
        label="Show DEFAULT toast with action"
        filled
        m="2xs"
        onPress={() =>
          Toast.show({
            variant: ToastVariants.DEFAULT,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            duration: ToastDurations.SHORT,
            action: close => {
              close();
            },
            actionText: 'Action',
          })
        }
      />
      <Button
        variant="primary"
        kind="success"
        label="Show SUCCESS toast with action"
        filled
        m="2xs"
        onPress={() =>
          Toast.show({
            variant: ToastVariants.SUCCESS,
            text: 'This is a SUCCESS toast with action',
            duration: ToastDurations.SHORT,
            action: close => {
              close();
            },
            actionText: 'Action',
          })
        }
      />
      <Button
        variant="primary"
        kind="danger"
        label="Show ERROR toast with action"
        filled
        m="2xs"
        onPress={() =>
          Toast.show({
            variant: ToastVariants.ERROR,
            text: 'This is an ERROR toast with action',
            duration: ToastDurations.SHORT,
            action: close => {
              close();
            },
            actionText: 'Action',
          })
        }
      />
      <Button
        variant="primary"
        label="Show WARNING toast with action"
        filled
        m="2xs"
        onPress={() =>
          Toast.show({
            variant: ToastVariants.WARNING,
            text: 'This is a WARNING toast with action',
            duration: ToastDurations.SHORT,
            action: close => {
              close();
            },
            actionText: 'Action',
          })
        }
      />
      <Box m="2xs">
        <Input placeholder="Focus to show keyboard" />
      </Box>
    </>
  );
};
