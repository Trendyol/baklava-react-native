import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';

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
  if (!helpText) {
    return null;
  }

  const textColor = successState
    ? 'successColor'
    : errorState
    ? 'dangerColor'
    : 'contentTertiary';

  let content = helpText;

  if (successState) {
    if (successText) {
      content = successText;
    } else {
      content = helpText;
    }
  }

  if (errorState) {
    if (errorText) {
      content = errorText;
    } else {
      content = helpText;
    }
  }

  return (
    <Box mt={2} ml={5}>
      <Text variant="subtitle04Regular" color={textColor}>
        {content}
      </Text>
    </Box>
  );
}
