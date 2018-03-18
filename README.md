# eslint-config-react

[![npm version](https://badge.fury.io/js/%40selleo%2Feslint-config-react.svg)](https://badge.fury.io/js/%40selleo%2Feslint-config-react)

Internal Selleo config

## Installation

```
yarn add eslint @selleo/eslint-config-react --dev
```

## Usage

Add to your eslint config (.eslintrc):

```json
{
  "extends": ["@selleo/react"]
}
```

## Overview

### Extends

Our config is extended with those configs:

* eslint:recommended
* react-app
* prettier
* plugin:react/recommended

### Rules

Apart from the basic rules from the configs, we also use these additional rules:

```js
 {
  'linebreak-style': ['error', 'unix'],
  'object-curly-spacing': ['error', 'always'],
  'react/no-unused-prop-types': 'error',
  'react/prefer-stateless-function': 'off',
  'react/prop-types': ['error', { skipUndeclared: true }],
  indent: ['error', 2, { SwitchCase: 1 }],
  quotes: ['error', 'single', { avoidEscape: true }],
  semi: ['warn', 'never'],
  'no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    },
  ],
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
      imports: 'always-multiline',
      objects: 'always-multiline',
    },
  ],
  'react/jsx-sort-props': [
    'error',
    {
      callbacksLast: false,
      shorthandFirst: false,
      ignoreCase: false,
    },
  ],
  'prettier/prettier': [
    'error',
    {
      bracketSpacing: true,
      jsxBracketSameLine: false,
      parser: 'flow',
      printWidth: 100,
      singleQuote: true,
      semi: false,
      trailingComma: 'all',
    },
  ],
}
```

### Plugins and envs

Plugins:

* import
* react
* prettier

Envs:

```json
env: {
  browser: true,
  es6: true,
  jest: true,
  node: true,
},
```
