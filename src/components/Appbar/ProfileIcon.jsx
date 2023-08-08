import React from 'react'

import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

export const ProfileIcon = ({ handleOpenUserMenu, user, anchorElUser, handleCloseUserMenu, handleLogout }) => {
    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src={"https://www.codigocorrecto.com/wp-content/uploads/2023/hnetflix/profile-images/" + user?.idUsuario + ".jpg"} />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >

                    <MenuItem key={0} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Perfil</Typography>
                    </MenuItem>
                    <MenuItem key={1} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Cuenta</Typography>
                    </MenuItem>
                    <MenuItem key={2} onClick={handleLogout}>
                        <Typography textAlign="center">Cerrar sesión</Typography>
                    </MenuItem>

                </Menu>
            </Box>
        </>
    )
}
