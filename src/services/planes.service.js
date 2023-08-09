import http from "../config/http";

const getAll = async () => {
    return await http.get("/planes");
};


export const planesService = {
    getAll
}