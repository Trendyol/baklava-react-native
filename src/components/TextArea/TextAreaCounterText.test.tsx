import React from 'react';
import { render } from '../../test-utils';
import { TextAreaCounterText } from './TextAreaCounterText';

describe('TextArea Counter Text', () => {
  let counterText: number;
  let errorState: boolean;
  const DEFAULT_MAX_LENGTH = 200;

  test('should render counter text correctly', () => {
    // given
    counterText = 0;
    errorState = false;

    // when
    const { toJSON } = render(
      <TextAreaCounterText
        counterText={counterText}
        errorState={errorState}
        maxLength={DEFAULT_MAX_LENGTH}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render null when not has error text', () => {
    // given
    counterText = 0;
    errorState = false;

    // when
    const { toJSON } = render(
      <TextAreaCounterText
        counterText={counterText}
        errorState={errorState}
        maxLength={DEFAULT_MAX_LENGTH}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render with custom maxLength', () => {
    // given
    counterText = 0;
    errorState = false;
    const customMaxLength = 500;

    // when
    const { toJSON } = render(
      <TextAreaCounterText
        counterText={counterText}
        errorState={errorState}
        maxLength={customMaxLength}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
