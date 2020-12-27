const score = localStorage.getItem("theScore");
const scoreBycorrectAnswer = localStorage.getItem("scoreBycorrectAnswer");
const numberOfAllQues = localStorage.getItem("numberOfAllQues");

const result = document.getElementById("result");



$(document).ready(function () {
    //hide all icons except (next level icone)
    $("i:not(.fas fa-chevron-circle-right)").hide();
    if (score == scoreBycorrectAnswer * numberOfAllQues) {
        result.innerText = "WOW, YOU HAVE AN EXCELLENT VISUAL MEMORY!!"
        $(".fa-grin-stars").show();
    } else if (score >= (scoreBycorrectAnswer * numberOfAllQues) / 2) {
        result.innerText = "OK, YOU DID PRETTY WELL";
        $(".fa-smile-wink").show();
    } else {
        result.innerText = "YOU REMEMBER ME, AREN'T YOU?";
        $(".fa-sad-tear").show();
    }
})