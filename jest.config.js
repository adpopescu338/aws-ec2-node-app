/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: "node",
  testMatch: ["**/tests/*.spec.js"],
    transform: {
        "^.+\\.js$": "babel-jest",
    },
};

module.exports = config;
