
const scoresArray = localStorage.getItem("scoresArray");
var array = JSON.parse(scoresArray);

var dispalyLevelScore = $("#levelScore");
for (var i = 0; i < array.length; i++) {
    dispalyLevelScore.append("<h2>YOUR LEVEL "+(i+1)+ " SCORE: " + array[i] + "</h2>");
}

