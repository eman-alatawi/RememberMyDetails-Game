const score = localStorage.getItem("theScore");
const scoreBycorrectAnswer = localStorage.getItem("scoreBycorrectAnswer");
const numberOfAllQues = localStorage.getItem("numberOfAllQues");

const result = document.getElementById("result");



$(document).ready(function () {
    //show the icone based on the score
    $(".emoji i").hide();
    if (score == scoreBycorrectAnswer * numberOfAllQues) {  //top score = 40
        result.innerText = "WOW, YOU HAVE AN EXCELLENT VISUAL MEMORY!!"
        $(".fa-grin-stars").show();
    } else if (score >= (scoreBycorrectAnswer * numberOfAllQues) / 2) {  // >= 20
        result.innerText = "OK, YOU DID PRETTY WELL";
        $(".fa-smile-wink").show();
    } else {    // < 20
        result.innerText = "YOU REMEMBER ME, AREN'T YOU?";
        $(".fa-sad-tear").show();
    }
})