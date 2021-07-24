// https://stylelint.io/user-guide/configure
module.exports = {
	extends: [ '@wordpress/stylelint-config/scss' ],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'layer',
					'apply',
					'variants',
					'responsive',
					'screen',
				],
			},
		],

		// 'declaration-block-trailing-semicolon': null,
		// 'no-descending-specificity': null
	},
};
