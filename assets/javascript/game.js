// alert ("You have 10 guesses! What letter am I thinking of?")

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guesses = 10;

var randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
console.log(randomLetter);

var userGuess = []

function empty (){
    userGuess.length = 0;
};

// WHY CANT I USE THIS FUNCTION TO PICK THE LETTER FOR THE RANDOM LETTER ARRAY? (LIKE SET THE RANDOMlETTER ARRAY = [] AND THEN RUN THE FUNCTION?)
//IS IT AN ISSUE WITH HOW I AM PUSHING IT TO THE ARRAY? 
// function letter (let) {
//     alphabet[Math.floor(Math.random()*alphabet.length)];
//     console.log(randomLetter);
//     randomLetter.push(let);

// }


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
        empty();
    };
    if (randomLetter === userGuess){
        wins++;
        guesses = 10;
        //pick a new random letter here
        empty();
    }

};






