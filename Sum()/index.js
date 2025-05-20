function sum(...args) {
    // Your implementation
    return args.reduce((acc, val) => acc + val, 0);
}

//For the purpose of user debugging.
sum();

module.exports = sum
