
const scoresArray = localStorage.getItem("scoresArray");
var array = JSON.parse(scoresArray);

var dispalyLevelScore = $("#levelScore");
for (var i = 0; i < array.length; i++) {
    dispalyLevelScore.append("<h2>YOUR REACENT SCORE:" + array[i] + "</h2>");
}

