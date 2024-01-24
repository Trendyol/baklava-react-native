import React from 'react';
import { render } from '../../test-utils';
import { TextAreaHelpText } from './TextAreaHelpText';

describe('TextArea Help Text', () => {
  let helpText: string | null;
  let errorText: string | null;
  let errorState: boolean;

  test('should render help text correctly', () => {
    // given
    helpText = 'help text';
    errorText = 'error text';
    errorState = false;

    // when
    const { toJSON } = render(
      <TextAreaHelpText
        helpText={helpText}
        errorState={errorState}
        errorText={errorText}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render null when not has help text and error text', () => {
    // given
    helpText = null;
    errorText = null;
    errorState = false;

    // when
    const { toJSON } = render(
      <TextAreaHelpText
        helpText={helpText}
        errorState={errorState}
        errorText={errorText}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render null when not has help text', () => {
    // given
    helpText = '';
    errorText = 'error text';
    errorState = false;

    // when
    const { toJSON } = render(
      <TextAreaHelpText
        helpText={helpText}
        errorState={errorState}
        errorText={errorText}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
