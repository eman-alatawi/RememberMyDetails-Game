// first I need a timer for (1 min) while the background image for the first level [level1_page]is shown .
// so  that I make the timer and it should be updated every second.
// after the time is out, the screen (I put all the contents in [level1_page] div so that I make it blur)
// sholuld become blur and the [question_box] is appear(add show() event - because its hide in the first place)
// with couple of 8 Yes/No questions
// after the [question_box] is shown - call the startGame() method, that is the imortant part of the game
// you can notice there is a couple of variables are declared before the startGame() method, which is be used
// by this method.
// every variable has a comment of its benefit.







// count Down timer to be shown to the player on the screen 
const startingMinutes = 1;
let time = startingMinutes * 60; //seconds
const countDownElement = document.getElementById("countdown");
function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countDownElement.innerHTML = `${minutes}:${seconds}`;
    time !== 0 ? time-- : time;
}
setInterval(updateTimer, 1000)


//Elements 
const ques = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer"));
const displayQuestionCounter = document.getElementById("questionCounter");
const displayScore = document.getElementById("score");


//variables - Arrays - Objects
let currentQues = {};           //will contain all the current question objects  
var score = 0;                  //to contain the final score and display it
let quesCounter = 0;            //to count the random questions and display it 
let remainingQues = [];         //contain only the unused questions
const scoreBycorrectAnswer = 5; //every correct answer worth 5 bonus added to the score
const numberOfAllQues = 8;      //number of the whole questions in this level
//levelQuestions array with litral objects
let levelQuestions = [
    {
        question: "Is there a Hammer in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a Comb in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 2
    },
    {
        question: "Is there a Saw in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a TV in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 2
    },
    {
        question: "Is there a Gallon in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a Ruler in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a Car in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 2
    },
    {
        question: "Is there a Chain in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },

];


//Second Point
let startGame = function () {
    quesCounter = 0;
    score = 0;
    remainingQues = [...levelQuestions]; //copy all the Array elements and store it in another array
    GenerateNewQues();
    ques.innerText = currentQues.question; //show the question in front of the player 

};

//Third Point
let GenerateNewQues = function () {
    //check if no remaining questions - meanes all the questions are shown - then should move to the next level
    if (remainingQues.length === 0 || quesCounter >= numberOfAllQues) {
        //go to next level 
        return window.location.assign("/level2.html");
    }
    quesCounter++;
    displayQuestionCounter.innerText = "Question:" + quesCounter + "/" + numberOfAllQues;  //display question counter
    //generate random question
    const quesIndex = Math.floor(Math.random() * remainingQues.length);
    currentQues = remainingQues[quesIndex];
    ques.innerText = currentQues.question;
    // display YES/NO 
    answers.forEach(answer => {
        const choice = answer.dataset["choice"];
        answer.innerText = currentQues["playerChoice" + choice];
    });
    //remove the already used question
    remainingQues.splice(quesIndex, 1);
}

//Forth Point
//Add Event Listener for the Yes/No Player's Choice
answers.forEach(answer => {
    answer.addEventListener("click", (e) => {

        const PlayerselectedChoice = e.target;
        const selectedAnswer = PlayerselectedChoice.dataset["choice"];
        //when the player select the answer then add some effects to the yes/no chocies
        const addToClass = selectedAnswer == currentQues.correctAnswer ? 'correctClass' : 'wrongClass';
        //if the answer is correct then call the scoreIncrement method to increase the score and display it
        if (addToClass === 'correctClass') {
            scoreIncrement(scoreBycorrectAnswer);
        }
        PlayerselectedChoice.classList.add(addToClass);
        //set time (1 sec) to remove the effect and call GenerateNewQues() methode for the next question and so on
        setTimeout(function () {
            PlayerselectedChoice.classList.remove(addToClass);
            GenerateNewQues();
        }, 1000);

    });
});

let scoreIncrement = function (addToScore) {
    score += addToScore;
    displayScore.innerText = "Score: " + score;  //display score
}


//  JQuery - Start Point
$(document).ready(function () {
    $(".question_box").hide();

    const timeout = function () {

        $(".level1_page").css({
            "filter": "blur(8px)",
            "-webkit-filter": "blur(8px)",
        })
        $(".question_box").show();

        startGame();
    }
    setTimeout(timeout, 62000);
})








