import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { getHelpText, getTextColor } from './utils';

export const TextAreaHelpText = React.memo(
  ({
    helpText,
    errorState,
    errorText,
  }: {
    helpText?: string | null;
    errorState: boolean;
    errorText?: string | null;
  }): JSX.Element | null => {
    if (!helpText && !errorText) {
      return null;
    }

    const textColor = getTextColor({ errorState });

    const content = getHelpText({
      helpText,
      errorText,
      errorState,
    });

    return content ? (
      <Box mt="3xs">
        <Text variant="subtitle04Regular" color={textColor}>
          {content}
        </Text>
      </Box>
    ) : null;
  },
);
