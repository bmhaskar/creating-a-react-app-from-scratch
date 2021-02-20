module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es2020': true,
        'jest': true,
    },
    'parser': '@typescript-eslint/parser', // Specifies the ESLint parser
    'parserOptions': {
        'ecmaVersion': 2020, // Allows for the parsing of modern ECMAScript features
        'sourceType': 'module', // Allows for the use of imports
        'ecmaFeatures': {
            'jsx': true, // Allows for the parsing of JSX
        },
        'settings': {
            'react': {
                'version': 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
            },
        },
    },
    'extends': [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react,
        'plugin:react-hooks/recommended', // For checking hooks implementation
        'plugin:promise/recommended', // For promoting use of async-await over promise
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    'ignorePatterns': ['dist/*.js'],
    'rules': {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
        'camelcase': 'error',
        'prettier/prettier': [
            'error',
            {
                'semi': true,
                'trailingComma': 'all',
                'singleQuote': true,
                'printWidth': 120,
                'tabWidth': 4,
                'endOfLine': 'auto',
                'quoteProps': 'preserve',
            },
        ],
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true,
                'avoidEscape': true,
            },
        ],
        'quote-props': ['error', 'always'],
        'no-console': ['error', { 'allow': ['warn', 'error'] }],
        'promise/prefer-await-to-callbacks': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};
