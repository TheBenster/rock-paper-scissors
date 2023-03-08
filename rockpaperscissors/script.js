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
        } else if(playerChoice == rock.textContent){
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
        } else if(playerChoice == paper.textContent){
            if(comChoice == 'scissors'){
                comScore += 1;
                message.textContent = `You lost, scissors beats paper. Player score is: ${playerScore}. Computer Score is: ${comScore}`
            } else if (comChoice == 'rock'){
                playerScore += 1;
                message.textContent = `You win! Paper beats rock. Player score is: ${playerScore}. Computer Score is: ${comScore}`
            } 
            
        //Player picks SCISSORS
        } else if(playerChoice == scissors.textContent){
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
    }


    function playGame(comScore, playerScore){
        for(let i =0; i<5; i++){
            playRound()
            if(tie= true){
                i--;
            }
            if(comScore == 5){
                console.log("The computer wins! better luck next time")
                break
            } else if (playerScore == 5){
                console.log('You win! You beat the computer')
                break
            }

        }
    }

let rock = document.querySelector('#rock')
rock.textContent = 'rock'
let paper = document.querySelector('#paper')
paper.textContent = 'paper'
let scissors = document.querySelector('#scissors')
scissors.textContent = 'scissors'
let message = document.querySelector('#message')
message.setAttribute('style', 'font-size:20px;')

const player = [rock, paper, scissors];

rock.addEventListener('click', function(){
    play = player[0].textContent;
    playRound(play);
});
paper.addEventListener('click', function(){
    play = player[1].textContent;
    playRound(play);
});
scissors.addEventListener('click', function(){
    play = player[2].textContent;
    playRound(play);
});