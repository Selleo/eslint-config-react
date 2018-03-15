module.exports = {
  extends: ['eslint:recommended', 'react', 'react-app', 'prettier', 'plugin:react/recommended'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['import', 'react'],
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
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        parser: 'flow',
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
