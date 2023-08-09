import http from "../config/http";

let contenido = [];

const getAll = async () => {
    const response = await http.get("/Contenidos");
    contenido = response.data;
    return response.data;
};

const getPeliculas = async () => {

    if (contenido.length === 0) {
        await getAll();
    }
    return await contenido.filter((peli) => peli.tipoContenido === "pelicula");
};

const getSeries = async () => {

    if (contenido.length === 0) {
        await getAll();
    }
    return await contenido.filter((peli) => peli.tipoContenido === "serie");
};

const getContentById = async (id) => {
    if (contenido.length === 0) {
        await getAll();
    }
    return contenido.find((peli) => peli.idContenido == id);
};

export const contenidoService = {
    getAll,
    getPeliculas,
    getSeries,
    getContentById
}