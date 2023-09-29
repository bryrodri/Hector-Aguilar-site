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

                <div>
                    <div>
                        <span>Blog</span>
                        <span>Terminos y condiciones</span>
                        <span>Politicas</span>
                        <span>Contacto</span>
                    </div>

                    <div>
                        <span>Suscribete y recibe notificaciones</span>
                    </div>

                </div>

                <div>
                    <span>lorem</span>
                    <span>lorem</span>
                    <span>lorem</span>
                    <span>lorem</span>

                </div>
            </div>

            <div className='FooterContent-icons'>
                <img src="/Image/x-logo.png" alt="" />
                <img src="/Image/x-logo.png" alt="" />
                <img src="/Image/x-logo.png" alt="" />


            </div>
        </div>
    </div>
  )
}

export default Footer