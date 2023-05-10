module.exports = {
  env: {
    browser: true,
    es2021: true,
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
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    semi: [1, 'always'],
    // Indent with 2 spaces
    indent: ['error', 2],
    'no-tabs': 'off',
    'react/button-has-type': [0, { button: false }],
    // Indent JSX with 2 spaces
    'react/jsx-indent': ['error', 2],
    'react/jsx-no-useless-fragment': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // Indent props with 2 spaces
    'react/jsx-indent-props': ['error', 2],
    // 'import/extensions': [1, { js: 'ignorePackages', jsx: 'always' }],
  },
};
