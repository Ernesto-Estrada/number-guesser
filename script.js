let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num2 - num1);
}

const compareGuesses = (user, computer, target) => {
    if (user < 0 || user > 10) {
        alert('Number out of range: Pick a number between 0 and 10');
    }
    let num1 = getAbsoluteDistance(user, target);
    let num2 = getAbsoluteDistance(computer, target);
    if (num1 < num2) {
        return true;
    }
    else if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    }
    else if (winner === 'computer') {
        computerScore++;
    } else {
        console.log('Something wrong happened');
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}
