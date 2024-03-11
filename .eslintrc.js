module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:simple-import-sort/recommended"
    ],
    plugins: [
        "@typescript-eslint",
        "prettier",
        "simple-import-sort"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "no-console": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "type"]
    },
    "env": {
        "es2021": true,
        "node": true
    }
}