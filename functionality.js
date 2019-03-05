const row1 = [document.getElementById('1,1'), document.getElementById('1,2'), document.getElementById('1,3'), document.getElementById('1,4'), document.getElementById('1,5'), document.getElementById('1,6'), document.getElementById('1,7'), document.getElementById('1,8'), document.getElementById('1,9'), document.getElementById('1,10'), document.getElementById('1,11'), document.getElementById('1,12')];
const row2 = [document.getElementById('2,1'), document.getElementById('2,2'), document.getElementById('2,3'), document.getElementById('2,4'), document.getElementById('2,5'), document.getElementById('2,6'), document.getElementById('2,7'), document.getElementById('2,8'), document.getElementById('2,9'), document.getElementById('2,10'), document.getElementById('2,11'), document.getElementById('2,12')];
const row3 = [document.getElementById('3,1'), document.getElementById('3,2'), document.getElementById('3,3'), document.getElementById('3,4'), document.getElementById('3,5'), document.getElementById('3,6'), document.getElementById('3,7'), document.getElementById('3,8'), document.getElementById('3,9'), document.getElementById('3,10'), document.getElementById('3,11'), document.getElementById('3,12')];

const grid = [row1, row2, row3];
let timeOnScreen;
let timeBetween;
let numberOfFlashes;
let numberOfSets;
let numberOfDigits;
let randomness;
let url = 'https://memory-backend.herokuapp.com/answers/'

fetch('https://memory-backend.herokuapp.com/information', {
    method: 'GET'
}).then(response => {
    return response.json();
}).then(JSONresponse => {
    timeOnScreen = (JSONresponse.flashTime) * 1000;
    console.log(timeOnScreen);
    numberOfFlashes = JSONresponse.setFlashes;
    console.log(numberOfFlashes);
    numberOfSets = JSONresponse.setNum;
    console.log(numberOfSets);
    numberOfDigits = JSONresponse.numberOfDigits;
    console.log(numberOfDigits);
    timeBetween = (JSONresponse.timeBetween) * 1000;
    console.log(timeBetween);
    randomness = JSONresponse.randomness;
    console.log(randomness);
}).then(finalResponse => {
    fetch('https://memory-backend.herokuapp.com/settings?' + 'flashTime=' + 0 + '&' + 'numberOfDigits=' + 0 + '&' + 'setFlash=' + 0 + '&' + 'setNum=' + 0 + '&' + 'timeBetween=' + 0 + '&' + 'randomness=' + 0, {
        method: 'POST',
      }).catch(err => {
        console.log('Nooooo!');
      }).then(uselessResponse => {
        fetch('https://memory-backend.herokuapp.com/information', {
            method: 'GET'
        }).then(response => {
            return response.json();
        }).then(JSONresponse => {
            timeOnScreen = (JSONresponse.flashTime) * 1000;
            console.log(timeOnScreen);
            numberOfFlashes = JSONresponse.setFlashes;
            console.log(numberOfFlashes);
            numberOfSets = JSONresponse.setNum;
            console.log(numberOfSets);
            numberOfDigits = JSONresponse.numberOfDigits;
            console.log(numberOfDigits);
            timeBetween = (JSONresponse.timeBetween) * 1000;
            console.log(timeBetween);
            randomness = JSONresponse.randomness;
            console.log(randomness);
        }).then(finalResponse => {
            function generateRandomNumber(digitNum) {
        
                let max = Math.pow(10, digitNum);
                let number = Math.floor(Math.random() * max);
                url += number;
                console.log(url);
                let index1 = Math.floor(Math.random() * 3);
                console.log(index1);
                let index2 = Math.floor(Math.random() * row1.length);
                grid[index1][index2].innerHTML = number;
                setTimeout(() => { grid[index1][index2].innerHTML = '&nbsp' }, timeOnScreen);
            };
            function severalRandomNumbers(number) {
                for (let x = 0; x < number; x++) {
                    let number = Math.floor(Math.random() * 10);
                    url += number;
                    grid[1][x + 2].innerHTML = number;
                }
        
                setTimeout(() => {
                    for (let x = 0; x < number; x++) {
                        grid[1][x + 2].innerHTML = '&nbsp';
                    }
                }, timeOnScreen);
            }
        
            function moreThanOne(boolean, num) {
                if (boolean === 'inline') {
                    severalRandomNumbers(num)
                } else {
                    generateRandomNumber(num);
                }
            }
            function redirect() {
                window.location.href = './answer.html';
                console.log('redirect() was called!')
            }
            for (let x = 0; x < numberOfFlashes; x++) {
                setTimeout(() => { moreThanOne(randomness, numberOfDigits) }, x * (timeBetween + timeOnScreen));
            }
            let totalTime = numberOfFlashes * (timeBetween + timeOnScreen);
            setTimeout(() => {
                console.log(url);
                fetch(url, {
                    method: 'POST',
                }).then(response => {
                    console.log(response)
                }).catch(err => {
                    console.log('Nooooo!');
                })
            }, totalTime);
        
        
            setTimeout(() => { redirect() }, totalTime + 1000);
        
        }
        ).catch(err => {
            console.log('Oh no!');
        })
      }

      )

    

}
).catch(err => {
    console.log('Oh no!');
})



