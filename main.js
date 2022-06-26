const numberBtn = document.querySelectorAll('[numberBtn]')
const buttomDisplay = document.querySelector('[buttomDisplay]')
const clearBtn = document.querySelector('[clear]')
const topDisplay = document.querySelector('[topDisplay]')
const backSpaceBtn = document.querySelector('[backSpace]')
const functionBtn = document.querySelectorAll('[functionBtn]')
const equalsToBtn = document.querySelector('[equalsBtn]')

// Number buttons
numberBtn.forEach(number =>{
    
    number.addEventListener('click',()=>{
        // console.log(number.innerText)
        updateButtomDisplay (number.innerText)
    })
})
// Function buttons
functionBtn.forEach(operation =>{
    
    operation.addEventListener('click',()=>{
        
        updateTopDisplay (operation.innerText)
    })
})
// Top Display
function updateTopDisplay (operation) {
    if (buttomDisplay.value == '.') return
    calculate ()
    topDisplay.value = buttomDisplay.value.toString() + operation.toString()
    buttomDisplay.value = ''
    
}
// Full Stop Button
function updateButtomDisplay(number) {
    
    if (buttomDisplay.value.includes ('.') && number == '.') return
 buttomDisplay.value = buttomDisplay.value.toString() + number.toString()
 
 
}
// Clear Button
clearBtn.onclick = clearAll
function clearAll() {
    buttomDisplay.value = ''
    topDisplay.value = ''
}
// Backspace Button
backSpaceBtn.onclick = backspace
function backspace() {
    if(buttomDisplay.value == '') return
    buttomDisplay.value = buttomDisplay.value.slice(0, -1)
}
// Equals Too Button
equalsToBtn.onclick = calculate
function calculate() {
    let result;
   let topDisp =  parseFloat(topDisplay.value.slice(0, -1))
   let btmDisp =  parseFloat(buttomDisplay.value)
   if(isNaN(topDisp)||isNaN(btmDisp))return

//   Calculations 
   let sign = topDisplay.value[topDisplay.value.length-1]
   switch(sign){
    case '+':
result = topDisp + btmDisp 
break
case '-':
    result = topDisp - btmDisp
    break
    case 'x':
        result = topDisp * btmDisp
        break
        case '÷':
        result = topDisp / btmDisp
        break
        case '%':
        result = (topDisp/100) * (btmDisp)
        break
        default:
            return

   }
   buttomDisplay.value = result
   topDisplay.value = ''
}
 
