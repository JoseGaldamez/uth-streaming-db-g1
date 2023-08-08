import React, { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { contenidoService } from '../services/contenido.service';
import { MoviesList } from '../components/ListOfContent/MoviesList';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export const HomeSubPage = () => {

    const [contenido, setContenido] = React.useState([]);
    const [movies, setMovies] = React.useState([]);
    const [series, setSeries] = React.useState([]);

    useEffect(() => {
        contenidoService.getAll().then(result => {
            setContenido(result);

            const moviesList = result.filter(item => item.tipoContenido === 'pelicula');
            const arrayMovies = moviesList.slice(0, 10);
            setMovies(arrayMovies);

            const series = result.filter(item => item.tipoContenido === 'serie');
            const arraySeries = series.slice(0, 10);
            setSeries(arraySeries);

        });
    }, [])

    return (
        <div>
            {
                contenido.length > 0 ? (
                    <div>

                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                        </Swiper>

                        <MoviesList listOfMovies={movies} title="Peliculas" />
                        <MoviesList listOfMovies={series} title="Series" />
                    </div>

                ) : (<CircularProgress color="error" />)
            }

        </div>
    )
}
