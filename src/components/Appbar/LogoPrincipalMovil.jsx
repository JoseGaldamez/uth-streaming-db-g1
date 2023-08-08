import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

import logoHNetflix from '../../images/logo-hnetflix.png'

export const LogoPrincipalMovil = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

    return (
        <>
            <Typography
                variant="h5"
                noWrap
                className='logo-principal'
                onClick={handleClick}
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                <img src={logoHNetflix} alt="Logo" />
            </Typography>
        </>
    )
}
