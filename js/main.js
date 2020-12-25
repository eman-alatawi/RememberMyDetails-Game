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

//levels litral object
let levels = {
    level_1: ["Hammer", "Gallon", "Saw", "Ruler"]
}

let score = 0;

// let checkForObjectName = function(hidden_word){
//     // return str.includes(levels.level_1);
//     for (var i =0 ; i<levels.level_1.length; i++)
//     {
//         console.log(levels.level_1[i].search(hidden_word))
//         // return str.includes(levels.level_1[i]);
//     }
// }

var checkForHiddenWord = function (question, hidden_word) {
    var qusSplit = question.split(' ');

    for (var i = 0; i < qusSplit.length; i++) {
        if (qusSplit[i] == (hidden_word)) {
            //   console.log("true found word "+qusSplit[i]);
            return true;
        }
    }
}


$(document).ready(function () {
    $(".question_box").hide();

    const timeout = function () {

        $(".level1_page").css({
            "filter": "blur(8px)",
            "-webkit-filter": "blur(8px)",
        })
        $(".question_box").show();

        // first question
        var q = $(".question_box > h2").html("Is there a " + levels.level_1[1] + " in the image?").text();
        var hidden_word = levels.level_1[1];
        console.log(hidden_word);
        $(".answer").click(function () {
            var playerChoice = $(this).attr("id");
            console.log(playerChoice);

            var checkResult = checkForHiddenWord(q, hidden_word);
            console.log(checkResult);

            if (checkResult == true) {
                if (playerChoice == "yes")
                    if (score < 4)
                        score++;
            }
            console.log(score);
            $(".score").html("Score: " + score + " / 4");
        })

    }
    setTimeout(timeout, 62000);











})







