module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint:recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
      plugins: ['@typescript-eslint'],
    },
  ],
  ignorePatterns: [
    'lib/**',
    'storybook-static/**',
    'ios/**',
    'android/**',
    'node_modules/**',
    'example/**',
  ],
};
