import React, { useState } from 'react'
import { MovieItem } from './MovieItem';
import { Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router';

export const MoviesList = ({ listOfMovies, title }) => {

    const navigator = useNavigate();

    const handleSeeAll = () => {
        navigator("/home/" + title.toLowerCase());
    }

    return (
        <div className='list-of-content'>
            <Typography variant="h4" component="h4" gutterBottom >
                {title}
            </Typography>
            <hr />
            <br />
            <div className='list-horizontal'>

                {
                    listOfMovies.map((item, index) => {
                        return (
                            <MovieItem movie={item} key={item.idContenido} />
                        )
                    })
                }

                <div className='see-all' onClick={handleSeeAll}>
                    Ver todos <br />
                    <ArrowForwardIcon />
                </div>
            </div>
        </div>
    )
}
