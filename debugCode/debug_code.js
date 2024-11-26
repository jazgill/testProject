function performOperation(){
    //Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    //check if inputs are valid numbers
    if(!isNaN(num1) && !isNaN(num2)) {
        //Perform the operation
        let result1 = multiply(num1, num2);
        let result2 = addition(num1, num2);
        let result3 = division(num1, num2);
        //display the result
        displayResult(result1);
        displayResult(result2);
        displayResult(result3);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    //introduce a debugger statement to pause execution
    debugger;

    //multiply the numbers
    return a * b;
}

function addition(a, b){
    debugger;
    return a + b;
}

function division(a, b){
    debugger;
    return Math.floor(a / b);
}

function displayResult(result){
    //display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}