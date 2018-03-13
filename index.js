module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-native/all'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['import', 'react', 'react-native'],
  rules: {
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
    'react/no-unused-prop-types': 'error',
    'react/prop-types': ['error', { skipUndeclared: true }],
    'linebreak-style': ['error', 'unix'],
    'object-curly-spacing': ['error', 'always'],
    'react/prefer-stateless-function': 'off',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['warn', 'never'],
  },
  globals: {
    XMLHttpRequest: true,
    __DEV__: true,
    fetch: true,
  },
}
