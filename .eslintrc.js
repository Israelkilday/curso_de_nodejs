module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  // 'plugin:prettier/recommended'
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    "no-unused-vars": "error",
  },
};

// {
//     "extends": [
//         "eslint:recommended",
//         "plugin:node/recommended"
//     ],
//     "plugins": [
//         "pretier"
//     ],
//     "rules": {
//         "prettier/prettier": "error"
//     }

// ---------------

// {
//   "extends": ["eslint:recommended", "plugin:node/recommended", "prettier"],
//   "plugins": ["prettier"],
//   "parser": "babel-eslint",
//   "parserOptions": { "sourceType": "module" },
//   "rules": {
//     "prettier/prettier": [
//       "error",
//       {
//         "endOfLine": "auto"
//       }
//     ],
//     "sort-imports": [
//       "error",
//       {
//         "ignoreCase": true,
//         "ignoreDeclarationSort": true,
//         "ignoreMemberSort": false
//       }
//     ],
//     "import/order": [
//       "error",
//       {
//         "groups": ["builtin", "external", "internal"],
//         "pathGroups": [
//           {
//             "pattern": "react",
//             "group": "external",
//             "position": "before"
//           }
//         ]
//       }
//     ]
//   }
// }

// 'sort-imports': [
//   'error',
//   {
//     ignoreCase: true,
//     ignoreDeclarationSort: true,
//     ignoreMemberSort: false,
//   },
// ],
// 'import/order': [
//   'error',
//   {
//     groups: ['builtin', 'external', 'internal'],
//     pathGroups: [
//       {
//         pattern: 'react',
//         group: 'external',
//         position: 'before',
//       },
//     ],
//   },
// ],

// 'sort-imports': [
//   'error',
//   {
//     ignoreCase: true,
//     ignoreDeclarationSort: true,
//     ignoreMemberSort: false,
//   },
// ],
// 'import/order': [
//   'error',
//   {
//     groups: ['builtin', 'external', 'internal'],
//     pathGroups: [
//       {
//         pattern: 'react',
//         group: 'external',
//         position: 'before',
//       },
//     ],
//   },
// ],
