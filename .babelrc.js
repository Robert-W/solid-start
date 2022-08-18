module.exports = {
  "presets": [
    "@babel/preset-typescript",
    "solid",
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": "3.22"
      }
    ]
  ]
}
