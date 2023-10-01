import React from 'react'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import Questions from '../Questions/Questions'

//style
import './QuestionSection.css'

const QuestionSection = () => {
  return (
    <div className='QuestionSection'>
        <span>Preguntas frecuentes</span>

        <Questions />

        <PrimaryButton texto='Empezar' />
    </div>
  )
}

export default QuestionSection