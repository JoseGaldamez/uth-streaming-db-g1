import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

export const MenuPrincipal = ({ handleCloseNavMenu }) => {

    const navigate = useNavigate();

    const navigateMenu = (path) => {
        handleCloseNavMenu();
        navigate(path);
    }

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                    key={0}
                    onClick={() => navigateMenu('/home/peliculas')}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Películas
                </Button>

                <Button
                    key={1}
                    onClick={() => navigateMenu('/home/series')}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    Series
                </Button>
            </Box>
        </>
    )
}
