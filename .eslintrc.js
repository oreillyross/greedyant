module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "prettier/react",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "linebreak-style": ["error", "windows"],
        "import/prefer-default-export": "off",
        "prettier/prettier": ["error", { "singleQuote": true }],
        "no-console": warn,
    }
};