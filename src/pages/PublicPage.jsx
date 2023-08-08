import React from 'react'
import LogoHNetflix from '../images/logo-hnetflix.png'
import { useNavigate } from 'react-router'

export const PublicPage = () => {

    const navigator = useNavigate();


    const handleLogin = () => {
        navigator('/login');
    }

    return (
        <div>

            <div className='principa-section'>
            </div>

            <div className='principa-section-content'>
                <div className='top-nav'>
                    <img src={LogoHNetflix} alt="Logo" />
                    <div>
                        <button onClick={handleLogin} className='btn btn-primary'>Iniciar Sesión</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
