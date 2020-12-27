// console.log("from level 1 js");

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

import { startGame } from './main.js';

//  JQuery - Start Point
$(document).ready(function () {
    $(".question_box").hide();

    const timeout = function () {

        $(".level1_page").css({
            "filter": "blur(8px)",
            "-webkit-filter": "blur(8px)",
        })
        $(".question_box").show();

        startGame(levelQuestions);
    }
    setTimeout(timeout, 62000);
})