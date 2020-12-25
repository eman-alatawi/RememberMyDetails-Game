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

let checkForObjectName = function(str){
    // return str.includes(levels.level_1);
    for (var i =0 ; i<levels.level_1.length; i++)
    {
        // console.log(str.includes(levels.level_1[i]))
        return str.includes(levels.level_1[i]);
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
        var q = $(".question_box > h2").html("Is there a " + levels.level_1[0] + " in the image?").text();
        console.log(q);
        $(".answer").click(function(){
           var playerChoice = $(this).attr("id");
           console.log(playerChoice);

           var checkResult = checkForObjectName(q);
           console.log(checkResult);

           if(checkResult ==true){
               if(playerChoice == "yes")
               score++;
           }

           console.log(score);
        })
    }
    setTimeout(timeout, 62000);






})







