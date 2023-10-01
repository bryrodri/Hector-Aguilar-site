import React from 'react'
import { LetterComponent } from '../LetterCard/LetterComponent'
import Card from '../Card/Card'

//style
import './Info.css'

const Info = () => {
  return (
    <div className='info-container'>


        <span>En su lugar te ofrecemos</span>

        <div className='info-cards'>
          <Card img='/Image/material-escolar.png' title='Titulo' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi atque veniam aliquam quo'></Card>
          <Card img='/Image/aprender-en-linea-2.png' title='Titulo' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi atque veniam aliquam quo'></Card>
          <Card img='/Image/superpoblacion.png' title='Titulo' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi atque veniam aliquam quo'></Card>
          <Card img='/Image/time-and-calendar.png' title='Titulo' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi atque veniam aliquam quo'></Card>


          

        </div>


    </div>
  )
}

export default Info