console.log("hi")



//levelQuestions array with litral objects

let levelQuestions = [
    {
        question: "Is there an Eiffel tower in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a Yellow Flower in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 2
    },
    {
        question: "Is there a Cat in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a Key in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 2
    },
    {
        question: "Is there a Picture in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a Dove in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 1
    },
    {
        question: "Is there a Cake in the image?",
        playerChoice1: "YES",
        playerChoice2: "NO",
        correctAnswer: 2
    },
    {
        question: "Is there a Curtain in the image?",
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

        $(".level3_page").css({
            "filter": "blur(8px)",
            "-webkit-filter": "blur(8px)",
        })
        $(".question_box").show();

        startGame(levelQuestions);
    }
    setTimeout(timeout, 62000);
})