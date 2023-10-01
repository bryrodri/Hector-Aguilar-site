import React from 'react'

//style
import './SecondSection.css'
import SecundaryButton from '../SecundaryButton/SecundaryButton'

const SecondSection = () => {
  return (
    <div className='SecondSection-Component'>
        <SecundaryButton texto='Mapa' style={{position:"absolute", top:"40px", right:"40px"}} />

        <div className='SecondSection-Image'>

        </div>

        <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolore, accusamus quisquam 
        </span>

    </div>
  )
}

export default SecondSection