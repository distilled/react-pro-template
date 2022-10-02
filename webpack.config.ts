import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const webpackConfig = (): Configuration => ({
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      components: path.resolve(process.cwd(), 'src/components/'),
      core: path.resolve(process.cwd(), 'src/components/core/'),
      api: path.resolve(process.cwd(), 'src/api/')
    },
    plugins: [
      new TsconfigPathsPlugin({ configFile: path.resolve(process.cwd(), 'tsconfig.json') })
    ]
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        },
        exclude: /build/
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
});

export default webpackConfig;
