module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/strongly-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [{ files: ['**/*.js', '**/*.vue'] }],
  plugins: ['import', 'vue'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@images', './src/assets/images'],
          ['@icons', './src/assets/icons'],
          ['@styles', './src/styles'],
          ['@vars', './src/styles/vars'],
          ['@json', './src/assets/json'],
        ],
      },
    },
  },
};
