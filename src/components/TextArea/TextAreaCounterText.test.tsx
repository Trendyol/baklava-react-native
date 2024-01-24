import React from 'react';
import { render } from '../../test-utils';
import { TextAreaCounterText } from './TextAreaCounterText';

describe('TextArea Counter Text', () => {
  let counterText: number;
  let errorState: boolean;

  test('should render counter text correctly', () => {
    // given
    counterText = 0;
    errorState = false;

    // when
    const { toJSON } = render(
      <TextAreaCounterText counterText={counterText} errorState={errorState} />,
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
      <TextAreaCounterText counterText={counterText} errorState={errorState} />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
