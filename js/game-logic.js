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

// winners of each round
let r1w
let r2w
let r3w

// random int used to decide computer move types
let randInt

// player game score
let P1Score = 0
let P2Score = 0

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
  switch (roundNumber) {
    case 1:
      return getMoveWinner(
        playerOneMoveOneType,
        playerOneMoveOneValue,
        playerTwoMoveOneType,
        playerTwoMoveOneValue
      )

    case 2:
      return getMoveWinner(
        playerOneMoveTwoType,
        playerOneMoveTwoValue,
        playerTwoMoveTwoType,
        playerTwoMoveTwoValue
      )

    case 3:
      return getMoveWinner(
        playerOneMoveThreeType,
        playerOneMoveThreeValue,
        playerTwoMoveThreeType,
        playerTwoMoveThreeValue
      )

    default:
      return null
  }
}

// functionality to get the winner of the move
const getMoveWinner = (p1mt, p1mv, p2mt, p2mv) => {
  if (!p1mt || !p1mv || !p2mt || !p2mv) {
    return null
  }

  if (p1mt === p2mt) {
    if (p1mv > p2mv) {
      return P1
    } else if (p1mv < p2mv) {
      return P2
    } else {
      return TIE
    }
  }

  if (p1mt === ROCK) {
    return p2mt === SCISSORS ? P1 : p2mt === PAPER ? P2 : null
  } else if (p1mt === SCISSORS) {
    return p2mt === ROCK ? P2 : p2mt === PAPER ? P1 : null
  } else if (p1mt === PAPER) {
    return p2mt === ROCK ? P1 : p2mt === SCISSORS ? P2 : null
  }
}

// functionality to get the winner of the game
const getGameWinner = () => {
  if (
    !playerOneMoveOneType ||
    !playerOneMoveTwoType ||
    !playerOneMoveThreeType ||
    !playerTwoMoveOneType ||
    !playerTwoMoveTwoType ||
    !playerTwoMoveThreeType ||
    !playerOneMoveOneValue ||
    !playerOneMoveTwoValue ||
    !playerOneMoveThreeValue ||
    !playerTwoMoveOneValue ||
    !playerTwoMoveTwoValue ||
    !playerTwoMoveThreeValue
  ) {
    return null
  }

  r1w = getRoundWinner(1)
  r2w = getRoundWinner(2)
  r3w = getRoundWinner(3)

  zeroPlayerScore()

  if (r1w === P1) {
    P1Score++
  } else if (r1w === P2) {
    P2Score++
  }

  if (r2w === P1) {
    P1Score++
  } else if (r2w === P2) {
    P2Score++
  }

  if (r3w === P1) {
    P1Score++
  } else if (r3w === P2) {
    P2Score++
  }

  return P1Score > P2Score ? P1 : P1Score < P2Score ? P2 : TIE
}

// functionality to reset the player score after each game
const zeroPlayerScore = () => {
  P1Score = 0
  P2Score = 0
}

// functionality to set the computer's moves
const setComputerMoves = () => {
  generateMoveTypes()
  generateMoveValues()
}

// functionality to generate a random integer
const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max))
}

// functionality to set the computer's move types
const generateMoveTypes = () => {
  randInt = getRandomInt(3)

  if (randInt === 1) {
    playerTwoMoveOneType = ROCK
  } else if (randInt === 1) {
    playerTwoMoveOneType = PAPER
  } else {
    playerTwoMoveOneType = SCISSORS
  }

  randInt = getRandomInt(3)

  if (randInt === 0) {
    playerTwoMoveTwoType = ROCK
  } else if (randInt === 1) {
    playerTwoMoveTwoType = PAPER
  } else {
    playerTwoMoveTwoType = SCISSORS
  }

  randInt = getRandomInt(3)

  if (randInt === 0) {
    playerTwoMoveThreeType = ROCK
  } else if (randInt === 1) {
    playerTwoMoveThreeType = PAPER
  } else {
    playerTwoMoveThreeType = SCISSORS
  }
}

// functionality to set the computer's move values
const generateMoveValues = () => {
  debugger
  playerTwoMoveOneValue = getRandomInt(97) + 1
  playerTwoMoveTwoValue = getRandomInt(getNextMax(playerTwoMoveOneValue))
  playerTwoMoveThreeValue = getRandomInt(
    getNextMax(playerTwoMoveTwoValue + playerTwoMoveOneValue - 1)
  )
}

const getNextMax = prevValue => {
  return 99 - (prevValue - 1)
}
