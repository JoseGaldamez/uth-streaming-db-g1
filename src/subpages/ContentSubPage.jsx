import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import { contenidoService } from '../services/contenido.service';
import { IconButton, Typography } from '@mui/material';
import { resenasService } from '../services/resenas.service';

export const ContentSubPage = () => {

    const { contentId } = useParams();

    const [loading, setLoading] = React.useState(true);
    const [content, setContent] = React.useState({});
    const [user, setUser] = React.useState({});
    const [nuevaValidacion, setNuevaValidacion] = React.useState('');
    const [valoraciones, setValoraciones] = React.useState([]);



    useEffect(() => {
        contenidoService.getContentById(contentId).then((content) => {
            setContent(content);
            const u = JSON.parse(localStorage.getItem('user'));
            setUser(u);

            resenasService.getValoracionByID(contentId).then((valoraciones) => {
                if (valoraciones.length > 0) {
                    setValoraciones(valoraciones);
                }
            })

            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });

    }, [contentId]);


    const handleChangeInput = (e) => {
        setNuevaValidacion(e.target.value);
    }

    const handleEnviarValidacion = () => {

        resenasService.createNewComentario(nuevaValidacion, user.idUsuario, contentId).then((res) => {
            console.log(res);

            if (res.idValoracionc) {
                resenasService.deleteCurrentValoracion();

                resenasService.getValoracionByID(contentId).then((valoraciones) => {
                    if (valoraciones.length > 0) {
                        setValoraciones(valoraciones);
                    }
                })
            }

        });

    }

    return (
        <div>
            {
                loading ? (
                    <div>
                        <h1>Cargando...</h1>
                    </div>
                ) : (
                    <Container maxWidth='md' className='content-page'>
                        <Grid container spacing={2} className='content-page-body'>
                            <Grid item xs={6} className='image-content'>
                                <figure>
                                    <img src={"https://www.codigocorrecto.com/wp-content/uploads/2023/hnetflix/content-picture/" + content.idContenido + ".jpg"} alt={content.titulo} />
                                </figure>
                            </Grid>
                            <Grid item xs={6}>
                                <h1>{content.titulo} <span className='clasificacion'> {content.calificaciones} </span> </h1>
                                <p>{content.descripcion}</p>
                                <br />
                                <p>
                                    <strong>Genero:</strong> {content.genero}
                                </p>
                                <p>
                                    <strong>Año de lanzamiento:</strong> {content.yearLanzamiento}
                                </p>
                                <p>
                                    <strong>Director:</strong> {content.director}
                                </p>
                            </Grid>
                        </Grid>

                        <hr />

                        <Grid container className='content-page-resenas'>

                            <Typography variant="h5" gutterBottom component="div">
                                Reseñas y comentarios
                            </Typography>
                            <br />

                            <Grid item xs={12}>

                                {
                                    valoraciones.length === 0 ? (
                                        <p>No hay reseñas para este contenido</p>
                                    ) : (
                                        <div>
                                            {
                                                valoraciones.map((valoracion) => (
                                                    <div key={valoracion.idValoracionc} className='valoracion-item'>
                                                        <p>
                                                            {valoracion.comentario}
                                                        </p>
                                                        <p>
                                                            <strong>Fecha: </strong> {valoracion.fechaComentario.split('T')[0]}
                                                        </p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }

                                <br />

                                <Grid container className='input-enviar-validacion' >
                                    <Grid item xs={9}>
                                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                            <OutlinedInput
                                                value={nuevaValidacion}
                                                placeholder="Escribe tu comentario"
                                                id="standard-adornment-amount"
                                                onChange={handleChangeInput}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button onClick={handleEnviarValidacion} variant="contained" endIcon={<SendIcon />}>
                                            Send
                                        </Button>
                                    </Grid>
                                </Grid>

                            </Grid>

                        </Grid>

                    </Container>
                )
            }
        </div>
    )
}
