import React from 'react'
import LogoHNetflix from '../images/logo-hnetflix.png'
import { useNavigate } from 'react-router'
import { ListOfPlanes } from '../components/Public/ListOfPlanes';

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

                <div className='principal-section-project-description'>
                    <h1>Películas y series ilimitadas y mucho más.</h1>
                    <p>
                        Un proyecto del grupo #1 de la clase de Base de Datos II de la Universidad Tecnológica de Honduras.
                    </p>
                    <div>
                        <h3>Estudiantes</h3>
                        <ul>
                            <li>Jose Galdamez</li>
                            <li>Marcos Nuñez</li>
                            <li>Diego Moncada</li>
                            <li>Seidy Pineda</li>
                            <li>Jenifer Mejía</li>
                            <li>Kira Ballestero</li>
                            <li>Luis Ayesta</li>
                            <li>Victoria Torres</li>
                            <li>Brayan Ortiz</li>
                            <li>Darlin Matute</li>
                            <li>Dennis Amaya</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='planes-section-public'>
                <ListOfPlanes />
            </div>

        </div>
    )
}
