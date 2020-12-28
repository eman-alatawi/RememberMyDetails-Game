

//levelQuestions array with litral objects

let levelQuestions = [
    {
        question: "Is there a Chocolate in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a Spoon in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 2
    },
    {
        question: "Is there a Tape in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a Cup of Water in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 2
    },
    {
        question: "Is there a Candle in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a Turtle in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a Calender in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 2
    },
    {
        question: "Is there a Flower in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },

];

import { startGame } from './main.js';


//  JQuery - Start Point
$(document).ready(function () {
    $(".question_box").hide();

    const timeout = function () {

        $(".level2_page").css({
            "filter": "blur(8px)",
            "-webkit-filter": "blur(8px)",
        })
        $(".question_box").show();

        startGame(levelQuestions);
    }
    setTimeout(timeout, 62000);
})