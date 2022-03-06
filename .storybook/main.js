const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: {
                hack: `true; @import "${path.resolve(
                  __dirname,
                  '..',
                  'src',
                  'style',
                  'overridedVariables.less'
                )}";`,
              },
              javascriptEnabled: true,
            },
          },
        },
        {
          loader: 'style-resources-loader',
          options: {
            patterns: path.resolve(__dirname, '..', 'src/style/variables.less'),
            injector: 'append',
          },
        },
      ],
    });

    return config;
  },
};
