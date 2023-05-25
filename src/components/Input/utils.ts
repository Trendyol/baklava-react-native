export const getPlaceholderText = ({
  label,
  labelFixed,
  placeholder,
  required,
  value,
  focused,
}: {
  label?: string | null;
  labelFixed?: boolean;
  placeholder?: string | null;
  required: boolean;
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
    if (required) {
      return placeholder;
    } else {
      return `${placeholder} (Optional)`;
    }
  }

  if (label && !placeholder) {
    return '';
  }

  return '';
};

export const getHelpText = ({
  helpText,
  errorText,
  successText,
  errorState,
  successState,
}: {
  helpText?: string | null;
  errorText?: string | null;
  successText?: string | null;
  errorState: boolean;
  successState: boolean;
}): string | null | undefined => {
  if (successState) {
    if (successText) {
      return successText;
    } else {
      return helpText;
    }
  }

  if (errorState) {
    if (errorText) {
      return errorText;
    } else {
      return helpText;
    }
  }

  return helpText;
};

export const getLabelColor = ({
  successState,
  errorState,
}: {
  successState: boolean;
  errorState: boolean;
}) => {
  return successState ? 'successKey' : errorState ? 'dangerKey' : 'neutralDark';
};

export const getTextColor = ({
  successState,
  errorState,
}: {
  successState: boolean;
  errorState: boolean;
}) => {
  return successState
    ? 'successKey'
    : errorState
    ? 'dangerKey'
    : 'neutralLight';
};

export const getBorderColor = ({
  focused,
  successState,
  errorState,
}: {
  focused: boolean;
  successState: boolean;
  errorState: boolean;
}) => {
  return focused
    ? 'primaryKey'
    : successState
    ? 'successKey'
    : errorState
    ? 'dangerKey'
    : 'neutralLighter';
};

export const getIconColor = ({
  focused,
  successState,
  errorState,
}: {
  focused: boolean;
  successState: boolean;
  errorState: boolean;
}) => {
  return focused
    ? 'primaryKey'
    : successState
    ? 'successKey'
    : errorState
    ? 'dangerKey'
    : 'neutralLight';
};
