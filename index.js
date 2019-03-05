let submit = document.getElementById('start');
let numberOfDigits;
let flashTime;
let setFlash;
let distribution;
let setNum;
let settings = {};
let queryString;
let timeBetween;
let randomness;

function handleClick() {
    flashTime = document.getElementById('flashTime').value;
    console.log(flashTime);
    numberOfDigits = document.getElementById('digitNum').value;
    console.log(numberOfDigits);
    setFlash = document.getElementById('setFlashes').value;
    console.log(setFlash);
    setNum = document.getElementById('setNum').value;
    console.log(setNum);
    timeBetween = document.getElementById('timeBetween').value;
    console.log(timeBetween);
    randomness = document.getElementById('randomness').value;
    console.log(randomness);
    fetch('https://memory-backend.herokuapp.com/settings?' + 'flashTime=' + flashTime + '&' + 'numberOfDigits=' + numberOfDigits + '&' + 'setFlash=' + setFlash + '&' + 'setNum=' + setNum + '&' + 'timeBetween=' + timeBetween + '&' + 'randomness=' + randomness, {
        method: 'POST',
      }).then(obligatoryResponse => {
        if (flashTime === '' || numberOfDigits === '' || setFlash === '' || setNum === '') {
          alert('You have to fill in all fields');
      } else {
          window.location.href = "./functionality.html";
      }
      }).catch(err => {
        console.log('Nooooo!');
      })
    
}
submit.addEventListener('click', handleClick);
console.log(settings);