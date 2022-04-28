let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    //console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
};
const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}
//main logic of our app
const compareGuess = () => {
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber]
    document.getElementById("guesses").innerHTML = userGuess;
    // Check the value low or high 
    if (userGuess > computerGuess) {
        userGuessUpdate.innerHTML = "Your Guess is HIGH 😄 ";
        userNumberUpdate.value = ""
    } else if (userGuess < computerGuess) {
        userGuessUpdate.innerHTML = "Your Guess is LOW 🙃";
        userNumberUpdate.value = ""
    } else {
        userGuessUpdate.innerHTML = "It's Correct 🥳";
        userNumberUpdate.value = ""
    }
    document.getElementById("attempts").innerHTML = userGuess.length

}
const easyMode = () => {
    maxGuess = 10;
    startGame();
}

const hardMode = () => {
    maxGuess = 5;
    startGame();
}
