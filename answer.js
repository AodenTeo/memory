let correctAnswer = '12345';
let correctness = document.getElementById('correctness')
let numberOfRuns = 2; //Here we should retrieve the number of runs from the server.
let numberOfSets = 3;

function handleClick() {
    let userAnswer = document.getElementById('answer').value;

    if (userAnswer === correctAnswer) {
        correctness.innerHTML = 'Correct!';
        correctness.style.color = 'green';
    } else {
        correctness.innerHTML = `Incorrect. The correct answer was ${correctAnswer}`;
        correctness.style.color = 'red';
    }
    numberOfRuns++ //Here, we should send the increased number of runs to the server.
}

function redirect() {
    if ( document.getElementById('correctness').innerHTML ==='Correct!' || document.getElementById('correctness').innerHTML === `Incorrect. The correct answer was ${correctAnswer}`) {
        if (numberOfRuns < numberOfSets) {
            window.location.href = './functionality.html';
        } else {
            window.location.href = './score.html';
        }
        
    } else {
        alert('Please submit an answer');
    }
}

document.getElementById('submit').addEventListener('click', handleClick);
document.getElementById('next').addEventListener('click', redirect);


