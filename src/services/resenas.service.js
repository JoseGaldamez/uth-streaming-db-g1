import http from "../config/http";

let valoraciones = [];

const getAll = async () => {
    const response = await http.get("/Valoracion");
    valoraciones = response.data;
    return response.data;
};

const createNewComentario = async (comentario, idUsario, idContenido) => {

    const body = {
        "idValoracionc": 0,
        "idUsuario": idUsario,
        "idContenido": idContenido,
        "comentario": comentario,
        "fechaComentario": new Date().toISOString(),
        "valoracion": 5
    }

    const response = await http.post("/Valoracion", body);
    return response.data;
}

const getValoracionByID = async (id) => {

    if (valoraciones.length === 0) {
        await getAll();
    }
    return await valoraciones.filter((valoracion) => valoracion.idContenido == id);
};

const deleteCurrentValoracion = () => {
    valoraciones = [];
}


export const resenasService = {
    getAll,
    deleteCurrentValoracion,
    getValoracionByID,
    createNewComentario
}