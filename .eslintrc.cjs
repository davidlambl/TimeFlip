module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		],
	settings: {
		react: {
			version: 'detect',
		},
	},
	ignorePatterns: ['dist', '.eslintrc.cjs', '**/mockServiceWorker.js'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json'],
		tsconfigRootDir: __dirname,
	},
	plugins: ['react', '@typescript-eslint', 'react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
			],
		indent: ['error', 2, { SwitchCase: 1 }],
		'no-tabs': 'error',
	},
};