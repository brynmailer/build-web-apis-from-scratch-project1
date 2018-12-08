// player one move type
let playerOneMoveOneType
let playerOneMoveTwoType
let playerOneMoveThreeType

// player two move type
let playerTwoMoveOneType
let playerTwoMoveTwoType
let playerTwoMoveThreeType

// player one move values
let playerOneMoveOneValue
let playerOneMoveTwoValue
let playerOneMoveThreeValue

// player two move values
let playerTwoMoveOneValue
let playerTwoMoveTwoValue
let playerTwoMoveThreeValue

// constants called upon frequently
const P1 = 'Player One'
const P2 = 'Player Two'
const TIE = 'Tie'
const ROCK = 'rock'
const SCISSORS = 'scissors'
const PAPER = 'paper'

// functionality to set the player's moves
const setPlayerMoves = (player, m1t, m1v, m2t, m2v, m3t, m3v) => {
  if (!m1t || !m1v || !m2t || !m2v || !m3t || !m3v) {
    return
  }

  if (!correctTypes(m1t, m2t, m3t)) {
    return
  }

  if (!correctValues(m1v, m2v, m3v)) {
    return
  }

  switch (player) {
    case P1:
      playerOneMoveOneType = m1t
      playerOneMoveTwoType = m2t
      playerOneMoveThreeType = m3t
      playerOneMoveOneValue = m1v
      playerOneMoveTwoValue = m2v
      playerOneMoveThreeValue = m3v
      break
    case P2:
      playerTwoMoveOneType = m1t
      playerTwoMoveTwoType = m2t
      playerTwoMoveThreeType = m3t
      playerTwoMoveOneValue = m1v
      playerTwoMoveTwoValue = m2v
      playerTwoMoveThreeValue = m3v
      break
  }
}

// functionality to check if move types are valid
const correctTypes = (t1, t2, t3) =>
  correctType(t1) && correctType(t2) && correctType(t3)

// functionality to check if move type is valid
const correctType = t => t === ROCK || t === SCISSORS || t === PAPER

// functionality to check if move values are valid
const correctValues = (v1, v2, v3) =>
  v1 >= 1 && v2 >= 1 && v3 >= 1 && v1 + v2 + v3 <= 99

// functionality to get the winner of the round
const getRoundWinner = roundNumber => {
  debugger
  if (!checkRoundNumber(roundNumber)) {
    return null
  }

  if (
    !playerOneMoveOneType ||
    !playerOneMoveTwoType ||
    !playerOneMoveThreeType ||
    !playerOneMoveOneValue ||
    !playerOneMoveTwoValue ||
    !playerOneMoveThreeValue ||
    !playerTwoMoveOneType ||
    !playerTwoMoveTwoType ||
    !playerTwoMoveThreeType ||
    !playerTwoMoveOneValue ||
    !playerTwoMoveTwoValue ||
    !playerTwoMoveThreeValue
  ) {
    return null
  }
}

// functionality to compare the move types involved in a round
const compareTypes = (t1, t2) => {
  return t1 === ROCK && t2 === SCISSORS
    ? P1
    : t1 === PAPER && t2 === ROCK
      ? P1
      : t1 === SCISSORS && t2 === PAPER
        ? P1
        : t1 === SCISSORS && t2 === ROCK
          ? P2
          : t1 === ROCK && t2 === PAPER
            ? P2
            : t1 === PAPER && t2 === SCISSORS
              ? P2
              : TIE
}

// functionality to compare the move values involved in a round
const compareValues = (v1, v2) => {
  return v1 > v2 ? P1 : v1 < v2 ? P2 : TIE
}

// functionality to check if the round number is valid
const checkRoundNumber = rn => rn > 0 && rn < 4

// functionality to get the winner of the game
const getGameWinner = () => {}

// functionality to set the computer's moves
const setComputerMoves = () => {}
