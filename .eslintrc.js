module.exports = {
  env: {
    node: true,
    jest: true,
  },
  parser: "@typescript-esline/parser",
  parserOptions: {
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {},
};
