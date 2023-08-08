import React from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

export const LogoPrincipalMovil = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

    return (
        <>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
                HNetflix
            </Typography>
        </>
    )
}
