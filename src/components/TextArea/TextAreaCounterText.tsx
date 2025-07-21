import React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { getCounterText, getTextColor } from './utils';

export const TextAreaCounterText = React.memo(
  ({
    counterText,
    errorState,
    maxLength,
  }: {
    counterText?: number;
    errorState: boolean;
    maxLength: number;
  }): JSX.Element | null => {
    const textColor = getTextColor({ errorState });

    const content = getCounterText({
      counterText,
      errorState,
    });

    return (
      <Box mt="3xs" ml="m">
        <Text variant="subtitle04Regular" color={textColor}>
          {`${content}/${maxLength}`}
        </Text>
      </Box>
    );
  },
);
