import './index.css'

const FeedBackgiven = props => {
  const {loveEmojiUrl} = props
  return (
    <div>
      <img src={loveEmojiUrl} alt="love emoji" className="loveEmoji" />
      <h1>Thank You</h1>
      <p>
        we will use nyour feed back to improve our customer support performance
      </p>
    </div>
  )
}

export default FeedBackgiven
