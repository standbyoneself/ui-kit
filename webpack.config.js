const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: {
      type: 'commonjs2',
    },
  },
  externals: {
    react: {
      commonjs2: 'react',
    },
    'react-dom': {
      commonjs2: 'react-dom',
    },
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
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
              patterns: path.resolve(__dirname, 'src/style/variables.less'),
              injector: 'append',
            },
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  stats: 'minimal',
};
