import './index.css'

const FeedBackgiven = props => {
  const {loveEmojiUrl} = props
  return (
    <div className="feedbackContainer">
      <img src={loveEmojiUrl} alt="love emoji" className="loveEmoji" />
      <h1 className="wish">Thank You !</h1>
      <p className="feedBackInfo">
        We will use your feed back to improve our customer support performance
      </p>
    </div>
  )
}

export default FeedBackgiven
