import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { contenidoService } from '../services/contenido.service';

export const ContentSubPage = () => {

    const { contentId } = useParams();

    const [loading, setLoading] = React.useState(true);
    const [content, setContent] = React.useState({});

    useEffect(() => {
        contenidoService.getContentById(contentId).then((content) => {
            setContent(content);
            setLoading(false);
        }).catch((_) => {
            setLoading(false);
        });

    }, []);

    return (
        <div>
            {
                loading ? (
                    <div>
                        <h1>Cargando...</h1>
                    </div>
                ) : (
                    <div>
                        <h1>{content.titulo}</h1>
                        <p>{content.descripcion}</p>
                    </div>
                )
            }
        </div>
    )
}
