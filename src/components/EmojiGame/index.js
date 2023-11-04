import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLooseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

export default class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    gameCompleted: false,
    won: false,
    emojisClickedIds: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  updateEmojiId = id => {
    const {emojisClickedIds} = this.state
    if (emojisClickedIds.includes(id)) {
      this.setState(prevState => ({
        topScore:
          prevState.score > prevState.topScore
            ? prevState.score
            : prevState.topScore,
        gameCompleted: true,
      }))
    } else if (!emojisClickedIds.includes(id) && emojisClickedIds.length < 11) {
      this.setState(prevState => ({
        emojisClickedIds: [...prevState.emojisClickedIds, id],
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        emojisClickedIds: [...prevState.emojisClickedIds, id],
        score: prevState.score + 1,
        gameCompleted: true,
        won: true,
        topScore: 12,
      }))
    }
  }

  restartGame = () =>
    this.setState({
      gameCompleted: false,
      won: false,
      emojisClickedIds: [],
      score: 0,
    })

  render() {
    const {gameCompleted, won, score, topScore} = this.state
    const shuffledEmojisList = this.shuffledEmojisList()
    return (
      <div className="home-container">
        <NavBar gameScores={{score, topScore, gameCompleted}} />
        <div className="bottom-container">
          {gameCompleted ? (
            <div className="win-lose-container">
              <WinOrLooseCard
                restartGame={this.restartGame}
                gameDetails={{won, score}}
              />
            </div>
          ) : (
            <>
              <p className="rule">Game rule: Do not select an emoji twice !!</p>
              <ul className="emojis-container">
                {shuffledEmojisList.map(eachEmoji => (
                  <EmojiCard
                    updateEmojiId={this.updateEmojiId}
                    emojiDetails={eachEmoji}
                    key={eachEmoji.id}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}
