// https://eslint.org/docs/user-guide/configuring/
module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@wordpress/eslint-plugin/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:jest/recommended',
		'next',
		'prettier',
	],
	settings: {
		jsdoc: {
			tagNamePreference: {
				returns: 'return',
			},
		},
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
	},
	plugins: [ 'import', 'react', 'prettier', 'jsdoc' ],
	rules: {
		'@next/next/no-img-element': 'off',
		'func-style': [ 'error', 'declaration' ],
		'jsdoc/check-indentation': 'warn',
		'jsdoc/check-line-alignment': [
			'warn',
			'always',
			{
				tags: [ 'param', 'return' ],
			},
		],
		'jsdoc/require-param': [
			'warn',
			{
				checkRestProperty: true,
				unnamedRootBase: [ 'props' ],
			},
		],
		'jsdoc/check-values': [
			'warn',
			{
				allowedAuthors: [ 'WebDevStudios' ],
			},
		],
		'jsx-a11y/anchor-is-valid': 'off',
		'no-console': [ 'error', { allow: [ 'warn', 'error' ] } ],
		'prettier/prettier': 'error',
		'space-in-parens': 'always',
		'import/order': [
			'error',
			{
				groups: [ 'builtin', 'external', 'internal' ],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: [ 'react' ],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
	},
	overrides: [
		{
			files: [ '*.tsx', '*.ts', '*.jsx', '*.js' ],
			processor: '@graphql-eslint/graphql',
		},
		{
			files: [ '*.graphql' ],
			parser: '@graphql-eslint/eslint-plugin',
			plugins: [ '@graphql-eslint' ],
		},
	],
};
