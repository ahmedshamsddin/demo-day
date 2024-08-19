let currentInput = '';
let display = document.getElementById('display');
let lastOperation = '';

function appendNumber(number) {
    if (lastOperation === '=') {
        currentInput = '';
        display.value = '';
        lastOperation = '';
    }
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operation) {
   if (currentInput !== '' && lastOperation !== '=') {
        currentInput += operation;
        display.value = currentInput;
    } else if (lastOperation === '=') {
        currentInput += ' ' + operation + ' ';
        display.value = currentInput;
        lastOperation = '';
    }
}

function calculate() {
    try {
        if (display.value !== ''){

            // check if operation is factorial
            if (currentInput.includes('!')) {
                let number = parseInt(currentInput.split('!')[0]);
                display.value = ib_factorial(number);
                currentInput = display.value;
                lastOperation = '=';
                return;
            } else if (currentInput.includes('^')) {
                let numbers = currentInput.split('^');
                let base = parseInt(numbers[0]);
                let exponent = parseInt(numbers[1]);
                display.value = ib_power(base, exponent);
                currentInput = display.value;
                lastOperation = '=';
                return;
            } /*else if (currentInput.includes('√')) {
                let number = parseInt(currentInput.split('√')[0]);
                display.value = ib_sqrt(number);
                currentInput = display.value;
                lastOperation = '=';
                console.log(number);
                return;
            }*/

            display.value = eval(currentInput);
            currentInput = display.value;
            lastOperation = '=';
        }
    } catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
}

function calculateSqrt() {
    if (currentInput !== '') {
        display.value = ib_sqrt(parseInt(currentInput));
        currentInput = display.value;
        lastOperation = '=';
    }
}

function calculateFactorial() {
    if (currentInput !== '') {
        display.value = ib_factorial(parseInt(currentInput));
        currentInput = display.value;
        lastOperation = '=';
    }
}


function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function check() {
    try {
        document.getElementById('addButton').disabled = !(ib_add(1, 1) === 2);
        document.getElementById('subtractButton').disabled = !(ib_subtract(2, 1) === 1);
        document.getElementById('multiplyButton').disabled = !(ib_multiply(2, 2) === 4);
        document.getElementById('divideButton').disabled = !(ib_divide(4, 2) === 2);
        document.getElementById('factorialButton').disabled = !(ib_factorial(4) === 24);
        document.getElementById('powerButton').disabled = !(ib_power(2, 3) === 8);
        document.getElementById('sqrtButton').disabled = !(ib_sqrt(4) === 2);
    } catch (error) {
        console.log('Error in checking functions:', error);
    }
}


setInterval(check, 1000);