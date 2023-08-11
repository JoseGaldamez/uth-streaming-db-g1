import React, { useEffect } from 'react'
import { userService } from '../../services/users.service';
import { Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const UserValoracion = ({ userId, handleDeleteComment }) => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [idUsuarioActual, setIDUsuarioActual] = React.useState(0);


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        userService.getUserByID(userId).then((user) => {

            setName(user.data.nombre);
            setEmail(user.data.email);

            const u = JSON.parse(localStorage.getItem('user'));
            setIDUsuarioActual(u.idUsuario);

        });
    }, [])


    const handleDelete = () => {
        handleDeleteComment();
        handleClose();
    }


    return (
        <div>
            {
                name === '' ? <Typography variant="h6" >Cargando...</Typography> : (
                    <div>
                        <Typography variant="h6" >{name} ( {email} ) {
                            userId === idUsuarioActual ? <small onClick={handleClickOpen}><DeleteIcon fontSize='12' /> </small> : null
                        } </Typography>
                    </div>

                )
            }

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"¿Seguro quiere borrar su comentario?"}</DialogTitle>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
                    <Button variant="contained" color="error" onClick={handleDelete}>Si, borrar</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}
