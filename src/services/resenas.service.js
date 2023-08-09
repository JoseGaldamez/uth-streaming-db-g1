import http from "../config/http";

let valoraciones = [];

const getAll = async () => {
    const response = await http.get("/Valoracion");
    valoraciones = response.data;
    return response.data;
};

const getValoracionByID = async (id) => {

    if (valoraciones.length === 0) {
        await getAll();
    }
    return await valoraciones.filter((valoracion) => valoracion.idContenido == id);
};


export const resenasService = {
    getAll,
    getValoracionByID
}