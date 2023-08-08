import React, { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { contenidoService } from '../services/contenido.service';
import { MoviesList } from '../components/ListOfContent/MoviesList';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Typography } from '@mui/material';


export const HomeSubPage = () => {

    const [contenido, setContenido] = React.useState([]);
    const [movies, setMovies] = React.useState([]);
    const [series, setSeries] = React.useState([]);
    const [top, setTop] = React.useState([]);

    useEffect(() => {
        contenidoService.getAll().then(result => {

            const moviesList = result.filter(item => item.tipoContenido === 'pelicula');
            const arrayMovies = moviesList.slice(0, 10);
            setMovies(arrayMovies);

            const series = result.filter(item => item.tipoContenido === 'serie');
            const arraySeries = series.slice(0, 10);
            setSeries(arraySeries);

            const arrayTop = result.slice(0, 4);
            setTop(arrayTop);

            setContenido(result);

        });
    }, [])

    return (
        <div>
            {
                contenido.length > 0 ? (
                    <div>

                        <Swiper
                            className='top-swiper'
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {
                                top.map((item, index) => (
                                    <SwiperSlide key={index} className='top-image-container'>
                                        <figure>
                                            <img className='top-image' src={"https://www.codigocorrecto.com/wp-content/uploads/2023/hnetflix/content-picture/" + item.idContenido + ".jpg"} alt={item.titulo} />
                                        </figure>

                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>

                        <MoviesList listOfMovies={movies} title="Peliculas" />
                        <MoviesList listOfMovies={series} title="Series" />
                    </div>

                ) : (<CircularProgress color="error" />)
            }

        </div>
    )
}
