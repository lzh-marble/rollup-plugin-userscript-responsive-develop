"use strict";

module.exports = {
  targets: {
    "node": "18"
  },
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: "usage",
      corejs: 3
    }],
    // @see https://babel.dev/docs/en/babel-preset-typescript#options
    ['@babel/preset-typescript', {

    }]
  ],
};
