console.log("from level 2 js")

//levelQuestions array with litral objects

let levelQuestions = [
    {
        question: "Is there a Chocolate in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a spoon in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 2
    },
    {
        question: "Is there a tape in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a cup water in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 2
    },
    {
        question: "Is there a candle in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a turtle in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a calender in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 2
    },
    {
        question: "Is there a flower in the image?",
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