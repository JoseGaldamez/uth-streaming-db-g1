import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router';

export const MovieItem = ({ movie }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        console.log('click')
        navigate('/home/content/' + movie.idContenido)
    }

    return (
        <Card sx={{ maxWidth: 330, minWidth: 300 }} className='item-card' >
            <CardActionArea onClick={handleClick} >
                <CardMedia
                    component="img"
                    height="140"
                    image={movie.urlImage}
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
