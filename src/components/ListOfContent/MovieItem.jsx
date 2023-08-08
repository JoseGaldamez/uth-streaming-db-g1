import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const MovieItem = ({ movie }) => {
    return (
        <Card sx={{ maxWidth: 330, minWidth: 300 }} className='item-card' >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={"https://www.codigocorrecto.com/wp-content/uploads/2023/hnetflix/content-picture/" + movie.idContenido + ".jpg"}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.descripcion.slice(0, 70)}...
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
