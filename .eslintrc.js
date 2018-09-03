// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
    },
    env: {
        browser: true,
    },
    extends: ['airbnb-base'],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            webpack: {
                config: 'webpack.config.base.js',
            },
        },
    },
    // add your custom rules here
    rules: {
        indent: ['error', 4],
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
            },
        ],
        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'e', // for e.returnvalue
                ],
            },
        ],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': [
            'error',
            {
                optionalDependencies: ['test/unit/index.js'],
            },
        ],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'arrow-parens': ['error', 'always'],
    },
    globals: {
        firebase: true,
    },
};
