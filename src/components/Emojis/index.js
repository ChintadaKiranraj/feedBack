import './index.css'

const Emojis = props => {
  const {eachEmoji, getFeedBack} = props
  const emojiIsClicked = () => {
    getFeedBack()
  }
  return (
    <li className="eachEmoji">
      <img
        src={eachEmoji.imageUrl}
        alt={eachEmoji.name}
        className="eachEmojiSize"
        onClick={emojiIsClicked}
      />
      <p>{eachEmoji.name}</p>
    </li>
  )
}

export default Emojis
