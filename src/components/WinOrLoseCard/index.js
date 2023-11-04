import './index.css'

const WinOrLoseCard = props => {
  const {gameDetails, restartGame} = props
  const {score, won} = gameDetails

  const resultImageUrl = won
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const resultText = won ? 'You Won' : 'You Lose'
  const scoreHeading = won ? 'Best Score' : 'Score'

  return (
    <>
      <div className="result-score-button-container">
        <h1 className="result-text">{resultText}</h1>
        <div className="score-button-container">
          <p className="score-text">{scoreHeading}</p>
          <p className="score-count">{score}/12</p>
          <button
            onClick={restartGame}
            type="button"
            className="play-again-button"
          >
            Play Again
          </button>
        </div>
      </div>
      <img className="result-image" src={resultImageUrl} alt="win or lose" />
    </>
  )
}

export default WinOrLoseCard
