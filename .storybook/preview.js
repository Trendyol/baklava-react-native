import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

export const decorators = [withBackgrounds];
export const parameters = {
  backgrounds: [
    { name: 'plain', value: 'white', default: true },
    { name: 'warm', value: '#f1f2f7' },
  ],
  options: {
    storySort: {
      order: ['Box', 'Button', ['Button Variants', 'Button Types'], 'Text'],
      // locales: 'en-US',
    },
  },
};
