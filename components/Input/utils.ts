export const getPlaceholderText = ({
  label,
  labelFixed,
  placeholder,
  required,
  value,
  focused,
}: {
  label: string | null | undefined;
  labelFixed: boolean | undefined;
  placeholder: string | null | undefined;
  required: boolean;
  value: string | undefined;
  focused: boolean;
}) => {
  if (!label && !placeholder) {
    return '';
  }

  if (!label && placeholder) {
    if (required) {
      return `${placeholder}`;
    } else {
      return `${placeholder} (Optional)`;
    }
  }

  if (label && !placeholder) {
    return '';
  }

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
};

export const getHelpText = ({
  helpText,
  errorText,
  successText,
  errorState,
  successState,
}: {
  helpText: string | null | undefined;
  errorText: string | null | undefined;
  successText: string | null | undefined;
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
  return successState
    ? 'successColor'
    : errorState
    ? 'dangerColor'
    : 'contentSecondary';
};

export const getTextColor = ({
  successState,
  errorState,
}: {
  successState: boolean;
  errorState: boolean;
}) => {
  return successState
    ? 'successColor'
    : errorState
    ? 'dangerColor'
    : 'contentTertiary';
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
    ? 'primaryColor'
    : successState
    ? 'successColor'
    : errorState
    ? 'dangerColor'
    : 'borderColor';
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
    ? 'primaryColor'
    : successState
    ? 'successColor'
    : errorState
    ? 'dangerColor'
    : 'contentTertiary';
};
