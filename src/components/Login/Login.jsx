import React from 'react'
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import Button from '@mui/material/Button';

import styles from './Login.module.css'
import { userService } from '../../services/users.service';

export const Login = () => {

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

        if (email === '' || password === '') {
            setError('Por favor ingrese todos los datos');
            return;
        }

        const data = await userService.login(email, password);
        if (!data.ok) {
            setError(data.message);
        } else {
            setError(null);
            alert('Bienvenido, estamos trabajando en el resto del sitio');
        }

    }

    return (
        <div className={styles.formulario} >
            <Typography variant="h4" gutterBottom>
                Iniciar Sesión
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

                <Button onClick={handleSubmit} variant="outlined" fullWidth sx={{ mt: 3, mb: 2 }}>
                    Iniciar Sesión
                </Button>

            </Box>

            {error && <Alert variant="outlined" severity="error">{error}</Alert>}


        </div>
    )
}
