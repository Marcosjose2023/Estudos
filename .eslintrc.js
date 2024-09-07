module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.tsx', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['@Components', './src/components'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['simple-import-sort', 'import', '@typescript-eslint', 'react'],
  rules: {
    // 'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'array-bracket-spacing': ['error', 'never'], // Para 'arrayBracketSpacing': true
    'arrow-parens': 'off',
    'brace-style': ['error', '1tbs'], // Para 'bracketSameLine': true
    'curly': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off', // Regra de acessibildade
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': ['error', { allow: ['log', 'error'] }],
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-unused-expressions': 'off',
    'object-curly-spacing': ['error', 'always'], // Para 'bracketSpacing': true
    'quote-props': 0,
    'quotes': ['error', 'single'],
    'react/function-component-definition': 'off',
    'react/jsx-curly-spacing': [2, 'always'],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'semi': ['error', 'never'],
    'template-curly-spacing': [2, 'always'],
    indent: ['error', 2], // Para 'tabWidth': 2
    radix: 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'simple-import-sort/imports': [
      'error', {
        groups: [
        // React should be first.
          ['^react'],
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          // Note that if you use the `node:` prefix for Node.js builtins,
          // you can avoid this complexity: You can use `^node:` instead.
          ['^(assert|buffer|child_process|cluster|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|timers|tls|tty|url|util|v8|vm|zlib)(/|$)'],
          // Packages. `react` related packages come first.
          ['^@?\\w'],
          // Aliases
          ['^@Components(/.*|$)'],
          // Internal packages.
          ['^(@|components|utils|config|vendored-lib)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
}
