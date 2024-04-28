const POSSIBLE_CHOICES = ["Rock", "Paper", "Scissors"];
const GAMEPLAY_RULES   = {
    "Rock": POSSIBLE_CHOICES[1],
    "Paper": POSSIBLE_CHOICES[2],
    "Scissors": POSSIBLE_CHOICES[0]
};

let developmentMode = true;

let computerWinCount = 0;
let humanWinCount    = 0;

let developmentMessage = (msg) => {
    if (developmentMode) console.log("[DEV] " + msg);
};

let toggleDevMode = () => {
    developmentMode = !developmentMode;
};

let getComputerChoice = () => {
    let numericChoice = Math.floor(Math.random() * POSSIBLE_CHOICES.length);
    let englishChoice = POSSIBLE_CHOICES[numericChoice];

    developmentMessage("Computer's numeric choice: " + numericChoice);
    developmentMessage("Computer's computed choice: " + englishChoice);

    return numericChoice;
};

let getHumanChoice = () => {
    // let numericChoice = +prompt("Enter your choice!");

    // // Humans can make errors, so let's perform a simple check to make sure the value the user entered is valid.
    // if (numericChoice >= POSSIBLE_CHOICES.length) {
    //     developmentMessage("Player provided invalid choice, trying again.");
    //     alert("Invalid selection, available choices are 0, 1, or 2.");

    //     return getHumanChoice();
    // }

    let numericChoice = +document.getElementById("playerSelection").value;
    let englishChoice = POSSIBLE_CHOICES[numericChoice];

    developmentMessage("Human's numeric choice: " + numericChoice);
    developmentMessage("Human's computed choice: " + englishChoice);

    return numericChoice;
};

let playRound = (computerChoice, humanChoice) => {
    let computerChoiceStr = POSSIBLE_CHOICES[computerChoice];
    let humanChoiceStr    = POSSIBLE_CHOICES[humanChoice];
    let beatsComputer     = GAMEPLAY_RULES[computerChoiceStr];
    let beatsHuman        = GAMEPLAY_RULES[humanChoiceStr];

    developmentMessage("Computer chose " + computerChoiceStr + ". " + beatsComputer + " would win.");
    developmentMessage("Human chose " + humanChoiceStr + ". " + beatsHuman + " would win.");

    if (computerChoice == humanChoice) {
        return "Tie";
    } else {
        if (computerChoiceStr == beatsHuman) return "Computer";
        else if (humanChoiceStr == beatsComputer) return "Human";
    }
};

let updateInterface = (computerWins, humanWins) => {
    document.getElementById("computerWinCounter").textContent = computerWins;
    document.getElementById("humanWinCounter").textContent    = humanWins;
};

let playButtonClick = () => {
    switch (playRound(getComputerChoice(), getHumanChoice())) {
        case "Computer":
            computerWinCount++;
            alert("Computer wins!");
            break;

        case "Human":
            humanWinCount++;
            alert("Player wins!");
            break;
        
        case "Tie":
            alert("It's a tie!");
            break;
    }

    updateInterface(computerWinCount, humanWinCount);
};

developmentMessage("Rock Paper Scissors script loaded!");