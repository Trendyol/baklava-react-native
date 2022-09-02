import React from 'react';
import { render } from '../../src/testUtils';
import { InputHelpText } from './InputHelpText';

describe('Input Help Text', () => {
  let helpText: string | null;
  let errorText: string | null;
  let successText: string | null;
  let errorState: boolean;
  let successState: boolean;

  test('should render help text correctly', () => {
    // given
    helpText = 'help text';
    errorText = 'error text';
    successText = 'success text';
    errorState = false;
    successState = false;

    // when
    const { toJSON } = render(
      <InputHelpText
        helpText={helpText}
        successState={successState}
        errorState={errorState}
        errorText={errorText}
        successText={successText}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render null when not has help text, error text and success text', () => {
    // given
    helpText = null;
    errorText = null;
    successText = null;
    errorState = false;
    successState = false;

    // when
    const { toJSON } = render(
      <InputHelpText
        helpText={helpText}
        successState={successState}
        errorState={errorState}
        errorText={errorText}
        successText={successText}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render null when not has help text', () => {
    // given
    helpText = '';
    errorText = 'error text';
    successText = 'success text';
    errorState = false;
    successState = false;

    // when
    const { toJSON } = render(
      <InputHelpText
        helpText={helpText}
        successState={successState}
        errorState={errorState}
        errorText={errorText}
        successText={successText}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
