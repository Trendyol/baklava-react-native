import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { getHelpText, getTextColor } from './utils';
import { I18nManager } from 'react-native';

const isRTL = I18nManager.isRTL;

export const InputHelpText = React.memo(
  ({
    helpText,
    successState,
    errorState,
    errorText,
    successText,
  }: {
    helpText?: string | null;
    errorState: boolean;
    errorText?: string | null;
    successState: boolean;
    successText?: string | null;
  }): JSX.Element | null => {
    if (!helpText && !errorText && !successText) {
      return null;
    }

    const textColor = getTextColor({ errorState, successState });

    const content = getHelpText({
      helpText,
      errorText,
      successText,
      errorState,
      successState,
    });

    return content ? (
      <Box mt="3xs" ml="m">
        <Text
          variant="subtitle04Regular"
          color={textColor}
          textAlign={isRTL ? 'left' : 'right'}>
          {content}
        </Text>
      </Box>
    ) : null;
  },
);
