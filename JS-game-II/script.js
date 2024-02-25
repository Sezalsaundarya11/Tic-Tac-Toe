let choice = document.querySelectorAll('.choice');
let user = document.querySelector('#user');
let comp = document.querySelector('#computer');
const scoreBtn = document.querySelector('#score-btn');

let userPoint =0;
let compPoint =0;

const drawGame = () =>{
    scoreBtn.innerText = "It's a Draw";  
}

const  getComputerChoice = () =>{
    const compChoices = ['rock','paper', 'scissors'];
    const index=  Math.floor(Math.random() * compChoices.length); //generating random index between 0-2
    return compChoices[index];
}; 

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userPoint++;
        user.innerText = userPoint;
        scoreBtn.innerText = `You win! your ${userChoice} beats ${compChoice}.`;
    }
    else {
        compPoint++;
        comp.innerText = compPoint;
        scoreBtn.innerText = `You Loose! computer's ${compChoice} beats ${userChoice}`;

    }
}


const playGame = (userChoice) =>{
    const compChoice = getComputerChoice();

    if(userChoice===compChoice)
        drawGame();
    else {
        let userWin =true;

        if(userChoice === 'rock') {
            //paper scissors
            userWin = compChoice === 'paper'? false : true;
        }
        else if(userChoice === 'paper') {
            //rock scissors
            userWin = compChoice === 'scissors'? false : true;
        }
        else if(userChoice === 'scissors') {
            //paper rock
            userWin = compChoice === 'rock' ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);  
    }

     
}

choice.forEach((item) =>{
    item.addEventListener('click', ()=>{
        const userChoice = item.getAttribute('id');
        playGame(userChoice);
    })
});




