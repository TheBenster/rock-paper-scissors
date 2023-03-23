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

// function winCondition(){
//     if(playerScore === 5){
//         winner = true
//         message.textContent = 'Player Wins!!'
//     } else if (comScore === 5){
//         winner = true
//         message.textContent = 'Computer Wins!!'
//         return 
//     }
    
// }
playerScore = 0;
comScore = 0;
function playRound(args){
    comChoice = computerChoice()
    let playerChoice = args
        if(playerChoice == comChoice){
            console.log()
            let tie = true;
            message.textContent = `It's a tie! you both picked ${comChoice}. Player score: ${playerScore}. Computer Score: ${comScore}`
        // Player picks ROCK
        } else if(playerChoice == 'rock'){
            if(comChoice == 'scissors'){
                message.textContent = ''
                playerScore += 1;
                message.textContent = `You win! Rock beats scissors. Player score: ${playerScore}. Computer Score: ${comScore}`
            }else if(comChoice == 'paper'){
                message.textContent = ''
                comScore += 1;
                message.textContent = `You lost, paper beats rock. Player score: ${playerScore}. Computer Score: ${comScore}`
            }
            
        // Player picks PAPER
        } else if(playerChoice == 'paper'){
            if(comChoice == 'scissors'){
                comScore += 1;
                message.textContent = `You lost, scissors beats paper. Player score is: ${playerScore}. Computer Score is: ${comScore}`
            } else if (comChoice == 'rock'){
                playerScore += 1;
                message.textContent = `You win! Paper beats rock. Player score is: ${playerScore}. Computer Score is: ${comScore}`
            } 
            
        //Player picks SCISSORS
        } else if(playerChoice == 'scissors'){
            if(comChoice == 'rock'){
                console.log('')
                comScore += 1;
                message.textContent = `You lost, rock beats scissors. Player score is: ${playerScore}. Computer Score is: ${comScore}`
            } else if (comChoice == 'paper'){
                console.log('')
                playerScore += 1;
                message.textContent = `You win! Scissors beats paper. Player score is: ${playerScore}. Computer Score is: ${comScore}`
            }
            
            
            
            
        }
        
        let tryAgain =  document.querySelector('#tryAgain')
        // Stops you from being able to click on the choices, and brings up a try again button to refresh
        if(comScore == 5){
            message.textContent = "The computer wins! better luck next time"
            document.getElementById('rock').disabled = true
            document.getElementById('paper').disabled = true
            document.getElementById('scissors').disabled = true
            tryAgain.style = 'visibility: visible;'
        } else if (playerScore == 5){
            message.textContent = 'You win! You beat the computer'
            document.getElementById('rock').disabled = true
            document.getElementById('paper').disabled = true
            document.getElementById('scissors').disabled = true
            tryAgain.style = 'visibility: visible;'
        }
        
    }


    // function playGame(comScore, playerScore){
    //     for(let i =0; i<5; i++){
    //         playRound();
    //         if(tie= true){
    //             i--;
    //         }
    //         if(comScore == 5){
    //             console.log("The computer wins! better luck next time")
    //             break
    //         } else if (playerScore == 5){
    //             console.log('You win! You beat the computer')
    //             break
    //         }
    // }
    // }
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let message = document.querySelector('#message')
message.setAttribute('style', 'font-size:20px;')

// buttons.addEventListener('click', playGame())
// const player = [rock, paper, scissors];

rock.addEventListener('click', function(){
    play = 'rock'
    playRound(play);

    
});
paper.addEventListener('click', function(){
    play = 'paper';
    playRound(play);
});
scissors.addEventListener('click', function(){
    play = 'scissors';
    playRound(play);
});