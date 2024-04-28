const POSSIBLE_CHOICES = ["Rock", "Paper", "Scissors"];
let developmentMode = true;

let developmentMessage = (msg) => {
    if (developmentMode) console.log("[DEV] " + msg);
};

let toggleDevMode = () => {
    developmentMode = !developmentMode;
};

let playButtonClick = () => {
    getComputerChoice();
    getHumanChoice();
};

let getComputerChoice = () => {
    let numericChoice = Math.floor(Math.random() * POSSIBLE_CHOICES.length);
    let englishChoice = POSSIBLE_CHOICES[numericChoice];

    developmentMessage("Computer's numeric choice: " + numericChoice);
    developmentMessage("Computer's computed choice: " + englishChoice);

    return numericChoice;
};

let getHumanChoice = () => {
    let numericChoice = +prompt("Enter your choice!");

    if (numericChoice >= POSSIBLE_CHOICES.length) {
        developmentMessage("Player provided invalid choice, trying again.");
        alert("Invalid selection, available choices are 0, 1, and 2.");

        return getHumanChoice();
    }

    let englishChoice = POSSIBLE_CHOICES[numericChoice];

    developmentMessage("Human's numeric choice: " + numericChoice);
    developmentMessage("Human's computed choice: " + englishChoice);

    return numericChoice;
};

developmentMessage("Rock Paper Scissors script loaded!");