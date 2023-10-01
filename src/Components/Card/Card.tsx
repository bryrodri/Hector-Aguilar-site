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
        <span>{title}</span>

        <span>{text}</span>
    </div>
  )
}

export default Card