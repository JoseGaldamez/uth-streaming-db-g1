import React from 'react'

import { Grid } from '@mui/material';
import { Login } from '../components/Login/Login';

export const LoginPage = () => {

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
                    <Login />
                </Grid>
            </Grid>
        </>
    )
}
