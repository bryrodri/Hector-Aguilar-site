import React from 'react'

//styles
import './Footer.css'


import FooterVector from '../../Vectores/FooterVector'

const Footer = () => {
  return (
    <div  className='FooterComponent'>



        <FooterVector />

        <div className='footerOSection'></div>
        
        <div className='FooterContent'>

            <div className='FooterContent-Layout'>
                <div className='FooterContent-Logo'>
                    <span>Logo</span>
                </div>

                <div className='FooterContent-Center'>
                    <div className='FooterContent-CenterElements'>
                        <span>Blog</span>
                        <span>Terminos y condiciones</span>
                        <span>Politicas</span>
                        <span>Contacto</span>
                    </div>

                    <div className='FooterContent-CenterForm'>
                        <span>Suscribete a nuestra newsletter</span>
                        <div className='Footer-Form'>
                            <input type="text" placeholder='tucorreo@email.com' />
                            <button>Suscribirse</button>
                        </div>
                    </div>

                </div>

                <div className='FooterContent-List'>
                    <span>*lorem ipsum</span>
                    <span>*lorem ipsum</span>
                    <span>*lorem ipsum</span>
                    <span>*lorem ipsum</span>

                </div>
            </div>

            <div className='FooterContent-icons'>
                <img src={process.env.PUBLIC_URL+"/Image/x-logo.png"} alt="" />
                <img src={process.env.PUBLIC_URL+"/Image/instagram-logo.png"} alt="" />
                <img src={process.env.PUBLIC_URL+"/Image/threads-logo.png"} alt="" />


            </div>
        </div>
    </div>
  )
}

export default Footer