import React from 'react'
import { useNavigate } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import Button from '@mui/material/Button';

import styles from './Register.module.css'
import { userService } from '../../services/users.service';

export const Register = () => {

    const navigate = useNavigate();


    const [email, setEmail] = React.useState('');
    const [nombre, setNombre] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password2, setPassword2] = React.useState('');

    const [error, setError] = React.useState(null);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setError(null);
    };

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
        setError(null);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
        setError(null);
    };

    const handlePassword2Change = (event) => {
        setPassword2(event.target.value)
        setError(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== password2) {
            setError('Las contraseñas no coinciden');
            setPassword('');
            setPassword2('');
            return;
        }

        if (email === '' || password === '' || nombre === '') {
            setError('Por favor ingrese todos los datos');
            return;
        }

        const data = await userService.register(nombre, email, password);
        if (!data.ok) {
            setError(data.message);
        } else {
            setError(null);
            localStorage.setItem('user', JSON.stringify(data));
            navigate('/home');

        }

    }

    return (
        <div className={styles.formulario} >
            <Typography variant="h4" gutterBottom>
                Registrate
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

                <FormControl fullWidth variant="standard" >
                    <InputLabel htmlFor="nombre">Nombre</InputLabel>
                    <Input
                        id="nombre"
                        className={styles.email}
                        type='text'
                        value={nombre}
                        onChange={handleNombreChange}
                        name='nombre'
                        required
                    />
                </FormControl>

                <FormControl fullWidth variant="standard" >
                    <InputLabel htmlFor="email">Correo</InputLabel>
                    <Input
                        id="email"
                        className={styles.email}
                        type='email'
                        value={email}
                        onChange={handleEmailChange}
                        name='email'
                        required
                    />
                </FormControl>

                <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="password">Contraseña</InputLabel>
                    <Input
                        id="password"
                        className={styles.email}
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                        name='password'
                        required
                    />
                </FormControl>

                <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="password">Verificar Contraseña</InputLabel>
                    <Input
                        id="password2"
                        type='password'
                        value={password2}
                        onChange={handlePassword2Change}
                        name='password2'
                        required
                    />
                </FormControl>

                <Button onClick={handleSubmit} variant="outlined" fullWidth sx={{ mt: 3, mb: 2 }}>
                    Registrarte ahora
                </Button>

            </Box>



            {error && <Alert variant="outlined" severity="error">{error}</Alert>}


        </div>
    )
}
