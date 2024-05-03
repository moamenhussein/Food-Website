import React from 'react'
import "./card.css"
const Card = (props) => {
  return (
    <div className='cardsInfo'>
      <img src={props.img} alt=''/>
      <h5>{props.heading}</h5>
      <p className='paragraphMain'>{props.paragraph}</p>
      <p className='price'>
        <span>{props.priceOne}</span>
        <span>{props.priceTwo}</span>
      </p>
      <button>{props.button}</button>
    </div>
  )
}

export default Card
