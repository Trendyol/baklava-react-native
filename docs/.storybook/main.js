const path = require('path');

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    config.module.rules.unshift({
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, '../stories/design-tokens'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
          babelrc: false,
          configFile: false,
        },
      },
    });
    return config;
  },
};

module.exports = config;
