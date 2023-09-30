import React from 'react'

//style
import './Card.css'

const Card = () => {
  return (
    <div className='Card-Component'>
        <img src={process.env.PUBLIC_URL+"/Image/material-escolar.png"} alt="" />
        <span>Titulo</span>

        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi atque veniam aliquam quo</span>
    </div>
  )
}

export default Card