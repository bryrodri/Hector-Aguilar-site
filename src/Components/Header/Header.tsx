import React from 'react'


//style
import './Header.css'

import HeaderVector from '../../Vectores/HeaderVector'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const Header = () => {
  return (
    <div className='Header-Component'>
        <HeaderVector />

        <div className='wPatch'></div>

        <div className='HeaderContent'>

            <div className='HeaderContent-text'>
                <h1>Lorem ipsum dolor sit amet </h1>

                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dignissimos provident rerum doloribus architecto, eveniet ratione impedit esse ab quasi ut accusantium libero aspernatur, repellat quia culpa! Nisi, quam magnam!</span>

                <PrimaryButton texto='Empezar' />
            </div>

            <img src="/Image/person-hero.png" alt="" />
        </div>

    </div>
  )
}

export default Header