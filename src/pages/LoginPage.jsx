import React, { useEffect, useState } from 'react'

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Login } from '../components/Login/Login';
import { useNavigate } from 'react-router';
import { Register } from '../components/Register/Register';


export const LoginPage = () => {

    const navigator = useNavigate();

    const [page, setPage] = useState('logging');


    useEffect(() => {
        const user = localStorage.getItem('user');
        console.log(user);
        if (user) {
            navigator('/home');
        }
    }, [])

    const handlePageChange = () => {
        setPage(page === 'logging' ? 'registering' : 'logging');
    }

    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>

                    {
                        page === 'logging' ? (<Login />) : (<Register />)
                    }

                    <div className='center-text'>
                        {page === 'logging' ? (
                            <Typography>Aun no tienes cuenta? <a href="#" onClick={handlePageChange}>Registrate</a></Typography>
                        ) : (
                            <Typography>Ya tienes cuenta? <a href="#" onClick={handlePageChange}>Iniciar sesión</a></Typography>
                        )}
                    </div>

                </Grid>
            </Grid>
        </>
    )
}
