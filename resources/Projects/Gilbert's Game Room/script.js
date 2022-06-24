let countries = ["Afghanistan","Argentina","Australia","Austria","Belgium", "Brazil", "Cambodia","China","Croatia","Denmark","Egypt","Finland","France","Germany","Greenland","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy"];
let population = [39000000,45000000,25000000,9000000,11500000,212000000,16000000,1400000000,4000000,6000000,102000000,5500000,67000000,83000000,56400,9900000,7400000,9700000,340000, 1380000000, 274000000, 84000000, 40000000, 4900000, 8650000, 60400000];
let countriesCopy = countries;
let populationCopy = population;

let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
    modal.style.display = "block"
}
closeBtn.onclick = function(){
    modal.style.display = "none"
}
window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none"
    }
}

let startBtn = document.getElementById("startBtn");
let highBtn = document.getElementById("higherBtn");
let lowerBtn = document.getElementById("lowerBtn");
let nextBtn = document.getElementById("nextBtn");
let resetBtn = document.getElementById("reset");
let Round = 0;
let playerScore = 0;
let countryA = 0;
let countryB = 0;
let populationB = 0;
let populationA = 0;

startBtn.addEventListener("click", startGame);
highBtn.addEventListener("click",pressHigher);
lowerBtn.addEventListener("click",pressLower);
nextBtn.addEventListener("click",nextQuestion);
resetBtn.addEventListener("click",resetGame);

function startGame(){
    startBtn.style.visibility='hidden';
   //document.getElementById('question').innerHTML = `crazy ${countries[3]}`;
    newQuestion();
    //document.getElementById('playerScore').innerHTML = `countries ${countries.length}  population ${population.length}`;
}


function newQuestion(){
    highBtn.style.visibility='visible';
    lowerBtn.style.visibility='visible';
    document.getElementById('reset').style.visibility='visible';
    document.getElementById('question').style.visibility='visible';
    document.getElementById('results').style.visibility = 'hidden';

    let x = Math.floor(Math.random()*countries.length);
    countryA = countries[x];
    populationA = population[x];
    //remove these elments from the array
    countries.splice(x,1);
    population.splice(x,1);

    let y = Math.floor(Math.random()*countries.length);
    countryB = countries[y];
    populationB = population[y];
    countries.splice(y,1);
    population.splice(y,1);
    document.getElementById('question').innerHTML = `Is the population of ${countryA} higher or lower than population of ${countryB} ?`;

    if(populationA>populationB){
        document.getElementById('results').innerHTML = ` ${countryA} has a higher population of ${populationA} compared to ${countryB}'s ${populationB}`;
    }else{
        document.getElementById('results').innerHTML = ` ${countryA} has a lower population of ${populationA} compared to ${countryB}'s ${populationB}`;
    };

    Round+=1;
    document.getElementById('compScore').innerHTML = `Round: ${Round}`;
}

function pressHigher(){
    if(populationA>populationB){
        document.getElementById('question').innerHTML = "Congratulations, You chosen the correct answer !";
        playerScore+=1;
        document.getElementById('playerScore').innerHTML = `Player Score : ${playerScore}`;
    } else{
        document.getElementById('question').innerHTML = "You chosen the wrong answer !"
    }
    document.getElementById('results').style.visibility = 'visible';
    nextBtn.style.visibility = 'visible';
    highBtn.style.visibility='hidden';
    lowerBtn.style.visibility='hidden';
}

function pressLower(){
    if(populationB>populationA){
        document.getElementById('question').innerHTML = "Congratulations, You chosen the correct answer !"
        playerScore+=1;
        document.getElementById('playerScore').innerHTML = `Player Score : ${playerScore}`;
    } else{
        document.getElementById('question').innerHTML = "You chosen the wrong answer !"
    }
    document.getElementById('results').style.visibility = 'visible';
    nextBtn.style.visibility = 'visible';
    highBtn.style.visibility='hidden';
    lowerBtn.style.visibility='hidden';
}

function nextQuestion(){
    if(Round<6){
        newQuestion();
    } else {
        endGame();
    }
    
}

function endGame(){
    nextBtn.style.visibility = 'hidden';
    document.getElementById('question').innerHTML = `Your Final Score is ${playerScore} !`;
    document.getElementById('results').innerHTML = "Press Reset Game to start again !"
}

function resetGame(){
    Round = 0;
    playerScore = 0;
    document.getElementById('playerScore').innerHTML = `Player Score : ${playerScore}`;
    countries = countriesCopy;
    population = populationCopy;
    startBtn.style.visibility='hidden';
    newQuestion();
}