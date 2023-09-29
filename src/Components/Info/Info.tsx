import React from 'react'
import { LetterComponent } from '../LetterCard/LetterComponent'
import Card from '../Card/Card'

//style
import './Info.css'

const Info = () => {
  return (
    <div className='info-container'>
        <LetterComponent></LetterComponent>

        <span>(No tiene sentido)</span>

        <span>En su lugar te ofrecemos</span>

        <div className='info-cards'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>

        </div>


    </div>
  )
}

export default Info