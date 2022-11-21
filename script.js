Initialize() { 
    userGuess = 50;
    target = parseInt(Math.random() * 100) + 1;
    guessNum = 0;
    won = false;
}



AddOne() {
    userGuess++;
}

SubtractOne() {
    userGuess--;
}

AddFive() {
    userGuess += 5;
}

SubtractFive() {
    userGuess -= 5;
}

AddTen() {
    userGuess += 10;
}

SubtractTen() {
    userGuess -= 10;
}

AddTwentyFive() {
    userGuess += 25;
}

SubtractTwentyFive() {
    userGuess -= 25;
}



Guess() {
    if (userGuess == target)
    {
        console.log("You guessed the right number! The number was: " + target);
        won = true;
    }
    
    else
    {

        if (Math.abs(userGuess - target) < 5)
        {
            console.log("You are very hot!");
        }

        if (Math.abs(userGuess - target) < 8)
        {
            console.log("You are hot!");
        }
        
        if (Math.abs(userGuess - target) < 15)
        {
            console.log("You are very warm!");
        }

        if (Math.abs(userGuess - target) < 20)
        {
            console.log("You are warm!");
        }

        if (Math.abs(userGuess - target) < 30)
        {
            console.log("You are cool!");
        }

        if (Math.abs(userGuess - target) < 40)
        {
            console.log("You are very cool!");
        }

        if (Math.abs(userGuess - target) < 55)
        {
            console.log("You are cold!");
        }

        if (Math.abs(userGuess - target) > 55)
        {
            console.log("You are very cold!");
        }

        guessNum++;
    }

    if (!won && guessNum > 5)
}
