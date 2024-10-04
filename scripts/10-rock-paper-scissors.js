let score=JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    losses:0,
    ties:0
};


updateScoreElement();
 
  function updateScoreElement(){
    document.querySelector('.js-score')
      .innerHTML = `Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;

  }


//reset button will not work in this scenario because score is stored in local storage 
//and every time we refresh the page it will take  the value of score from local 
//storage(to check first reset then refresh)
function playGame (playerMove) {
  const computerMove=pickComputerMove();
      let result='';
  if(playerMove==='paper'){
    if(computerMove==='rock'){
      result='You win';
      }
      else if(computerMove==='paper')
      {
        result='tie';
      }
      else{
        result='You lose';
      }
    }
    else if(playerMove==='rock'){
     
      if(computerMove==='rock'){
          result='tie';
      }
      else if(computerMove==='paper')
      {
        result='You lose';
      }
      else{
        result='You win';
      }
     
    }
    else{
      
      if(computerMove==='rock'){
        result='You lose';
      }
      else if(computerMove==='paper')
      {
        result='You win';
      }
      else{
        result='tie';
      }

    }
    if(result==='You win'){
        score.wins+=1;  
      }
      else if(result==='You lose'){
        score.losses+=1;
      }
      else if (result==='tie'){
        score.ties+=1;
      }

    localStorage.setItem('score',JSON.stringify(score));
     
    updateScoreElement();

    document.querySelector('.js-result')
      .innerHTML = `${result}`;
    document.querySelector('.js-moves')
      .innerHTML = `You
        <img src="../images/${playerMove}-emoji.png" alt="" class="move-icon">
        <img src="../images/${computerMove}-emoji.png" class="move-icon" alt="">
        Computer`;

    alert(`you picked ${playerMove}.computer picked ${computerMove}.${result}
    Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`);
  
}


//solution for error showing:computerMove not defined
let computerMove='';

function pickComputerMove(){
  
  const RandNum=Math.random();
 
    if(RandNum>=0 && RandNum<1/3)
      computerMove='rock';
    else if(RandNum>=1/3 && RandNum<2/3)
      computerMove='paper';
    else
      computerMove='scissors';
  //accessing a variable outside function without declaring it outside the function
  return computerMove;
}