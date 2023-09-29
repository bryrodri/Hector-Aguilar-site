import React from 'react'
import { LetterCard } from './LetterCard'

//style
import './LetterComponent.css'

const textos = ["N", "O", "", "M", "A","S"]
const textos2 = ["ME", "MO", "RI", "ZA", "CI", "ON"]

export const LetterComponent = () => {
  return (
    <div className='LetterComponent'>

        <div className='LetterComponent-Line'>
        {textos.map((texto, index) => {
            return <LetterCard texto={texto}></LetterCard>
        })}
        </div>

        <div className='LetterComponent-Line'>
        {textos2.map((texto, index) => {
            return <LetterCard texto={texto}></LetterCard>
        })}
        </div>


    </div>
  )
}
