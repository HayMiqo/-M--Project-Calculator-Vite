import './style.scss'

const screen = document.querySelector('.calculator__screen') // экран калькултора
const numberBtn = document.querySelectorAll('.number')  // числа
const operators = document.querySelectorAll('.operator') // операторы
const clearBtn = document.querySelector('.clear')  // очистить
const equalBtn = document.querySelector('.equals') // равно


numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (screen.textContent.length < 12){
            screen.textContent += button.textContent
        }
    })
});

let selectedOperator = ''
let firstNumber = ''
let secondNumber = ''
let result = ''

// let currentValue = screen.textContent

operators.forEach(operator => {
    operator.addEventListener('click', ()=>{
        firstNumber = screen.textContent
        selectedOperator = operator.textContent
        screen.textContent = ''
    })
})

equalBtn.addEventListener('click', () =>{
    secondNumber = screen.textContent
    screen.textContent = ''
    switch (selectedOperator){
        case '+':
            result = Number(firstNumber) + Number(secondNumber) 
            break;
        case '-':
            result = Number(firstNumber) - Number(secondNumber)
            break;
        case '*':
            result = Number(firstNumber) * Number(secondNumber)
            break;
        case '/':
            if (Number(secondNumber) != 0){
                result =Number(firstNumber) / Number(secondNumber)
            } else{
                result = '∞'
            }
            break;
        
    }
    screen.textContent = result
})

clearBtn.addEventListener('click', () => {
    screen.textContent = ''
    result = ''
});

clearBtn.click()
