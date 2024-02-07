module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: true,
      },
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
      // supported tags https://github.com/microsoft/TypeScript-wiki/blob/master/JSDoc-support-in-JavaScript.md
      tagNamePreference: {
        ...['implements', 'const', 'memberof', 'readonly', 'yields'].reduce((acc, tag) => {
          acc[tag] = {
            message: `@${tag} currently not supported in Typescript`,
          };
          return acc;
        }, {}),
        extends: 'extends',
        return: 'returns',
        constructor: 'constructor',
        prop: 'property',
        arg: 'param',
        augments: 'extends',
        description: false,
        desc: false,
        inheritdoc: false,
        class: 'constructor',
      },
      overrideReplacesDocs: false,
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/internal-regex': '^@',
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@renderer': './src/renderer/src/',
          '@shared': './src/shared',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
  overrides: [
    {
      files: ['test/**/*.js'],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
