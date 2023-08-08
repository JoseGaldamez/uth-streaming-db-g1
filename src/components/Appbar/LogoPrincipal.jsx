import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

import logoHNetflix from '../../images/logo-hnetflix.png'

export const LogoPrincipal = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

    return (
        <>
            <Typography
                variant="h6"
                noWrap
                className='logo-principal'
                onClick={handleClick}
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
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
