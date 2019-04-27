// alert ("You have 10 guesses! What letter am I thinking of?")

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guesses = 10;

var randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
console.log(randomLetter);

var userGuess = []

document.onkeyup = function(event){
    console.log(event);

    guesses --;

    userGuess.push(event.key);

    $("#guess").text(userGuess);

    $("#win").text(wins);

    $("#lose").text(losses);

    $("#guess-left").text(guesses);

    if (guesses === 0) {
        losses ++;
        guesses = 10;
        //pick a new random letter here
        //reset userGuess array here
    };
    if (randomLetter === userGuess){
        wins++;
        guesses = 10;
        //pick a new random letter here
        //reset userGuess array here
    }

};

// //if (randomLetter === userGuess){
//     wins ++
// }; 




