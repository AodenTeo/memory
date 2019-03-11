let yourScore = document.getElementById('score');
let message = document.getElementById('text');
let dateArea = document.getElementById('date');
let scored, total, sets;
fetch('https://memory-backend.herokuapp.com/final', {
    method: 'GET'
}).then(response => {
    return response.json();
}).then(JSONresponse => {
    scored = JSONresponse.score;
    total = JSONresponse.numberOfSets;
    sets = total > 1? 'sets' : 'set';

    console.log(JSONresponse);
    return JSONresponse;
}).then(finalResponse => {
    yourScore.innerHTML = `You got ${scored} correct out of a total of ${total} ${sets}.`;
    if (scored / total >= 0.9) {
        message.innerHTML = `Good Job! Now you can try harder settings.`;
    } else if (scored / total >= 0.8) {
        message.innerHTML = `Great! Keep it up!`;
    } else if (scored / total >= 0.7) {
        message.innerHTML = `Good! Keep practicing and you will get much better`;
    } else if (scored / total >= 0.6) {
        message.innerHTML = `Good try! Practice makes perfect!`;
    } else if (scored / total >= 0.5) {
        message.innerHTML = `Good attempt! Keep practicing.`;
    } else {
        message.innerHTML = `Good attempt! Maybe you should try easier settings.`;
    }
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = dd + '/' + mm + '/' + yyyy;
    dateArea.innerHTML = today;
})
