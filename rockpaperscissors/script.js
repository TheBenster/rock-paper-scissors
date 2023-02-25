function computerChoice(){
    choices = ['rock', 'paper', 'scissors'];
    randomChoice = Math.floor(Math.random() * 3) + 1;
    if(randomChoice == 1){
        randomChoice = choices[0]
    } else if (randomChoice == 2){
        randomChoice = choices[1]
    } else {
        randomChoice = choices[2]
    };
    return randomChoice
}

function playRound(){
    comChoice = computerChoice()
    playerChoice = prompt('rock, paper or scissors?: ')
    playerScore = 0;
    comScore = 0;
    
        if(playerChoice == comChoice){
            alert(`It's a tie! you both picked ${comChoice}`)
            alert(`Player score is: ${playerScore}. Computer Score is: ${comScore}`)
        // Player picks ROCK
        } else if(playerChoice == 'rock'){
            if(comChoice == 'scissors'){
                alert('You win! Rock beats scissors')
                playerScore += 1;
                alert(`Player score is: ${playerScore}. Computer Score is: ${comScore}`)
            }else if(comChoice == 'paper'){
                alert('You lost, paper beats rock')
                comScore += 1;
                alert(`Player score is: ${playerScore}. Computer Score is: ${comScore}`)
            }
            
        // Player picks PAPER
        } else if(playerChoice == 'paper'){
            if(comChoice == 'scissors'){
                alert('You lost, scissors beats paper')
                comScore += 1;
                alert(`Player score is: ${playerScore}. Computer Score is: ${comScore}`)
            } else if (comChoice == 'rock'){
                alert('You win! Paper beats rock')
                playerScore += 1;
                alert(`Player score is: ${playerScore}. Computer Score is: ${comScore}`)
            } 
            
            
        //Player picks SCISSORS
        } else if(playerChoice == 'scissors'){
            if(comChoice == 'rock'){
                alert('You lost, rock beats scissors')
                comScore += 1;
                alert(`Player score is: ${playerScore}. Computer Score is: ${comScore}`)
            } else if (comChoice == 'paper'){
                alert('You win! Scissors beats paper')
                playerScore += 1;
                alert(`Player score is: ${playerScore}. Computer Score is: ${comScore}`)
            }
            
        }
    }
    function playGame(comScore, playerScore){
        for(let i =0; i<5; i++){
            playRound()
            if(comScore == 5){
                alert("The computer wins! better luck next time")
                break
            } else if (playerScore == 5){
                alert('You win! You beat the computer')
                break
            }

        }
    }
playGame();