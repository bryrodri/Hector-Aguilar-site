import React from 'react'

//style
import './PrimaryButton.css'

interface Props{
    texto: string
}

const PrimaryButton = ({texto}:Props) => {
  return (
    <button className='PrimaryButton'>
        {texto}
    </button>
  )
}

export default PrimaryButton