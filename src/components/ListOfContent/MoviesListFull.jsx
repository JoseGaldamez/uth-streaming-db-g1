import React, { useState } from 'react'
import { MovieItem } from './MovieItem';
import { Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router';

export const MoviesListFull = ({ listOfMovies, title }) => {

    const navigator = useNavigate();

    const handleSeeAll = () => {
        navigator("/home/" + title.toLowerCase());
    }

    return (
        <div className='list-of-content-full'>
            <Typography variant="h4" component="h4" gutterBottom >
                {title}
            </Typography>
            <hr />
            <br />
            <div className='list'>

                {
                    listOfMovies.map((item, index) => {
                        return (
                            <MovieItem movie={item} key={item.idContenido} />
                        )
                    })
                }


            </div>

            <hr />
            <div>
                Fin de la lista
            </div>
        </div>
    )
}
