import React from 'react'

//style
import './SecondSection.css'
import SecundaryButton from '../SecundaryButton/SecundaryButton'

const SecondSection = () => {
  return (
    <div className='SecondSection-Component'>
        <SecundaryButton texto='Mapa' style={{position:"absolute", top:"20px", right:"20px"}} />

        <div className='SecondSection-Image'>

        </div>

        <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima dolore, accusamus quisquam eos ullam corporis non aliquid facere labore, expedita, nesciunt quos? Explicabo vel eveniet dolorum tenetur laboriosam fugiat accusantium!
        </span>

    </div>
  )
}

export default SecondSection