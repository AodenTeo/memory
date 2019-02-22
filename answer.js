let correctness = document.getElementById('correctness')
let numberOfRuns;

let numberOfSets = 3;
let correctAnswer;
fetch('https://memory-backend.herokuapp.com/score', {
    method: 'GET'
}).then(response => {
    return response.json();
}).then(JSONresponse => {
    correctAnswer = JSONresponse.answer;
    console.log(JSONresponse);
}).then(response => {
    function handleClick() {
        let userAnswer = document.getElementById('answer').value;

        if (userAnswer === correctAnswer) {
            correctness.innerHTML = 'Correct!';
            correctness.style.color = 'green';
            fetch('https://memory-backend.herokuapp.com/result/1', {
                method: 'POST',
            }).then(response => {
                return response.json();
            }).then(JSONresponse => {
                console.log(JSONresponse);
            }).catch(err => {
                console.log('Nooooo!');
            })

        } else {
            correctness.innerHTML = `Incorrect. The correct answer was ${correctAnswer}`;
            correctness.style.color = 'red';
            fetch('https://memory-backend.herokuapp.com/result/0', {
                method: 'POST',
            }).then(response => {
                return response.json();
            }).then(JSONresponse => {
                console.log(JSONresponse);
            }).catch(err => {
                console.log('Nooooo!');
            })
        }
        fetch('https://memory-backend.herokuapp.com/runs/1', {
            method: 'POST',
        }).then(response => {
            return response.json();
        }).then(JSONresponse => {
            console.log(JSONresponse);
            return JSONresponse;
        }).catch(err => {
            console.log('Nooooo!');
        })
        document.getElementById('submit').createAttribute('disabled');

    }

    function redirect() {
        fetch('https://memory-backend.herokuapp.com/runs', {
            method: 'GET'
        }).then(response => {
            return response.json();
        }).then(JSONresponse => {
            numberOfRuns = JSONresponse.runs;
            numberOfSets = JSONresponse.numberOfSets;
            console.log(JSONresponse);
        }).then(finalResponse => {
            if (document.getElementById('correctness').innerHTML === 'Correct!' || document.getElementById('correctness').innerHTML === `Incorrect. The correct answer was ${correctAnswer}`) {
                if (numberOfRuns < numberOfSets) {
                    window.location.href = './functionality.html';
                } else {
                    window.location.href = './score.html';
                }
    
            } else {
                alert('Please submit an answer');
            }
        })
        
    }

    document.getElementById('submit').addEventListener('click', handleClick);
    document.getElementById('next').addEventListener('click', redirect);

})



