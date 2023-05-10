module.exports = {
    env: {
        browser: true,
        es2022: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-curly-spacing': [2, { when: 'always', allowMultiline: false }],
        'react/function-component-definition': [2, { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
        'import/prefer-default-export': 'off',
        'linebreak-style': 'off',
        semi: [1, 'always'],
        indent: ['error', 4],
        'no-tabs': 'off',
        'react/button-has-type': [0, { button: false }],
        'react/jsx-indent': ['error', 4],
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'react/jsx-indent-props': ['error', 4],
        'arrow-body-style': ['error', 'as-needed'],
        'react/jsx-props-no-spreading': 'off',
        'padded-blocks': 'off',
        'no-restricted-properties': 'off',
    // 'import/extensions': [1, { js: 'ignorePackages', jsx: 'always' }],
    },
};
