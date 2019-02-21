let submit = document.getElementById('start');
let numberOfDigits;
let flashTime;
let setFlash;
let distribution;
let setNum;
let settings = {};
let queryString;
function handleClick() {
    flashTime = document.getElementById('flashTime').value;
    console.log(flashTime);
    numberOfDigits = document.getElementById('digitNum').value;
    console.log(numberOfDigits);
    setFlash = document.getElementById('setFlashes').value;
    console.log(setFlash);
    setNum = document.getElementById('setNum').value;
    console.log(setNum);
    settings = {
        flashTime: flashTime,
        numberOfDigits: numberOfDigits,
        setFlash: setFlash,
        setNum: setNum
    };
    if (flashTime === '' || numberOfDigits === '' || setFlash === '' || setNum === '') {
        alert('You have to fill in all fields');
    } else {
        window.location.href = "./functionality.html";
    }
}
submit.addEventListener('click', handleClick);
console.log(settings);