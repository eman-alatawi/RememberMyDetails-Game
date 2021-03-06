const score = localStorage.getItem("theScore"); //most recent score
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

//to know what the previous level the player was in and get there, and to direct him to another level
var previous_url = document.referrer;

// console.log("previous url: "+previous_url);

let newLevel = function () {
    if (previous_url === "https://pages.git.generalassemb.ly/eman-e-alatawi/RememberMyDetails/level1.html") {
        window.location.assign("https://pages.git.generalassemb.ly/eman-e-alatawi/RememberMyDetails/level2.html");
    } else if (previous_url === "https://pages.git.generalassemb.ly/eman-e-alatawi/RememberMyDetails/level2.html") {
        window.location.assign("https://pages.git.generalassemb.ly/eman-e-alatawi/RememberMyDetails/level3.html");
    }
    else if (previous_url === "https://pages.git.generalassemb.ly/eman-e-alatawi/RememberMyDetails/level3.html"){
        window.location.assign("https://pages.git.generalassemb.ly/eman-e-alatawi/RememberMyDetails/level4.html");
    }
    else if (previous_url === "https://pages.git.generalassemb.ly/eman-e-alatawi/RememberMyDetails/level4.html"){
        window.location.assign("https://pages.git.generalassemb.ly/eman-e-alatawi/RememberMyDetails/gameOver.html");
    }
    

}