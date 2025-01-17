module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-named-as-default": "off",
    "react/jsx-props-no-spreading": "off",
    "implicit-arrow-linebreak":"off",
    "react/require-default-props": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-shadow": "off",
    "no-unsafe-optional-chaining": "off",
    "react/no-unused-prop-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react-hooks/rules-of-hooks": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "sx-a11y/control-has-associated-label": "off",
    "no-nested-ternary": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "arrow-spacing": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/button-has-type": "off",
    "no-param-reassign": "off",
    "react/prop-types": "off",
    "import/no-named-as-default": "off",
    "import/no-extraneous-dependencies": "off",
    "no-nested-ternary": "off",
    "import/prefer-default-export": "off",
    "no-return-assign": "off",
    "react-refresh/only-export-components":"off",
    "jsx-a11y/label-has-associated-control": "off",
    "import/no-cycle": "off",
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "no-console": "off",
    "no-undef": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react/no-unstable-nested-components": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "react/button-has-type": "off",
    "react/no-array-index-key": "off",
    "no-promise-executor-return": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "max-len": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-unsafe-optional-chaining": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-explicit-any": 0,
    "react/prop-types": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "react-refresh/only-export-components": [
      "off",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/quotes": ["off"],
    "arrow-body-style": ["warn", "as-needed"],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/comma-dangle": ["warn", "always-multiline"],
    "jsx-a11y/label-has-associated-control": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "import/extensions": ["off"],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
