module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:solid/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "solid"
  ],
  "overrides": [{
    "files": ["*.ts", "*.tsx"],
    "extends": [
      "plugin:@typescript-eslint/recommended" 
    ],
    "parserOptions": {
      "project": ["./tsconfig.json"]
    }
  }]
}
