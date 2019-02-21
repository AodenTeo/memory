const row1 = [document.getElementById('1,1'), document.getElementById('1,2'), document.getElementById('1,3'), document.getElementById('1,4'), document.getElementById('1,5'), document.getElementById('1,6'), document.getElementById('1,7'), document.getElementById('1,8'), document.getElementById('1,9'), document.getElementById('1,10'), document.getElementById('1,11'), document.getElementById('1,12')];
const row2 = [document.getElementById('2,1'), document.getElementById('2,2'), document.getElementById('2,3'), document.getElementById('2,4'), document.getElementById('2,5'), document.getElementById('2,6'), document.getElementById('2,7'), document.getElementById('2,8'), document.getElementById('2,9'), document.getElementById('2,10'), document.getElementById('2,11'), document.getElementById('2,12')];
const row3 = [document.getElementById('3,1'), document.getElementById('3,2'), document.getElementById('3,3'), document.getElementById('3,4'), document.getElementById('3,5'), document.getElementById('3,6'), document.getElementById('3,7'), document.getElementById('3,8'), document.getElementById('3,9'), document.getElementById('3,10'), document.getElementById('3,11'), document.getElementById('3,12')];

const grid = [row1, row2, row3];
let timeOnScreen = 1000;
let timeBetween = 2000;
let numberOfRuns = 0;
let numberOfFlashes = 10;
let numberOfSets = 10;

function generateRandomNumber(digitNum) {
    let max = Math.pow(10, digitNum);
    let number = Math.floor(Math.random()*max);
    let index1 = Math.floor(Math.random()*3);
    console.log(index1);
    let index2 = Math.floor(Math.random()*row1.length);
    grid[index1][index2].innerHTML = number;
    setTimeout(() => {grid[index1][index2].innerHTML = '&nbsp'}, timeOnScreen);
};
function severalRandomNumbers(number) {
    for (let x = 0; x < number; x++) {
        grid[2][x+2].innerHTML = Math.floor(Math.random()*10);
    }
    
    setTimeout(() => {for (let x = 0; x < number; x++) {
        grid[2][x+2].innerHTML = '&nbsp';
    }}, timeOnScreen);
}

function moreThanOne(boolean, num) {
    if (boolean === true) {
        severalRandomNumbers(num)
    } else {
        generateRandomNumber(num);
    }
}
function redirect() {
    if (numberOfRuns < numberOfSets) {
        window.location.href = './answer.html';
    } else {
        window.location.href = './index/html';
    }
}
for (let x = 0; x < 10; x++) {   
    setTimeout(() => {moreThanOne(false, 1)}, x*timeBetween);
};
numberOfRuns++;
let totalTime = numberOfFlashes*timeBetween + timeBetween;
setTimeout(() => {redirect()}, totalTime);


