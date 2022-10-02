# Pro React Template - TypeScript, WebPack, SASS and Jest

## Introduction

This project is aimed at setting up professional React projects using TypeScript, WebPack, Jest and SASS for development.

You can setup your own projects using the steps described below to customize everything to your needs. Or you can simply use this project as base if you don't need many customizations.

This guide was created by **@distilled** to ensure countless hours are **not** wasted every time a new project is setup as configuring all neccessary tools can take quite some time.

**If you wan't to help just use it and report any problems you might had using the project or guide below!**

## Modules

The `package.json` file contains all required dependencies and you just need to run `npm install` to install all modules.

If you want to start from scratch you can follow all manual steps below:

Install **React** and **React DOM**:

```bash
npm install react react-dom
```

Install **TypeScript** and type definitions for **React** and **React DOM**:

```bash
npm install --save-dev typescript @types/react @types/react-dom
```

Enable linting support for your project with **ESLint**:

```bash
npm install --save-dev eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin
```

Installing and Configuring **WebPack** with **paths** to enable **absolute** module import paths:

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server ts-node @types/node @types/webpack @types/webpack-dev-server tsconfig-paths-webpack-plugin html-webpack-plugin
```

Install support for styles in **SASS** (`.scss`) files instead of **CSS** (`.css`) files:

```bash
npm install --save-dev style-loader node-sass sass-loader node-sass
```

Configure **WebPack** using **TypeScript**. Create a **file** in your projects **root** directory called `webpack.config.ts` and copy the following contents into it:

```typescript
import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const webpackConfig = (): Configuration => ({
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsconfigPathsPlugin({ configFile: `${__dirname}/tsconfig.json` })
    ]
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
```

Configure **NPM Scripts** using `package.json`:

```json
"scripts": {
  "app:start": "webpack-cli serve --mode=development --env development --open --hot",
  "app:build": "webpack --mode=production --env production --progress",
  "lint:run": "eslint src/**/*.{ts,tsx}",
  "lint:fix": "eslint src/**/*.{ts,tsx} --fix",
  "sass:compile": "",
  "sass:watch": ""
  }
```

You can run these scripts using **npm run** **command**, for example: `npm run app:start`

```bash
npm run app:start
npm run app:build
npm run lint:run
npm run lint:fix
npm run sass:compile
npm run sass:watch
```

Installing support for **Prettier** code formatter:

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

Create configuration file for **Prettier** in root called `.prettierrc` and copy following contents into it:

```json
{
  "singleQuote": true,
  "tabWidth": 2,
  "bracketSpacing": false,
  "jsxBracketSameLine": true,
  "trailingComma": "none",
  "allowParens": "avoid"
}
```

Create ignore file for **Prettier** in root called `.prettierignore` and copy following contents into it:

```
node_modules
build
```

Modify **ESLint** configuration to work with **Prettier** in file `.eslintrc`

```
{
  "plugins": [
    "@typescript-eslint",
    "prettier" // Add "prettier" in "plugins"
  ],
  "rules": {
    "prettier/prettier": [ // Add "prettier/prettier" rule in "rules"
      "error": { "endOfLine": "auto" }
    ]
  }
}
```

Installing **Unit Testing** support via **Jest** with **TypeScript**:

```bash
npm install --save-dev @babel/preset-typescript @types/jest
```

Create file `babel.config.js` in project **root** folder:

```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ]
};
```

Install `ts-test` which is a **TypeScript** preprocessor with source map support for Jest that lets you use **Jest** to test projects written in **TypeScript**:

```bash
npm install --save-dev jest ts-jest
```

To configure **Jest** create a file named `jest.config.json` in the projects **root folder**:

```json
{
  "verbose": true,
  "roots": ["src"]
}
```

**IMPORTANT**: Jest **watch** task needs the project to be an initialized GIT repository to work! It uses GIT to detect changes in the project. You can only run the commmand `

```bash
npm install --save-dev babel-preset-es2015
```

```bash
npm install --save-dev react-scripts-ts --legacay-peer-deps
```

```bash
npm install --save-dev @typescript-eslint/parser --legacy-peer-depts
```
