import http from "../config/http";

let contenido = [];

const getAll = async () => {
    const response = await http.get("/Contenidos");
    contenido = response.data;
    return response.data;
};

const getPeliculas = async (email, password) => {

    if (contenido.length === 0) {
        await getAll();
    }

    return await contenido.filter((peli) => peli.tipoContenido === "pelicula");
};

const getSeries = async (nombre, email, password) => {

    if (contenido.length === 0) {
        await getAll();
    }

    return await contenido.filter((peli) => peli.tipoContenido === "serie");
};

export const contenidoService = {
    getAll,
    getPeliculas,
    getSeries
}