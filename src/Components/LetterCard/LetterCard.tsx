import React from 'react'

//style
import './LetterCard.css'

interface Props{
    texto: string
}

export const LetterCard = ({texto}:Props) => {
  return (
    <div className='LetterCard' style={{border:texto==="" ? "" : "1px solid var(--primary)", rotate:"-8deg"}}>
        {texto}
    </div>
  )
}
