import React from 'react'
import { useNavigate } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import CircularProgress from '@mui/material/CircularProgress';

import Button from '@mui/material/Button';

import styles from './Login.module.css'
import { userService } from '../../services/users.service';

export const Login = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = React.useState(false);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [error, setError] = React.useState(null);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setError(null);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
        setError(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (email === '' || password === '') {
            setError('Por favor ingrese todos los datos');
            setLoading(false);
            return;
        }

        const data = await userService.login(email, password);
        if (!data.ok) {
            setError(data.message);
            setLoading(false);
        } else {
            setError(null);
            localStorage.setItem('user', JSON.stringify(data.user));
            setLoading(false);
            navigate('/home');
        }

    }

    return (
        <div className={styles.formulario} >
            <Typography variant="h4" gutterBottom>
                Inicio de Sesión
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <FormControl fullWidth variant="standard" >
                    <InputLabel htmlFor="email">Correo</InputLabel>
                    <Input
                        id="email"
                        className={styles.email}
                        type='email'
                        value={email}
                        onChange={handleEmailChange}
                        name='email'
                    />
                </FormControl>

                <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="password">Contraseña</InputLabel>
                    <Input
                        id="password"
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                        name='password'
                    />
                </FormControl>

                <Button onClick={handleSubmit} disabled={loading} variant="contained" color='error' fullWidth sx={{ mt: 3, mb: 2 }}>
                    {loading ? <CircularProgress size={24} /> : 'Iniciar Sesión'}
                </Button>

            </Box>



            {error && <Alert variant="outlined" severity="error">{error}</Alert>}


        </div>
    )
}
