module.exports = {
  root: true,
  extends: ['airbnb-typescript', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: { es6: true },
  rules: {
    'react/state-in-constructor': [0, 'never'],
    'react/jsx-props-no-spreading': [
      0,
      {
        html: 'ignore',
        custom: 'ignore',
        explicitSpread: 'ignore',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', 'ts'] }],
  },
};
