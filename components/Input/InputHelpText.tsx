import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { getHelpText, getTextColor } from './utils';

export function InputHelpText({
  helpText,
  successState,
  errorState,
  errorText,
  successText,
}: {
  helpText: string | null | undefined;
  errorState: boolean;
  errorText: string | null | undefined;
  successState: boolean;
  successText: string | null | undefined;
}): JSX.Element | null {
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
    <Box mt={2} ml={5}>
      <Text variant="subtitle04Regular" color={textColor}>
        {content}
      </Text>
    </Box>
  ) : null;
}
