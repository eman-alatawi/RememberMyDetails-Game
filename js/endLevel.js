const score = localStorage.getItem("theScore");
const scoreBycorrectAnswer = localStorage.getItem("scoreBycorrectAnswer");
const numberOfAllQues = localStorage.getItem("numberOfAllQues");

const ques = document.getElementById("question");

if(score == scoreBycorrectAnswer * numberOfAllQues){
    ques.innerText = "WOW, YOU HAVE AN EXCELLENT VISUAL MEMORY!!"
}else if(score >= (scoreBycorrectAnswer * numberOfAllQues)/2){
    ques.innerText = "OK, YOU DID PRETTY WELL";
}else{
    ques.innerText = "YOU REMEMBER ME, AREN'T YOU?";
}