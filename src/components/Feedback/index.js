import {Component} from 'react'

import Emojis from '../Emojis'
import FeedBackgiven from '../FeedBackgiven/index'

import './index.css'

class Feedback extends Component {
  state = {isFeedback: false}

  getFeedBack = () =>
    this.setState(prevStv => ({isFeedback: !prevStv.isFeedback}))

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isFeedback} = this.state
    return (
      <div>
        <div className="mainContainer">
          <div className="cardContainer">
            {isFeedback ? (
              <FeedBackgiven loveEmojiUrl={loveEmojiUrl} />
            ) : (
              <>
                <h1 className="textCenter">
                  How satisfied are you with our customer support performance
                </h1>
                <ul className="emojiContainer">
                  {emojis.map(eachEmoji => (
                    <Emojis
                      eachEmoji={eachEmoji}
                      getFeedBack={this.getFeedBack}
                      key={eachEmoji.id}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
