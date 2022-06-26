const numberBtn = document.querySelectorAll('[numberBtn]')
const buttomDisplay = document.querySelector('[buttomDisplay]')
const clearBtn = document.querySelector('[clear]')
const topDisplay = document.querySelector('[topDisplay]')
const backSpaceBtn = document.querySelector('[backSpace]')

numberBtn.forEach(number =>{
    
    number.addEventListener('click',()=>{
        // console.log(number.innerText)
        updateButtomDisplay (number.innerText)
    })
})

function updateButtomDisplay(number) {
    
    if (buttomDisplay.value.includes ('.') && number == '.') return
 buttomDisplay.value = buttomDisplay.value.toString() + number.toString()
 
 
}

clearBtn.onclick = clearAll
function clearAll() {
    buttomDisplay.value = ''
    topDisplay.value = ''
}
backSpaceBtn.onclick = backspace
function backspace() {
    if(buttomDisplay.value == '') return
    buttomDisplay.value = buttomDisplay.value.slice(0, -1)
}

console.log(buttomDisplay.value)
