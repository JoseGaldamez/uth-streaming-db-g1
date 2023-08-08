import React, { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { LogoPrincipal } from '../components/Appbar/LogoPrincipal';
import { MenuMovil } from '../components/Appbar/MenuMovil';
import { LogoPrincipalMovil } from '../components/Appbar/LogoPrincipalMovil';
import { MenuPrincipal } from '../components/Appbar/Menu';
import { ProfileIcon } from '../components/Appbar/ProfileIcon';
import { contenidoService } from '../services/contenido.service';


export const HomePage = () => {
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [user, setUser] = React.useState(null);


    useEffect(() => {

        const user = localStorage.getItem('user');
        if (!user) {
            navigate('/login');
        } else {
            setUser(JSON.parse(user));
        }

    }, [])



    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        handleCloseUserMenu();
        localStorage.removeItem('user');
        navigate('/login');
    }

    return (
        <>
            <AppBar position="static" color='secondary' >
                <Toolbar disableGutters className='app-bar-top'>
                    <LogoPrincipal />

                    <MenuMovil handleOpenNavMenu={handleOpenNavMenu} anchorElNav={anchorElNav} handleCloseNavMenu={handleCloseNavMenu} />

                    <LogoPrincipalMovil />

                    <MenuPrincipal handleCloseNavMenu={handleCloseNavMenu} />

                    <ProfileIcon
                        handleOpenUserMenu={handleOpenUserMenu}
                        user={user}
                        anchorElUser={anchorElUser}
                        handleCloseUserMenu={handleCloseUserMenu}
                        handleLogout={handleLogout} />


                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    )
}
