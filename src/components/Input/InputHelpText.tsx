import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { getHelpText, getTextColor } from './utils';

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
      <Box mt="3xs">
        <Text variant="subtitle04Regular" color={textColor} textAlign="left">
          {content}
        </Text>
      </Box>
    ) : null;
  },
);
