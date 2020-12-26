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

var ques = $(".question_box > h2");
var answers = $(".answer");
// console.log(answers);

let currentQues = {};
var score = 0 ;
let quesCounter = 0;
let remainingQues = [];


//levelQuestions array with litral object
let levelQuestions = [
    {
        question: "Is there a Hammer in the image?",
        playerChoice: "YES",
        playerChoice: "NO",
        correctAnswer:1
    },
    {
        question: "Is there a Comb in the image?",
        playerChoice: "YES",
        playerChoice: "NO",
        correctAnswer:2
    },
    {
        question: "Is there a Saw in the image?",
        playerChoice: "YES",
        playerChoice: "NO",
        correctAnswer:1
    },
    {
        question: "Is there a TV in the image?",
        playerChoice: "YES",
        playerChoice: "NO",
        correctAnswer:2
    },
    {
        question: "Is there a Gallon in the image?",
        playerChoice: "YES",
        playerChoice: "NO",
        correctAnswer:1
    },
    {
        question: "Is there a Ruler in the image?",
        playerChoice: "YES",
        playerChoice: "NO",
        correctAnswer:1
    },
    {
        question: "Is there a Car in the image?",
        playerChoice: "YES",
        playerChoice: "NO",
        correctAnswer:2
    },
    {
        question: "Is there a Chain in the image?",
        playerChoice: "YES",
        playerChoice: "NO",
        correctAnswer:2
    },
    
];
// console.log(levelQuestions);




// // $(document).ready(function () {
//     $(".question_box").hide();

//     const timeout = function () {

//         $(".level1_page").css({
//             "filter": "blur(8px)",
//             "-webkit-filter": "blur(8px)",
//         })
//         $(".question_box").show();

//     }
//     setTimeout(timeout, 62000);
// // })








