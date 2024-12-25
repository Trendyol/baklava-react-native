import React from 'react';
import { render } from '../../test-utils';
import { InputLabel } from './InputLabel';
import { AnimatedViewPropsType, AnimatedTextPropsType } from './types';

describe('Input Label', () => {
  let label: string | null;
  let labelFixed: boolean;
  let errorState: boolean;
  let successState: boolean;
  let animatedViewProps: AnimatedViewPropsType;
  let animatedTextProps: AnimatedTextPropsType;
  let inputHeight: number;

  beforeEach(() => {
    label = 'Label';
    labelFixed = false;
    errorState = false;
    successState = false;
    animatedViewProps = {};
    animatedTextProps = {};
    inputHeight = 48;
  });

  test('should render null when not has a label', () => {
    // given
    label = null;

    // when
    const { toJSON } = render(
      <InputLabel
        label={label}
        labelFixed={labelFixed}
        errorState={errorState}
        successState={successState}
        animatedViewProps={animatedViewProps}
        animatedTextProps={animatedTextProps}
        inputHeight={inputHeight}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render outlined label correctly', () => {
    // when
    const { toJSON } = render(
      <InputLabel
        label={label}
        labelFixed={labelFixed}
        errorState={errorState}
        successState={successState}
        animatedViewProps={animatedViewProps}
        animatedTextProps={animatedTextProps}
        inputHeight={inputHeight}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render outlined label with optional correctly', () => {
    // when
    const { toJSON } = render(
      <InputLabel
        label={label}
        labelFixed={labelFixed}
        errorState={errorState}
        successState={successState}
        animatedViewProps={animatedViewProps}
        animatedTextProps={animatedTextProps}
        inputHeight={inputHeight}
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
      <InputLabel
        label={label}
        labelFixed={labelFixed}
        errorState={errorState}
        successState={successState}
        animatedViewProps={animatedViewProps}
        animatedTextProps={animatedTextProps}
        inputHeight={inputHeight}
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
      <InputLabel
        label={label}
        labelFixed={labelFixed}
        errorState={errorState}
        successState={successState}
        animatedViewProps={animatedViewProps}
        animatedTextProps={animatedTextProps}
        inputHeight={inputHeight}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });
});
