import React, { useEffect } from 'react'
import { contenidoService } from '../services/contenido.service'
import { MoviesListFull } from '../components/ListOfContent/MoviesListFull';

export const PeliculasSubPage = () => {

    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        contenidoService.getPeliculas().then(result => {
            setMovies(result);
        });
    }, [])

    return (
        <div>
            <MoviesListFull listOfMovies={movies} title="Peliculas" />
        </div>
    )
}
