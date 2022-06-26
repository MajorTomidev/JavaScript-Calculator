const numberBtn = document.querySelectorAll('[numberBtn]')
const buttomDisplay = document.querySelector('[buttomDisplay]')
const clearBtn = document.querySelector('[clear]')
const topDisplay = document.querySelector('[topDisplay]')

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
console.log(buttomDisplay.value)
