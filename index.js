module.exports = {
  extends: ['eslint:recommended', 'react-app', 'prettier', 'plugin:react/recommended'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['import', 'react', 'prettier'],
  rules: {
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
  },
}
