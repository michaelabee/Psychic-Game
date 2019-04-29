//alert ("You have 10 guesses! What letter am I thinking of?")

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guesses = 10;

var randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];

//I would also create a randomLetter function to be called onLoad and later in the js after a user runs out of guesses or gets a win. 

console.log(randomLetter);

var userGuess = [];

function empty (){
    userGuess.length = 0;
};

//I could not figure out how to get the randomLetter array to be compared to the userGuess array. I tried picking the random letter using
// a funciton and then leaving the randomLetter array empty [], but I could never get it to work. This was the most functional I could get the game.

document.onkeyup = function(event){
    console.log(event);
    
    guesses -- ;

    userGuess.push(event.key);

    $("#guess").text(userGuess);

    $("#win").text(wins);

    $("#lose").text(losses);

    $("#guess-left").text(guesses);

    if (guesses === 0) {
        losses ++;
        guesses = 10;
        //call randomLetter function here
        empty();
    };
};

 
if (randomLetter === userGuess){
    wins++;
    guesses = 10;
    //call randomLetter function here
    empty();
}

else if (randomLetter !== userGuess){
    guesses --;
};





