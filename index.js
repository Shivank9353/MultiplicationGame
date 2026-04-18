const num1 = Math.ceil(Math.random()*30);
const num2 = Math.ceil(Math.random()*10);



const quesEl = document.getElementById("question");
const formE1 = document.getElementById("form");
const inputE1 = document.getElementById("input");
const scoreE1 = document.getElementById("score");


let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score =0;

}
scoreE1.innerText = `score: ${score}`

quesEl.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1*num2;
formE1.addEventListener("submit",()=>{
    const userAns = +inputE1.value;
    if(userAns===correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }


});
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
const timerEl = document.getElementById("timer");

let timeLeft = 15;

const countdown = setInterval(() => {
    timeLeft--;
    timerEl.innerText = `Time: ${timeLeft}s`;

    if (timeLeft === 0) {
        clearInterval(countdown);
        alert("Time's up!");

        // optional: auto-submit or reduce score
        score--;
        updateLocalStorage();
        location.reload(); // reload for next question
    }
}, 1000);