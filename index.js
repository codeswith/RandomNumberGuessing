let randomNumber = Math.ceil(Math.random()*100);

let guessInputEl = document.getElementById("guessInput");

let resultEl = document.getElementById("result");

let attemptcountEl = document.getElementById("attemptCount");

let counter = 0;



console.log(randomNumber);


function onCheck(){
    let guessVal = parseInt(guessInputEl.value);

    counter = counter + 1;

    if(guessVal < randomNumber){

        resultEl.textContent = "The number you guess is to low!";
        resultEl.style.color = "red";
    }
    else if(guessVal > randomNumber){

         resultEl.textContent = "The number you guess is to high!";
         resultEl.style.color = "red";
    }
    else if (guessVal === randomNumber) {

        resultEl.textContent = "Hurray you guessed it right";
        resultEl.style.color = "green";
        attemptcountEl.textContent = `You guessed it in ${counter} attempt`;
        randomNumber = Math.ceil(Math.random() * 100);
        console.log(randomNumber);
        counter = 0;

    }
    else{
        resultEl.textContent = "Invalid Input..!";
        resultEl.style.color = "red";
    }
}