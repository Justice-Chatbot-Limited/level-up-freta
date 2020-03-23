module.exports = {
    "extends": "airbnb-base",
    "env": {
        "node": true,
        "browser": true
    },
    "plugins": ["import"],
    "parserOptions": {
        "ecmaVersion": "2018"
    },
    "globals": {
        "var1":"writeable",
        "Var2":"readonly"
    } 
}