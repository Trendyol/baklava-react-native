import React from 'react';
import { fireEvent, render } from '../../src/testUtils';
import { IconNameType } from '../Icon/types';
import { InputIcon } from './InputIcon';

describe('Input Icon', () => {
  let errorState: boolean;
  let successState: boolean;
  let secureTextEntry: boolean;
  let icon: IconNameType | null;
  let variantIconName: string | null;
  let focused: boolean;
  let passwordVisibilityIcon: IconNameType;
  let handlePasswordVisibility: () => void;

  test('should render icon correctly', () => {
    // given
    secureTextEntry = false;
    icon = 'help';
    variantIconName = null;
    focused = false;
    errorState = false;
    successState = false;
    passwordVisibilityIcon = 'eye-on';
    handlePasswordVisibility = jest.fn();

    // when
    const { toJSON } = render(
      <InputIcon
        secureTextEntry={secureTextEntry}
        icon={icon}
        variantIconName={variantIconName}
        focused={focused}
        errorState={errorState}
        successState={successState}
        passwordVisibilityIcon={passwordVisibilityIcon}
        handlePasswordVisibility={handlePasswordVisibility}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render null when not have icon and variantIconName', () => {
    // given
    secureTextEntry = false;
    icon = null;
    variantIconName = null;
    focused = false;
    errorState = false;
    successState = false;
    passwordVisibilityIcon = 'eye-on';
    handlePasswordVisibility = jest.fn();

    // when
    const { toJSON } = render(
      <InputIcon
        secureTextEntry={secureTextEntry}
        icon={icon}
        variantIconName={variantIconName}
        focused={focused}
        errorState={errorState}
        successState={successState}
        passwordVisibilityIcon={passwordVisibilityIcon}
        handlePasswordVisibility={handlePasswordVisibility}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render eye icon when secureTextEntry true', () => {
    // given
    secureTextEntry = true;
    icon = null;
    variantIconName = null;
    focused = false;
    errorState = false;
    successState = false;
    passwordVisibilityIcon = 'eye-on';
    handlePasswordVisibility = jest.fn();

    // when
    const { toJSON } = render(
      <InputIcon
        secureTextEntry={secureTextEntry}
        icon={icon}
        variantIconName={variantIconName}
        focused={focused}
        errorState={errorState}
        successState={successState}
        passwordVisibilityIcon={passwordVisibilityIcon}
        handlePasswordVisibility={handlePasswordVisibility}
      />,
    );

    // then
    expect(toJSON()).toMatchSnapshot();
  });

  test('should press password visibility button', () => {
    // given
    secureTextEntry = true;
    icon = null;
    variantIconName = null;
    focused = false;
    errorState = false;
    successState = false;
    passwordVisibilityIcon = 'eye-on';
    handlePasswordVisibility = jest.fn();

    // when
    const { getByTestId } = render(
      <InputIcon
        secureTextEntry={secureTextEntry}
        icon={icon}
        variantIconName={variantIconName}
        focused={focused}
        errorState={errorState}
        successState={successState}
        passwordVisibilityIcon={passwordVisibilityIcon}
        handlePasswordVisibility={handlePasswordVisibility}
      />,
    );

    const button = getByTestId('password-visibility-button');
    fireEvent.press(button);

    // then
    expect(handlePasswordVisibility).toBeCalledTimes(1);
  });
});
