module.exports = {
  root: true,
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'prettier',
    'prettier/react',
    // 'plugin:jest/recommended'
  ],
  plugins: ['react-hooks'],
  rules: {
    'react/jsx-fragments': [1, 'syntax'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    'react/state-in-constructor': 0
  },
  parserOptions: {
    jsx: true,
    useJSXTextNode: true
  }
};
