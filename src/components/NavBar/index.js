import './index.css'

const NavBar = props => {
  const {gameScores} = props
  const {score, topScore, gameCompleted} = gameScores
  // console.log(gameScores)
  return (
    <nav className="nav-bar">
      <div className="game-logo-name-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="game-logo"
        />
        <h1 className="game-logo-name">Emoji Game</h1>
      </div>
      {gameCompleted ? null : (
        <div className="score-and-top-score-container">
          <p className="score-indicator">Score: {score}</p>
          <p className="total-score-indicator">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
