import React from 'react'

//style
import './LetterCard.css'

interface Props{
    texto: string
}

export const LetterCard = ({texto}:Props) => {

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  return (
    <div className='LetterCard' style={{border:texto==="" ? "" : "1px solid var(--primary)", rotate:`-${randomNumber}deg`}}>
        {texto}
    </div>
  )
}
