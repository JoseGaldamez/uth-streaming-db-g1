import React, { useEffect } from 'react'
import { contenidoService } from '../services/contenido.service';
import { MoviesListFull } from '../components/ListOfContent/MoviesListFull';

export const SeriesSubPage = () => {

    const [series, setSeries] = React.useState([]);

    useEffect(() => {
        contenidoService.getSeries().then(result => {
            setSeries(result);
        });
    }, [])


    return (
        <div>
            <MoviesListFull listOfMovies={series} title="Series" />
        </div>
    )
}
