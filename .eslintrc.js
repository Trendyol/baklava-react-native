module.exports = {
  root: true,
  extends: ['@react-native', 'eslint:recommended'],
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
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
      },
    },
  ],
  ignorePatterns: [
    'lib/**',
    '.rnstorybook/**',
    'storybook-static/**',
    'ios/**',
    'android/**',
    'node_modules/**',
    'coverage/**',
  ],
};
