import { clampStep, getStepState } from './utils';

describe('Stepper utils', () => {
  describe('clampStep', () => {
    test('should return currentStep when within range', () => {
      expect(clampStep(2, 4)).toBe(2);
    });

    test('should clamp below 1', () => {
      expect(clampStep(0, 4)).toBe(1);
    });

    test('should clamp above totalSteps', () => {
      expect(clampStep(5, 4)).toBe(4);
    });

    test('should return 1 when totalSteps is less than 1', () => {
      expect(clampStep(2, 0)).toBe(1);
    });
  });

  describe('getStepState', () => {
    test('should return success for steps before current', () => {
      expect(getStepState(0, 2)).toBe('success');
    });

    test('should return active for current step', () => {
      expect(getStepState(1, 2)).toBe('active');
    });

    test('should return default for steps after current', () => {
      expect(getStepState(2, 2)).toBe('default');
    });

    test('should use stepStates override when provided', () => {
      expect(getStepState(1, 3, ['success', 'error', 'active'])).toBe('error');
    });
  });
});
