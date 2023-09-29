import React from 'react'

//styles
import './SecundaryButton.css'

interface Props {
    texto: string
    style?: React.CSSProperties
}

const SecundaryButton = ({texto, style}:Props) => {
  return (
    <button className='SecundaryButton' style={style}> 
        {texto}
    </button>
  )
}

export default SecundaryButton