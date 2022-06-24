
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

    let rockBtn = document.getElementById("rockBtn");
    let paperBtn = document.getElementById("paperBtn");
    let scissorsBtn = document.getElementById("scissorsBtn");
    let playerScore = 0;
    let compScore = 0;
    //We assign 1, 2 and 3 for the 3 different choices. 1 is rock 2 is paper 3 is scissors
    rockBtn.addEventListener("click", playRock);
    paperBtn.addEventListener("click", playPaper);
    scissorsBtn.addEventListener("click", playScissors);

    function playRock() {
        if(playerScore==10 || compScore==10){
            document.getElementById("results").innerHTML = "Game has ended. Please press Reset Game ";
            
        }else{
            document.getElementById("player1Choice").innerHTML = "You picked Rock"
            document.getElementById("player1Image").src = "images/rock.jpg";
            let computerChoice = computerPlay()
            if(computerChoice==1){
                draw();
            }else if(computerChoice==2){
                compWin();
            }else{
                playerWin();
            }
        }
     
    }

    function playPaper() {
        if(playerScore==10 || compScore==10){
            document.getElementById("results").innerHTML = "Game has ended. Please press Reset Game ";
            
        }else{
            document.getElementById("player1Choice").innerHTML = "You picked paper"
            document.getElementById("player1Image").src = "images/paper.jpg";
            let computerChoice = computerPlay()
            if(computerChoice==1){
                playerWin();
            }else if(computerChoice==2){
                draw();
            }else{
                compWin();
            }
        }
     
    }

    function playScissors() {
        if(playerScore==10 || compScore==10){
            document.getElementById("results").innerHTML = "Game has ended. Please press Reset Game ";
        }else{
            document.getElementById("player1Choice").innerHTML = "You picked scissors"
            document.getElementById("player1Image").src = "images/scissors.jpg";
            let computerChoice = computerPlay()
            if(computerChoice==1){
                compWin();
            }else if(computerChoice==2){
                playerWin();
            }else{
                draw();
            }
        }
     
    }

    function computerPlay(){
      let randomNumber = Math.random()*3;
      let computerChoice = 0;

      if(randomNumber<1){
        computerChoice = 1;
        document.getElementById("player2Choice").innerHTML = "Computer picked Rock";
        document.getElementById("player2Image").src = "images/rock.jpg";
      } else if(randomNumber<2){
        computerChoice=2;
        document.getElementById("player2Choice").innerHTML = "Computer picked Paper";
        document.getElementById("player2Image").src = "images/paper.jpg";
      }else{
        computerChoice=3;
        document.getElementById("player2Choice").innerHTML = "Computer picked Scissors";
        document.getElementById("player2Image").src = "images/scissors.jpg";
      }
      return computerChoice;
    }

    function playerWin(){
        document.getElementById("results").innerHTML = "You win this round ! ";
        playerScore += 1;
        document.getElementById("playerScore").innerHTML = `Player Score : ${playerScore}`; 

        if(playerScore>9){
            document.getElementById("results").innerHTML = "You have won the game !";
        }
      }
    
    function compWin(){
        document.getElementById("results").innerHTML = "Computer wins this round ! ";
        compScore += 1;
        document.getElementById("compScore").innerHTML = `Computer Score : ${compScore}`; 

        if(compScore>9){
            document.getElementById("results").innerHTML = "You have lost the game !";
        }
    }

    function draw(){
        document.getElementById("results").innerHTML = "This round is a draw ! ";
    }

    
    let resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", resetGame);

    function resetGame(){
        playerScore = 0;
        compScore = 0;
        document.getElementById("playerScore").innerHTML = `Player Score : ${playerScore}`; 
        document.getElementById("compScore").innerHTML = `Computer Score : ${compScore}`;
        document.getElementById("results").innerHTML = "Game reset ! Pick a hand to start ";
    }