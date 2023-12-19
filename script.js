const result = document.getElementById('result')
const calcBtn = document.getElementById('calculateBtn')
const firstValue = document.getElementById('firstNumber')
const secondValue = document.getElementById('secondNumber')
const plusBtn = document.getElementById('plusBtn')
const minusBtn = document.getElementById('minusBtn')
const multiBtn = document.getElementById('multiBtn')
const divBtn = document.getElementById('divisionBtn')

let action = '+'

plusBtn.onclick = function() {
    action = '+'
}

minusBtn.onclick = function() {
    action = '-'
}

multiBtn.onclick = function() {
    action = '*'
}

divBtn.onclick = function() {
    action = '/'
}

const print = (res) => {
    if (res >= 0) {
        result.style.color = '#9FFE72' 
    } else {
        result.style.color = '#FE7294'
    }
    result.textContent = res;
}

const getResult = function() {
    const firstNum = Number(firstValue.value)
    const secondNum = Number(secondValue.value)
    if (action === '+') {
        return firstNum + secondNum
    } else if (action === '-') {
        return firstNum - secondNum
    } else if (action === '*') {
        return firstNum * secondNum
    } else if (action === '/') {
        return firstNum / secondNum
    }
    result.textContent = res;
}

calcBtn.onclick = function () {
    const res = getResult()
    print(res)    
}




