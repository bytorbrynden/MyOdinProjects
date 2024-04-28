let currentDisplayValue = "";
let currentSelectedNums = ["", ""];
let currentNumberIndex  = 0;
let currentSelectedOperator = "";
let computionComplete = false;

let updateDisplay = () => {
    document.getElementById("calculatorDisplay").value = currentDisplayValue;
};

let computeEquation = () => {
    let firstNumber = +currentSelectedNums[0];
    let secondNumber = +currentSelectedNums[1];
    let operation = currentSelectedOperator;

    currentSelectedOperator = "";
    currentSelectedNums = ["", ""];
    computionComplete = true;

    switch (operation) {
        case "+":
            return firstNumber + secondNumber;
        
        case "-":
            return firstNumber - secondNumber;

        case "x":
            return firstNumber * secondNumber;

        case "/":
            if (firstNumber > 0 && secondNumber > 0)
                return firstNumber / secondNumber;
            else return "No way.";
    }
};

let getNumberHandler = (selectedNumber) => {
    return (() => {
        if (computionComplete) {
            currentDisplayValue = "";
            currentNumberIndex = 0;
            computionComplete = false;
        }

        currentSelectedNums[currentNumberIndex] += selectedNumber;
        currentDisplayValue += selectedNumber;

        updateDisplay();
    });
};

let getOperatorHandler = (selectedOperator) => {
    return (() => {
        if (currentNumberIndex < (currentSelectedNums.length - 1)) {
            currentNumberIndex++;
        }

        if (currentSelectedOperator == "" && selectedOperator != "=") {
            currentSelectedOperator = selectedOperator;
            currentDisplayValue += selectedOperator;
        } else {
            if (selectedOperator == "=") {
                currentDisplayValue = computeEquation();
            }
        }
        
        updateDisplay();
    });
};

let initializeCalculator = () => {
    let calculatorBtns = document.getElementsByClassName("calculatorBtn");

    for (let i = 0; i < calculatorBtns.length; i++) {
        let thisCalcBtn = calculatorBtns[i];
        let btnContent  = thisCalcBtn.textContent;

        if (thisCalcBtn.classList.contains("numberBtn")) {
            thisCalcBtn.addEventListener("click", getNumberHandler(btnContent));
        } else if (thisCalcBtn.classList.contains("operatorBtn")) {
            thisCalcBtn.addEventListener("click", getOperatorHandler(btnContent));
        }
    }
};

initializeCalculator();