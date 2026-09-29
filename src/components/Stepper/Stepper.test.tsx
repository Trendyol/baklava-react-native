import React from 'react';
import { I18nManager } from 'react-native';
import theme from '../../theme';
import { render } from '../../test-utils';
import Stepper from './Stepper';

const setIsRTL = (isRTL: boolean) => {
  Object.defineProperty(I18nManager, 'isRTL', {
    configurable: true,
    value: isRTL,
  });
};

describe('Stepper', () => {
  afterEach(() => {
    setIsRTL(false);
  });
  test('should render Stepper correctly', () => {
    const { toJSON } = render(
      <Stepper
        currentStep={2}
        totalSteps={4}
        stepTitle="Contact Information"
        nextStepTitle="Payment Information"
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  test('should render step 2/4 with correct bar states', () => {
    const { getByTestId } = render(
      <Stepper
        currentStep={2}
        totalSteps={4}
        stepTitle="Contact Information"
        nextStepTitle="Payment Information"
      />,
    );

    expect(getByTestId('stepper-bar-0').props.style[0].backgroundColor).toBe(
      theme.colors.successKey,
    );
    expect(getByTestId('stepper-bar-1').props.style[0].backgroundColor).toBe(
      theme.colors.primaryKey,
    );
    expect(getByTestId('stepper-bar-2').props.style[0].backgroundColor).toBe(
      theme.colors.neutralLightest,
    );
    expect(getByTestId('stepper-bar-3').props.style[0].backgroundColor).toBe(
      theme.colors.neutralLightest,
    );
  });

  test('should render stepStates override with error state', () => {
    const { getByTestId } = render(
      <Stepper
        currentStep={3}
        totalSteps={4}
        stepTitle="Payment Information"
        stepStates={['success', 'error', 'active', 'default']}
      />,
    );

    expect(getByTestId('stepper-bar-0').props.style[0].backgroundColor).toBe(
      theme.colors.successKey,
    );
    expect(getByTestId('stepper-bar-1').props.style[0].backgroundColor).toBe(
      theme.colors.dangerKey,
    );
    expect(getByTestId('stepper-bar-2').props.style[0].backgroundColor).toBe(
      theme.colors.primaryKey,
    );
    expect(getByTestId('stepper-bar-3').props.style[0].backgroundColor).toBe(
      theme.colors.neutralLightest,
    );
  });

  test('should render default step label prefix', () => {
    const { getByTestId } = render(
      <Stepper
        currentStep={2}
        totalSteps={4}
        stepTitle="Contact Information"
      />,
    );

    expect(getByTestId('stepper-stepLabelPrefix').props.children).toBe('Step');
    expect(getByTestId('stepper-stepLabel').props.children).toBe(2);
    expect(getByTestId('stepper-stepCount').props.children).toBe('/4:');
  });

  test('should render step label with medium weight and step count with regular weight', () => {
    const { getByTestId } = render(
      <Stepper
        currentStep={2}
        totalSteps={4}
        stepTitle="Contact Information"
      />,
    );

    const stepLabelPrefix = getByTestId('stepper-stepLabelPrefix');
    const stepLabel = getByTestId('stepper-stepLabel');
    const stepCount = getByTestId('stepper-stepCount');

    expect(stepLabelPrefix.props.style[0].fontWeight).toBe(
      theme.textVariants.subtitle2Medium.fontWeight,
    );
    expect(stepLabelPrefix.props.style[0].color).toBe(
      theme.colors.neutralDarker,
    );
    expect(stepLabel.props.style[0].fontWeight).toBe(
      theme.textVariants.subtitle2Medium.fontWeight,
    );
    expect(stepLabel.props.style[0].color).toBe(theme.colors.neutralDarker);
    expect(stepCount.props.style[0].fontWeight).toBe(
      theme.textVariants.subtitle2Regular.fontWeight,
    );
    expect(stepCount.props.style[0].color).toBe(theme.colors.neutralLight);
  });

  test('should render custom step label prefix', () => {
    const { getByTestId } = render(
      <Stepper
        currentStep={2}
        totalSteps={4}
        stepTitle="Contact Information"
        stepLabelPrefix="Step"
      />,
    );

    expect(getByTestId('stepper-stepLabelPrefix').props.children).toBe('Step');
    expect(getByTestId('stepper-stepLabel').props.children).toBe(2);
    expect(getByTestId('stepper-stepCount').props.children).toBe('/4:');
  });

  test('should render next step hint with default prefix', () => {
    const { getByTestId } = render(
      <Stepper
        currentStep={2}
        totalSteps={4}
        stepTitle="Contact Information"
        nextStepTitle="Payment Information"
      />,
    );

    expect(getByTestId('stepper-nextStepLabel').props.children).toBe('Next:');
    expect(getByTestId('stepper-nextStepTitle').props.children).toBe(
      'Payment Information',
    );
  });

  test('should render custom next step label prefix', () => {
    const { getByTestId } = render(
      <Stepper
        currentStep={2}
        totalSteps={4}
        stepTitle="Contact Information"
        nextStepTitle="Payment Information"
        nextStepLabelPrefix="Next"
      />,
    );

    expect(getByTestId('stepper-nextStepLabel').props.children).toBe('Next:');
    expect(getByTestId('stepper-nextStepTitle').props.children).toBe(
      'Payment Information',
    );
  });

  test('should not render next step hint when showNextStep is false', () => {
    const { queryByTestId } = render(
      <Stepper
        currentStep={2}
        totalSteps={4}
        stepTitle="Contact Information"
        nextStepTitle="Payment Information"
        showNextStep={false}
      />,
    );

    expect(queryByTestId('stepper-nextStep')).toBeNull();
  });

  test('should not render next step hint on last step', () => {
    const { queryByTestId } = render(
      <Stepper
        currentStep={4}
        totalSteps={4}
        stepTitle="Confirmation"
        nextStepTitle="Payment Information"
      />,
    );

    expect(queryByTestId('stepper-nextStep')).toBeNull();
  });

  test('should not render next step hint when nextStepTitle is not given', () => {
    const { queryByTestId } = render(
      <Stepper
        currentStep={2}
        totalSteps={4}
        stepTitle="Contact Information"
      />,
    );

    expect(queryByTestId('stepper-nextStep')).toBeNull();
  });

  test('should render correct number of bars for different totalSteps', () => {
    const { getByTestId, queryByTestId } = render(
      <Stepper currentStep={1} totalSteps={5} stepTitle="Step 1" />,
    );

    expect(getByTestId('stepper-bar-0')).toBeTruthy();
    expect(getByTestId('stepper-bar-4')).toBeTruthy();
    expect(queryByTestId('stepper-bar-5')).toBeNull();
  });

  test('should use custom testID prefix', () => {
    const { getByTestId } = render(
      <Stepper
        testID="checkout"
        currentStep={2}
        totalSteps={4}
        stepTitle="Contact Information"
      />,
    );

    expect(getByTestId('checkout')).toBeTruthy();
    expect(getByTestId('checkout-header')).toBeTruthy();
    expect(getByTestId('checkout-stepLabelPrefix')).toBeTruthy();
    expect(getByTestId('checkout-stepLabel')).toBeTruthy();
    expect(getByTestId('checkout-stepCount')).toBeTruthy();
    expect(getByTestId('checkout-stepTitle')).toBeTruthy();
    expect(getByTestId('checkout-bars')).toBeTruthy();
    expect(getByTestId('checkout-bar-0')).toBeTruthy();
  });

  test('should clamp currentStep below 1', () => {
    const { getByTestId } = render(
      <Stepper
        currentStep={0}
        totalSteps={4}
        stepTitle="Contact Information"
      />,
    );

    expect(getByTestId('stepper-stepLabel').props.children).toBe(1);
    expect(getByTestId('stepper-stepCount').props.children).toBe('/4:');
    expect(getByTestId('stepper-bar-0').props.style[0].backgroundColor).toBe(
      theme.colors.primaryKey,
    );
  });

  test('should clamp currentStep above totalSteps', () => {
    const { getByTestId } = render(
      <Stepper currentStep={5} totalSteps={4} stepTitle="Confirmation" />,
    );

    expect(getByTestId('stepper-stepLabel').props.children).toBe(4);
    expect(getByTestId('stepper-stepCount').props.children).toBe('/4:');
    expect(getByTestId('stepper-bar-3').props.style[0].backgroundColor).toBe(
      theme.colors.primaryKey,
    );
  });

  test('should render step title with correct variant', () => {
    const { getByTestId } = render(
      <Stepper
        currentStep={2}
        totalSteps={4}
        stepTitle="Contact Information"
      />,
    );

    const stepTitle = getByTestId('stepper-stepTitle');

    expect(stepTitle.props.children).toBe('Contact Information');
    expect(stepTitle.props.style[0].fontSize).toBe(
      theme.textVariants.subtitle2Medium.fontSize,
    );
    expect(stepTitle.props.style[0].fontWeight).toBe(
      theme.textVariants.subtitle2Medium.fontWeight,
    );
    expect(stepTitle.props.style[0].color).toBe(theme.colors.neutralDarker);
  });

  test('should render bars with correct dimensions', () => {
    const { getByTestId } = render(
      <Stepper currentStep={1} totalSteps={2} stepTitle="Step 1" />,
    );

    const bar = getByTestId('stepper-bar-0');

    expect(bar.props.style[0].height).toBe(6);
    expect(bar.props.style[0].borderRadius).toBe(theme.borderRadii.xs);
  });

  test('should render bars with custom barHeight', () => {
    const { getByTestId } = render(
      <Stepper
        currentStep={1}
        totalSteps={2}
        stepTitle="Step 1"
        barHeight={10}
      />,
    );

    expect(getByTestId('stepper-bar-0').props.style[0].height).toBe(10);
  });

  describe('RTL', () => {
    beforeEach(() => {
      setIsRTL(true);
    });

    test('should render step count with RTL colon placement', () => {
      const { getByTestId } = render(
        <Stepper
          currentStep={2}
          totalSteps={4}
          stepTitle="Contact Information"
        />,
      );

      expect(getByTestId('stepper-stepCount').props.children).toBe(':4/');
    });

    test('should render next step label with RTL colon placement', () => {
      const { getByTestId } = render(
        <Stepper
          currentStep={2}
          totalSteps={4}
          stepTitle="Contact Information"
          nextStepTitle="Payment Information"
        />,
      );

      expect(getByTestId('stepper-nextStepLabel').props.children).toBe(':Next');
      expect(getByTestId('stepper-nextStepTitle').props.children).toBe(
        'Payment Information',
      );
    });

    test('should render custom next step label prefix in RTL', () => {
      const { getByTestId } = render(
        <Stepper
          currentStep={2}
          totalSteps={4}
          stepTitle="İletişim Bilgileri"
          nextStepTitle="Ödeme Bilgileri"
          nextStepLabelPrefix="Sonraki"
        />,
      );

      expect(getByTestId('stepper-nextStepLabel').props.children).toBe(
        ':Sonraki',
      );
    });

    test('should render Stepper correctly in RTL', () => {
      const { toJSON } = render(
        <Stepper
          currentStep={2}
          totalSteps={4}
          stepTitle="Contact Information"
          nextStepTitle="Payment Information"
        />,
      );

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
