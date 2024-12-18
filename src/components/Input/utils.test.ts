import {
  getPlaceholderText,
  getHelpText,
  getLabelColor,
  getTextColor,
  getBorderColor,
  getIconColor,
} from './utils';

describe('Input Utils', () => {
  describe('getPlaceholderText', () => {
    test('should return empty text when label and placeholder null', () => {
      // given
      const label = null;
      const labelFixed = false;
      const placeholder = null;
      const required = false;
      const focused = false;
      const value = '';

      // when
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
        required,
        value,
        focused,
      });

      // then
      expect(result).toBe('');
    });

    test('should return placeholder when label null and has placeholder and required', () => {
      // given
      const label = null;
      const labelFixed = false;
      const placeholder = 'placeholder';
      const required = true;
      const focused = false;
      const value = '';

      // when
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
        required,
        value,
        focused,
      });

      // then
      expect(result).toBe('placeholder');
    });

    test('should return placeholder optional when label null, has placeholder and required false', () => {
      // given
      const label = null;
      const subLabel = null;
      const labelFixed = false;
      const placeholder = 'placeholder';
      const required = false;
      const focused = false;
      const value = '';

      // when
      const result = getPlaceholderText({
        label,
        subLabel,
        labelFixed,
        placeholder,
        required,
        value,
        focused,
      });

      // then
      expect(result).toBe(`placeholder ${subLabel}`);
    });

    test('should return empty text when placeholder null and has label', () => {
      // given
      const label = 'label';
      const labelFixed = false;
      const placeholder = null;
      const required = false;
      const focused = false;
      const value = '';

      // when
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
        required,
        value,
        focused,
      });

      // then
      expect(result).toBe('');
    });

    test('should return placeholder when has label, labelFixed and placeholder', () => {
      // given
      const label = 'label';
      const labelFixed = true;
      const placeholder = 'placeholder';
      const required = false;
      const focused = false;
      const value = '';

      // when
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
        required,
        value,
        focused,
      });

      // then
      expect(result).toBe('placeholder');
    });

    test('should return empty text when has label, placeholder and no value, focused', () => {
      // given
      const label = 'label';
      const labelFixed = false;
      const placeholder = 'placeholder';
      const required = false;
      const focused = false;
      const value = '';

      // when
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
        required,
        value,
        focused,
      });

      // then
      expect(result).toBe('');
    });

    test('should return empty text when has label, placeholder, value and focused', () => {
      // given
      const label = 'label';
      const labelFixed = false;
      const placeholder = 'placeholder';
      const required = false;
      const focused = true;
      const value = 'value';

      // whent
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
        required,
        value,
        focused,
      });

      // then
      expect(result).toBe('');
    });

    test('should return empty text when has label, placeholder and value', () => {
      // given
      const label = 'label';
      const labelFixed = false;
      const placeholder = 'placeholder';
      const required = false;
      const focused = false;
      const value = 'value';

      // whent
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
        required,
        value,
        focused,
      });

      // then
      expect(result).toBe('placeholder');
    });

    test('should return empty text when has label, placeholder and focused', () => {
      // given
      const label = 'label';
      const labelFixed = false;
      const placeholder = 'placeholder';
      const required = false;
      const focused = true;
      const value = '';

      // whent
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
        required,
        value,
        focused,
      });

      // then
      expect(result).toBe('placeholder');
    });
  });

  describe('getHelpText', () => {
    test('should return helpText when errorState and successState false', () => {
      // given
      const helpText = 'helpText';
      const errorText = null;
      const successText = null;
      const errorState = false;
      const successState = false;

      // when
      const result = getHelpText({
        helpText,
        errorText,
        successText,
        errorState,
        successState,
      });

      // then
      expect(result).toBe('helpText');
    });

    test('should return helpText when errorState true and errorText null', () => {
      // given
      const helpText = 'helpText';
      const errorText = null;
      const successText = null;
      const errorState = true;
      const successState = false;

      // when
      const result = getHelpText({
        helpText,
        errorText,
        successText,
        errorState,
        successState,
      });

      // then
      expect(result).toBe('helpText');
    });

    test('should return errorText when errorState and errorText true', () => {
      // given
      const helpText = 'helpText';
      const errorText = 'errorText';
      const successText = null;
      const errorState = true;
      const successState = false;

      // when
      const result = getHelpText({
        helpText,
        errorText,
        successText,
        errorState,
        successState,
      });

      // then
      expect(result).toBe('errorText');
    });

    test('should return helpText when successState true and successText null', () => {
      // given
      const helpText = 'helpText';
      const errorText = null;
      const successText = null;
      const errorState = false;
      const successState = true;

      // when
      const result = getHelpText({
        helpText,
        errorText,
        successText,
        errorState,
        successState,
      });

      // then
      expect(result).toBe('helpText');
    });

    test('should return successText when successState and successText true', () => {
      // given
      const helpText = 'helpText';
      const errorText = null;
      const successText = 'successText';
      const errorState = false;
      const successState = true;

      // when
      const result = getHelpText({
        helpText,
        errorText,
        successText,
        errorState,
        successState,
      });

      // then
      expect(result).toBe('successText');
    });
  });

  describe('getLabelColor', () => {
    test('should return neutralDark when errorState and successState false', () => {
      // given
      const errorState = false;
      const successState = false;

      // when
      const result = getLabelColor({
        successState,
        errorState,
      });

      // then
      expect(result).toBe('neutralDark');
    });

    test('should return dangerKey when focused, successState false and errorState true', () => {
      // given
      const errorState = true;
      const successState = false;

      // when
      const result = getLabelColor({
        successState,
        errorState,
      });

      // then
      expect(result).toBe('dangerKey');
    });

    test('should return successKey when focused, errorState false and successState true', () => {
      // given
      const errorState = false;
      const successState = true;

      // when
      const result = getLabelColor({
        successState,
        errorState,
      });

      // then
      expect(result).toBe('successKey');
    });
  });

  describe('getTextColor', () => {
    test('should return neutralLight when errorState and successState false', () => {
      // given
      const errorState = false;
      const successState = false;

      // when
      const result = getTextColor({
        successState,
        errorState,
      });

      // then
      expect(result).toBe('neutralLight');
    });

    test('should return dangerKey when focused, successState false and errorState true', () => {
      // given
      const errorState = true;
      const successState = false;

      // when
      const result = getTextColor({
        successState,
        errorState,
      });

      // then
      expect(result).toBe('dangerKey');
    });

    test('should return successKey when focused, errorState false and successState true', () => {
      // given
      const errorState = false;
      const successState = true;

      // when
      const result = getTextColor({
        successState,
        errorState,
      });

      // then
      expect(result).toBe('successKey');
    });
  });

  describe('getBorderColor', () => {
    test('should return borderColor when focused, errorState and successState false', () => {
      // given
      const focused = false;
      const errorState = false;
      const successState = false;

      // when
      const result = getBorderColor({
        focused,
        successState,
        errorState,
      });

      // then
      expect(result).toBe('neutralLighter');
    });

    test('should return dangerKey when focused, successState false and errorState true', () => {
      // given
      const focused = false;
      const errorState = true;
      const successState = false;

      // when
      const result = getBorderColor({
        focused,
        successState,
        errorState,
      });

      // then
      expect(result).toBe('dangerKey');
    });

    test('should return successKey when focused, errorState false and successState true', () => {
      // given
      const focused = false;
      const errorState = false;
      const successState = true;

      // when
      const result = getBorderColor({
        focused,
        successState,
        errorState,
      });

      // then
      expect(result).toBe('successKey');
    });

    test('should return primaryKey when focused true', () => {
      // given
      const focused = true;
      const errorState = false;
      const successState = false;

      // when
      const result = getBorderColor({
        focused,
        successState,
        errorState,
      });

      // then
      expect(result).toBe('primaryKey');
    });
  });

  describe('getIconColor', () => {
    test('should return neutralLight when focused, errorState and successState false', () => {
      // given
      const focused = false;
      const errorState = false;
      const successState = false;

      // when
      const result = getIconColor({
        focused,
        successState,
        errorState,
      });

      // then
      expect(result).toBe('neutralLight');
    });

    test('should return dangerKey when focused, successState false and errorState true', () => {
      // given
      const focused = false;
      const errorState = true;
      const successState = false;

      // when
      const result = getIconColor({
        focused,
        successState,
        errorState,
      });

      // then
      expect(result).toBe('dangerKey');
    });

    test('should return successKey when focused, errorState false and successState true', () => {
      // given
      const focused = false;
      const errorState = false;
      const successState = true;

      // when
      const result = getIconColor({
        focused,
        successState,
        errorState,
      });

      // then
      expect(result).toBe('successKey');
    });

    test('should return primaryKey when focused true', () => {
      // given
      const focused = true;
      const errorState = false;
      const successState = false;

      // when
      const result = getIconColor({
        focused,
        successState,
        errorState,
      });

      // then
      expect(result).toBe('primaryKey');
    });
  });
});
