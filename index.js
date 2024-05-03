const increment = document.getElementById('increment');
const start = document.getElementById('start');
const h1 = document.querySelector('h1')
const counts = document.getElementById('count');
const decrementButton = document.getElementById('decrement');
const save = document.getElementById('save');
const saveCount = document.getElementById('saveCount');
const secondCount = document.getElementById('saveSecondCount');
const sumButton = document.getElementById('sum');




let pushCount = []

const countObj = {
    count: 0
}
let sum = 0

const incrementCount = () => {
    counts.innerText = ++countObj.count
    decrementButton.style.display = 'block'
    console.log(countObj.count);
}
const decrementCount =  () => {
    if (countObj.count <= 0) {
        decrementButton.style.display = 'none'
    } else {
        counts.innerText = --countObj.count
        console.log(countObj.count);
    }   
}
const resetCount = () => {
    counts.innerText = countObj.count = 0
    pushCount = []
    console.log(pushCount,'pushCount/resetCount');
    console.log(countObj.count,'countObj.count/resetCount');
}

const saveButton = () => {
    if (countObj.count === 0) {
        return
    } else {
        saveCount.innerText = `Your number: ${countObj.count}`
        pushCount.push(countObj.count)
        console.log(pushCount);
    }
    // console.log(`"${countObj.count}"`);
}

const secondCountValue = () => {
    for (let i = 0; i < pushCount.length; i++) {
        sum = sum + pushCount[i]
    }
    secondCount.innerText = `Your result: ${sum}`
}

const deleteCountLine = () => {
    saveCount.innerHTML = '';
    pushCount = []
    console.log(saveCount);
    console.log(pushCount,'pushCount/deleteCountLine');
}


const addCountLine = () => {
    for (let i = 0; i < pushCount.length; i++) {
        const divField = document.createElement('div')
        const hrField = document.createElement('hr')
        divField.className = 'field'
        divField.textContent = `Added ${countObj.count}`
        const parentElement = document.body
        parentElement.appendChild(divField);
        parentElement.appendChild(hrField)
      }
}
