function ib_add(a, b) {
    // add function is not working correctly 
}

function ib_subtract(a, b) {
    // subtract function is not working correctly
}

function ib_multiply(a, b) {
    // Multiply function is not working correctly
    return a*b;
}

function ib_divide(a, b) {
    // dıvıde function is not working correctly
}

function ib_power(a, b) {
    // power function is not working correctly
    return Math.pow(a, b);
}

function ib_sqrt(a) {
    return Math.sqrt(a);
}

function ib_factorial(a) {
    // factorial function is not working correctly
    if (a === 0) {
        return 1;
    }
    return a * ib_factorial(a - 1);
}