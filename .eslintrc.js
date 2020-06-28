module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: [2, 'always'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'no-console': 0,
    'no-unused-vars': 'warn',
  },
};
