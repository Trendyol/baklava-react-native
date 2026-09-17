const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { generate } = require('@storybook/react-native/scripts/generate');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

generate({
  configPath: path.resolve(__dirname, './.rnstorybook'),
});

const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    unstable_allowRequireContext: true,
  },
  resolver: {
    sourceExts: [...defaultConfig.resolver.sourceExts, 'mjs'],
  },
};

module.exports = withStorybook(mergeConfig(defaultConfig, config), {
  enabled: true,
  configPath: path.resolve(__dirname, './.rnstorybook'),
});
