import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

import "./ReviewForm.css"

const ReviewForm = () => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="insatified" name="raview" required />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="neutral" name="raview" required />
          <BsFillEmojiNeutralFill />
          <p>Poderia melhorar</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="satified" name="raview" required />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="very_satified" name="raview" required />
          <BsFillEmojiHeartEyesFill/>
          <p>Muito Satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" placeholder='Conte como foi sua experiência...' required></textarea>
      </div>
    </div>
  )
}

export default ReviewForm