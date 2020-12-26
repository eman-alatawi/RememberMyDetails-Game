// count Down timer

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

// Elements 
const ques = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer"));
const displayQuestionCounter = document.getElementById("questionCounter");
const displayScore = document.getElementById("score");

// console.log(answers);

let currentQues = {};
var score = 0;
let acceptingAnswers = false;
let quesCounter = 0;
let remainingQues = [];


//levelQuestions array with litral object
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

const scoreBycorrectAnswer = 5;
const numberOfAllQues = 8;

let startGame = function () {
    quesCounter = 0;
    score = 0;
    remainingQues = [...levelQuestions];
    // console.log(remainingQues);
    GenerateNewQues();
    ques.innerText = currentQues.question;

};

let GenerateNewQues = function () {

    if (remainingQues.length === 0 || quesCounter >= numberOfAllQues) {
        //go to next level 
        return window.location.assign("/level2.html");
    }
    quesCounter++;
    displayQuestionCounter.innerText = "Question:" + quesCounter + "/" + numberOfAllQues;
    //generate random question
    const quesIndex = Math.floor(Math.random() * remainingQues.length);
    currentQues = remainingQues[quesIndex];
    ques.innerText = currentQues.question;

    answers.forEach(answer => {
        const choice = answer.dataset["choice"];
        answer.innerText = currentQues["playerChoice" + choice];
    });
    //remove the already used question
    remainingQues.splice(quesIndex, 1);

    acceptingAnswers = true;
}

answers.forEach(answer => {
    answer.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;

        const PlayerselectedChoice = e.target;
        const selectedAnswer = PlayerselectedChoice.dataset["choice"];

        const addToClass = selectedAnswer == currentQues.correctAnswer ? 'correctClass' : 'wrongClass';

        if (addToClass === 'correctClass'){
            scoreIncrement(scoreBycorrectAnswer);
        }
        PlayerselectedChoice.classList.add(addToClass);

        setTimeout(function(){
            PlayerselectedChoice.classList.remove(addToClass);
            GenerateNewQues();
        },1000);

        console.log();
       
    });
});

let scoreIncrement = function(addToScore){
    score += addToScore;
    displayScore.innerText = "Score: "+ score;
}

// startGame();


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








