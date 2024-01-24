import {
  getPlaceholderText,
  getHelpText,
  getLabelColor,
  getTextColor,
  getBorderColor,
} from './utils';

describe('TextArea Utils', () => {
  describe('getPlaceholderText', () => {
    test('should return empty text when label and placeholder null', () => {
      // given
      const label = null;
      const labelFixed = false;
      const placeholder = null;
      const focused = false;
      const value = '';

      // when
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
        value,
        focused,
      });

      // then
      expect(result).toBe('');
    });

    test('should return placeholder when label null and has placeholder', () => {
      // given
      const label = null;
      const labelFixed = false;
      const placeholder = 'placeholder';
      const focused = false;
      const value = '';

      // when
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
        value,
        focused,
      });

      // then
      expect(result).toBe('placeholder');
    });

    test('should return empty text when placeholder null and has label', () => {
      // given
      const label = 'label';
      const labelFixed = false;
      const placeholder = null;
      const focused = false;
      const value = '';

      // when
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
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
      const focused = false;
      const value = '';

      // when
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
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
      const focused = false;
      const value = '';

      // when
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
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
      const focused = true;
      const value = 'value';

      // whent
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
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
      const focused = false;
      const value = 'value';

      // whent
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
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
      const focused = true;
      const value = '';

      // whent
      const result = getPlaceholderText({
        label,
        labelFixed,
        placeholder,
        value,
        focused,
      });

      // then
      expect(result).toBe('placeholder');
    });
  });

  describe('getHelpText', () => {
    test('should return helpText when errorState false', () => {
      // given
      const helpText = 'helpText';
      const errorText = null;
      const errorState = false;

      // when
      const result = getHelpText({
        helpText,
        errorText,
        errorState,
      });

      // then
      expect(result).toBe('helpText');
    });

    test('should return helpText when errorState true and errorText null', () => {
      // given
      const helpText = 'helpText';
      const errorText = null;
      const errorState = true;

      // when
      const result = getHelpText({
        helpText,
        errorText,
        errorState,
      });

      // then
      expect(result).toBe('helpText');
    });

    test('should return errorText when errorState and errorText true', () => {
      // given
      const helpText = 'helpText';
      const errorText = 'errorText';
      const errorState = true;

      // when
      const result = getHelpText({
        helpText,
        errorText,
        errorState,
      });

      // then
      expect(result).toBe('errorText');
    });
  });

  describe('getLabelColor', () => {
    test('should return neutralDark when errorState false', () => {
      // given
      const errorState = false;

      // when
      const result = getLabelColor({
        errorState,
      });

      // then
      expect(result).toBe('neutralDark');
    });

    test('should return dangerKey when focused and errorState true', () => {
      // given
      const errorState = true;

      // when
      const result = getLabelColor({
        errorState,
      });

      // then
      expect(result).toBe('dangerKey');
    });
  });

  describe('getTextColor', () => {
    test('should return neutralLight when errorState false', () => {
      // given
      const errorState = false;

      // when
      const result = getTextColor({
        errorState,
      });

      // then
      expect(result).toBe('neutralLight');
    });

    test('should return dangerKey when focused and errorState true', () => {
      // given
      const errorState = true;

      // when
      const result = getTextColor({
        errorState,
      });

      // then
      expect(result).toBe('dangerKey');
    });
  });

  describe('getBorderColor', () => {
    test('should return borderColor when focused and errorState false', () => {
      // given
      const focused = false;
      const errorState = false;

      // when
      const result = getBorderColor({
        focused,
        errorState,
      });

      // then
      expect(result).toBe('neutralLighter');
    });

    test('should return dangerKey when focused and errorState true', () => {
      // given
      const focused = false;
      const errorState = true;

      // when
      const result = getBorderColor({
        focused,
        errorState,
      });

      // then
      expect(result).toBe('dangerKey');
    });

    test('should return primaryKey when focused true', () => {
      // given
      const focused = true;
      const errorState = false;

      // when
      const result = getBorderColor({
        focused,
        errorState,
      });

      // then
      expect(result).toBe('primaryKey');
    });
  });
});
