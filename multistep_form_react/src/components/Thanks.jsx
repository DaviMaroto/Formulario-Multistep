import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

import "./Thanks.css"

const emojiData = {
  unsatisfed: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />
}


const Thanks = ({ data }) => {
  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>
        A sua opnião é muito iportante, em bre receberá um cupom de 20% de desconto em compras a partir de R$100,00.
      </p>
      <p> Para concluir sua avaliação clique no botão enviar. </p>
      <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
      <p className='review-data'>
          <span>Satisfação com o produto: </span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </p>
      </div>
  )
}

export default Thanks