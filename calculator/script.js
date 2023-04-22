let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let equals = document.querySelector('#enter')
let operator;

numbers.forEach((number)=>{
    number.addEventListener('click', ()=>{
        return number.textContent
    })
})

operators.forEach(function(operator){
    operator.addEventListener('click', ()=>{
        return operator
    })
})

function add(number, operator){
    return num1 + num2;
}
function subtract(num1, num2, operator){
    return num1 - num2;
}
function multiply(num1, num2, operator){
    return num1 * num2;
}
function divide(num1, num2, operator){
    return num1 / num2;
}
function operate(number, num2, operator){
    if(operator === '+'){
        console.log(num1 + num2)
        alert(add(number))
        return add(number, number);
    }
    else if(operator === '-'){
        return subtract(num1, num2);
    }
    else if(operator === '*'){
        return multiply(num1, num2);
    }
    else if(operator === '/'){
        return divide(num1, num2);
    }
}

equals.addEventListener('click', operate());