module.exports = {
	root: true,
	extends: [
		'airbnb-typescript',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'prettier',
		'prettier/react',
		'plugin:react-native/all',
		'plugin:jest/recommended'
	],
	plugins: ['react-hooks'],
	rules: {
		'react/jsx-fragments': [1, 'syntax'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'import/prefer-default-export': 0,
		'react/prop-types': 0,
		'react-native/sort-styles': 0,
		'react-native/no-raw-text': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'no-underscore-dangle': 0,
		'@typescript-eslint/no-use-before-define': 0,
		'react/jsx-props-no-spreading': 1,
		'prettier/prettier/bracket-spacing': 0,
		'max-classes-per-file': 0
	},
	parserOptions: {
		jsx: true,
		useJSXTextNode: true
	}
};
