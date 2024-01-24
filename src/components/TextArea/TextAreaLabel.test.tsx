import React from 'react';
import { render } from '../../test-utils';
import { TextAreaLabel } from './TextAreaLabel';
import { AnimatedViewPropsType, AnimatedTextPropsType } from './types';

describe('TextArea Label', () => {
  let label: string | null;
  let labelFixed: boolean;
  let errorState: boolean;
  let animatedViewProps: AnimatedViewPropsType;
  let animatedTextProps: AnimatedTextPropsType;
  let textAreaHeight: number;

  beforeEach(() => {
    label = 'Label';
    labelFixed = false;
    errorState = false;
    animatedViewProps = {};
    animatedTextProps = {};
    textAreaHeight = 88;
  });

  test('should render null when not has a label', () => {
    // given
    label = null;

    // when
    const { toJSON } = render(
      <TextAreaLabel
        label={label}
        labelFixed={labelFixed}
        errorState={errorState}
        animatedViewProps={animatedViewProps}
        animatedTextProps={animatedTextProps}
        textAreaHeight={textAreaHeight}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render outlined label correctly', () => {
    // when
    const { toJSON } = render(
      <TextAreaLabel
        label={label}
        labelFixed={labelFixed}
        errorState={errorState}
        animatedViewProps={animatedViewProps}
        animatedTextProps={animatedTextProps}
        textAreaHeight={textAreaHeight}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render outlined label with optional correctly', () => {
    // when
    const { toJSON } = render(
      <TextAreaLabel
        label={label}
        labelFixed={labelFixed}
        errorState={errorState}
        animatedViewProps={animatedViewProps}
        animatedTextProps={animatedTextProps}
        textAreaHeight={textAreaHeight}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render fixed label correctly', () => {
    // given
    labelFixed = true;

    // when
    const { toJSON } = render(
      <TextAreaLabel
        label={label}
        labelFixed={labelFixed}
        errorState={errorState}
        animatedViewProps={animatedViewProps}
        animatedTextProps={animatedTextProps}
        textAreaHeight={textAreaHeight}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render fixed label with optional correctly', () => {
    // given
    labelFixed = true;

    // when
    const { toJSON } = render(
      <TextAreaLabel
        label={label}
        labelFixed={labelFixed}
        errorState={errorState}
        animatedViewProps={animatedViewProps}
        animatedTextProps={animatedTextProps}
        textAreaHeight={textAreaHeight}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
