//Player 1
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

//Player 2
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

//Functions

const moveChecer = (moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  if((moveOneType === 'rock' || moveOneType ==='scissors' || moveOneType==='paper')&&(moveTwoType === 'rock' || moveTwoType ==='scissors' || moveTwoType==='paper')&&(moveThreeType === 'rock' || moveThreeType ==='scissors' || moveThreeType==='paper')&&(moveOneValue>=1 && moveOneValue<=99) &&(moveTwoValue>=1 && moveTwoValue<=99) && (moveThreeValue>=1 && moveThreeValue<=99) && ((moveOneValue+moveTwoValue+moveThreeValue)<=99)){
    return true
  }
  return false
}

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  if(moveChecer(moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue)){
    if (player === 'Player One'){
      playerOneMoveOneType = moveOneType;
      playerOneMoveTwoType = moveTwoType;
      playerOneMoveThreeType = moveThreeType;

      playerOneMoveOneValue = moveOneValue;
      playerOneMoveTwoValue= moveTwoValue;
      playerOneMoveThreeValue = moveThreeValue

    }else {
      playerTwoMoveOneType = moveOneType;
      playerTwoMoveTwoType = moveTwoType;
      playerTwoMoveThreeType = moveThreeType;

      playerTwoMoveOneValue = moveOneValue;
      playerTwoMoveTwoValue= moveTwoValue;
      playerTwoMoveThreeValue = moveThreeValue
    }
  }
}



const getRoundWinner = (roundNum) => {
  // if(moveChecer(playerOneMoveOneType, playerOneMoveOneValue, playerOneMoveTwoType, playerOneMoveTwoValue, playerOneMoveThreeType, playerOneMoveThreeValue) && moveChecer(playerTwoMoveOneType, playerTwoMoveOneValue, playerTwoMoveTwoType, playerTwoMoveTwoValue, playerTwoMoveThreeType, playerTwoMoveThreeValue)){
    if(roundNum === 1){
      if(playerOneMoveOneValue === playerTwoMoveOneValue){
        if((playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'scissors' ) || (playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'rock' ) || (playerOneMoveOneType ==='scissors' && playerTwoMoveOneType === 'paper')){
          return 'Player One'
        }else if(playerOneMoveOneType === playerTwoMoveOneType){return 'Tie'}
        else {return 'Player Two'}
      }
      else if(playerOneMoveOneValue > playerTwoMoveOneType){
        if((playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'scissors' ) || (playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'rock' ) || (playerOneMoveOneType ==='scissors' && playerTwoMoveOneType === 'paper')){
          return 'Player One'
        }
        else if(playerOneMoveOneType === playerTwoMoveOneType){return 'Player One'}
        else {return 'Player Two'}
      }else {
        if((playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'scissors' ) || (playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'rock' ) || (playerOneMoveOneType ==='scissors' && playerTwoMoveOneType === 'paper')){
          return 'Player One'
        }
        else if(playerOneMoveOneType === playerTwoMoveOneType){return 'Player Two'}
        else {return 'Player Two'}
      }

    }else if(roundNum === 2){
      if(playerOneMoveTwoValue === playerTwoMoveTwoValue){
        if((playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'scissors' ) || (playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'rock' ) || (playerOneMoveTwoType ==='scissors' && playerTwoMoveTwoType === 'paper')){
          return 'Player One'
        }else if(playerOneMoveTwoType === playerTwoMoveTwoType){return 'Tie'}
        else {return 'Player Two'}
      }
      else if(playerOneMoveTwoValue > playerTwoMoveTwoType){
        if((playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'scissors' ) || (playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'rock' ) || (playerOneMoveTwoType ==='scissors' && playerTwoMoveTwoType === 'paper')){
          return 'Player One'
        }
        else if(playerOneMoveTwoType === playerTwoMoveTwoType){return 'Player One'}
        else {return 'Player Two'}
      }else {
        if((playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'scissors' ) || (playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'rock' ) || (playerOneMoveTwoType ==='scissors' && playerTwoMoveTwoType === 'paper')){
          return 'Player One'
        }
        else if(playerOneMoveTwoType === playerTwoMoveTwoType){return 'Player Two'}
        else {return 'Player Two'}
      }
    }else if (roundNum ===  3){
      if(playerOneMoveThreeValue === playerTwoMoveThreeValue){
        if((playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'scissors' ) || (playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'rock' ) || (playerOneMoveThreeType ==='scissors' && playerTwoMoveThreeType === 'paper')){
          return 'Player One'
        }else if(playerOneMoveThreeType === playerTwoMoveThreeType){return 'Tie'}
        else {return 'Player Two'}
      }
      else if(playerOneMoveThreeValue > playerTwoMoveThreeType){
        if((playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'scissors' ) || (playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'rock' ) || (playerOneMoveThreeType ==='scissors' && playerTwoMoveThreeType === 'paper')){
          return 'Player One'
        }
        else if(playerOneMoveThreeType === playerTwoMoveThreeType){return 'Player One'}
        else {return 'Player Two'}
      }else {
        if((playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'scissors' ) || (playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'rock' ) || (playerOneMoveThreeType ==='scissors' && playerTwoMoveThreeType === 'paper')){
          return 'Player One'
        }
        else if(playerOneMoveThreeType === playerTwoMoveThreeType){return 'Player Two'}
        else {return 'Player Two'}
    }
  }else {
    return null
  }
// }else{
//   return null
// }
}

const getGameWinner =()=> {
  let count1 =0
  let count2 =0
  let roundOne = getRoundWinner(1)
  let roundTwo = getRoundWinner(2)
  let roundThree = getRoundWinner(3)

  if(roundOne ==='Player One'){
    count1++
  }else if(roundOne ==='Player Two'){
    count2++
  }

  if(roundTwo ==='Player One'){
    count1++
  }else if(roundTwo ==='Player Two'){
    count2++
  }

  if(roundThree ==='Player One'){
    count1++
  }else if(roundThree ==='Player Two'){
    count2++
  }

  if(count1 > count2){
    return 'Player One'
  }else if (count2 > count1){
    return 'Player Two'
  }else {
    return 'Tie'
  }
}