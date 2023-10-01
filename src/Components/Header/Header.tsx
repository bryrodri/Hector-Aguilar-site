import React from 'react'


//style
import './Header.css'

import HeaderVector from '../../Vectores/HeaderVector'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const Header = () => {
  return (
    <div className='Header-Component'>
        <HeaderVector />
        <img className='HeaderImg-movil' src={process.env.PUBLIC_URL+"/Image/person-hero.png"} alt="" />

        <div className='wPatch'></div>

        <div className='HeaderContent'>

            <div className='HeaderContent-text'>
                <h1>Lorem ipsum dolor sit amet </h1>

                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>

                <PrimaryButton texto='Empezar' />
            </div>

            <img src={process.env.PUBLIC_URL+"/Image/person-hero.png"} alt="" />
        </div>

    </div>
  )
}

export default Header