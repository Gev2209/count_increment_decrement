const increment = document.getElementById('increment');
const start = document.getElementById('start');
const h1 = document.querySelector('h1')
const counts = document.getElementById('count');
const decrementButton = document.getElementById('decrement');
const save = document.getElementById('save');
const saveCount = document.getElementById('saveCount');
const secondCount = document.getElementById('saveSecondCount');
const sumButton = document.getElementById('sum')


const pushCount = []

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
    console.log(countObj.count);
}

const saveButton = () => {
    saveCount.innerText = `Your first number: ${countObj.count}`
    pushCount.push(countObj.count)
    console.log(pushCount);
    // console.log(`"${countObj.count}"`);
}

const secondCountValue = () => {
    // let sumCount = `Your result: ${countObj.count + countObj.count}`
    // secondCount.innerText = sumCount
    // console.log(sumCount);
    for (let i = 0; i < pushCount.length; i++) {
        sum = sum + pushCount[i]
    }
    secondCount.innerText = `Your result: ${sum}`
}
