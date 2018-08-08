var p1button = document.getElementById("P1");
var p2button = document.querySelector("#P2");
var resetButton = document.getElementById("Reset");
var p1display = document.getElementById("p1display");
var p2display = document.getElementById("p2display");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span")
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        if(p1score === winningScore){
            p1display.classList.add("winner");
            gameOver = true;
        }
        p1display.textContent = p1score; 
    }
});

p2button.addEventListener("click", function(){
    if(!gameOver){
    p2score++;
    if(p2score === winningScore){
        p2display.classList.add("winner");
        gameOver = true;
    }
    p2display.textContent = p2score;
    }
});

resetButton.addEventListener("click", function(){
   reset();
});

function reset(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();

});


