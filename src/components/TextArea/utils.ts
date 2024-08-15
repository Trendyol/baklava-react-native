export const getPlaceholderText = ({
  label,
  labelFixed,
  placeholder,
  value,
  focused,
}: {
  label?: string | null;
  labelFixed?: boolean;
  placeholder?: string | null;
  value?: string;
  focused: boolean;
}) => {
  if (label && placeholder) {
    if (labelFixed) {
      return placeholder;
    }

    if (!value && !focused) {
      return '';
    }

    if (value && focused) {
      return '';
    } else {
      return placeholder;
    }
  }

  if (!label && placeholder) {
    return placeholder;
  }

  if (label && !placeholder) {
    return '';
  }

  return '';
};

export const getHelpText = ({
  helpText,
  errorText,
  errorState,
}: {
  helpText?: string | null;
  errorText?: string | null;
  errorState: boolean;
}): string | null | undefined => {
  if (errorState) {
    if (errorText) {
      return errorText;
    } else {
      return helpText;
    }
  }
  return helpText;
};

export const getCounterText = ({
  counterText,
  errorText,
  errorState,
}: {
  counterText?: number;
  errorText?: string | null;
  errorState: boolean;
}): string | null | undefined | number => {
  if (errorState) {
    if (errorText) {
      return errorText;
    } else {
      return counterText;
    }
  }
  return counterText;
};

export const getLabelColor = ({ errorState }: { errorState: boolean }) => {
  return errorState ? 'dangerKey' : 'neutralDark';
};

export const getTextColor = ({ errorState }: { errorState: boolean }) => {
  return errorState ? 'dangerKey' : 'neutralLight';
};

export const getBorderColor = ({
  focused,
  errorState,
}: {
  focused: boolean;
  errorState: boolean;
}) => {
  return errorState ? 'dangerKey' : focused ? 'primaryKey' : 'neutralLighter';
};
