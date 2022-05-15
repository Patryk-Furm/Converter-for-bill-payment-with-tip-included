const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const result1 = document.querySelector('.result1')
const tip = document.querySelector('.tip')
const error = document.querySelector('.error')
const error1 = document.querySelector('.error1')
const wrapper = document.querySelector('.wrapper')


const showBill = () => {

    if(input1.value == '' || input2.value == '' || input1.value == 0 || input2.value == 0 ){
        error.style.display = 'block' 
        error1.style.display = 'block'
        wrapper.style.height = '600px'
        result.style.display = ''
        result1.textContent = ''
        tip.value = '0'
    }else{
        wrapper.style.height = '540px'
        error.style.display = 'none' 
        error1.style.display = 'none'
        countBill()
        input1.value = ''
        input2.value = ''
        tip.value = '0'
    }
}

 const countBill = () => {

    const num1 = parseFloat(input1.value)
    const num2 = parseInt(input2.value)
    const num3 = parseFloat(tip.value)
    
    const sum = (num1 + (num1 * num3)) / num2 
    
    result.style.display = 'block'
    result1.textContent =  sum.toFixed(2)
    }

    
btn.addEventListener('click', showBill)
