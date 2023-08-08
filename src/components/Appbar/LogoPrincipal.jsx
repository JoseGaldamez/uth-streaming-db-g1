import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

export const LogoPrincipal = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

    return (
        <>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
                HNetflix
            </Typography>
        </>
    )
}
