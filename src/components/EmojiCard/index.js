import './index.css'

const EmojiCard = props => {
  const {emojiDetails, updateEmojiId} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onEmojiClick = () => updateEmojiId(id)

  return (
    <li onClick={onEmojiClick} className="emoji-card">
      <button type="button" className="emoji-button">
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
