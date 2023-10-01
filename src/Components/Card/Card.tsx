import React from 'react'

//style
import './Card.css'

interface Props{
  img: string,
  title: string,
  text: string
}

const Card = ({img, title, text}:Props) => {
  return (
    <div className='Card-Component'>
        <img src={process.env.PUBLIC_URL+img} alt="" />
        <span className='Card-Title'>{title}</span>

        <span className='Card-content'>{text}</span>
    </div>
  )
}

export default Card