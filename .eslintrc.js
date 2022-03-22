module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['unused-imports', 'react'],
	rules: {
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true,
			},
		],
		'no-duplicate-imports': 'error',
		'no-promise-executor-return': 'error',
		'no-self-compare': 'error',
		'no-template-curly-in-string': 'error',
		'no-unreachable-loop': 'error',
		'no-use-before-define': 'error',
		'no-multiple-empty-lines': 'error',
		'no-trailing-spaces': 'error',
		'require-await': 'error',
		'no-var': 'error',
		'no-labels': 'error',
		'no-inline-comments': 'error',
		'eqeqeq': 'error',
		'no-console': 'warn',
		'no-mixed-spaces-and-tabs': 0,
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: false,
			},
		],
		'arrow-parens': ['error', 'always'],
		'react/prop-types': 'off',
	},
	env: {
		node: true,
		es6: true,
	},
};
