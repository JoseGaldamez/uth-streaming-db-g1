import http from "../config/http";

const getAll = async () => {
    return await http.get("/Usuarios");
};

const getUserByID = async (id) => {
    return await http.get("/Usuarios/" + id);
};

const login = async (email, password) => {

    try {
        const userByEmail = await http.get("/Auth/" + email);

        if (userByEmail.data.contrasena !== password) {
            return { ok: false, message: "Usuario o contraseña incorrectos" };
        }

        return { ok: true, user: userByEmail.data };
    } catch (error) {
        return { ok: false, message: "Usuario o contraseña incorrectos" };
    }

};

const register = async (nombre, email, password) => {

    try {
        const user = await http.post("/Usuarios", {
            nombre: nombre,
            email: email,
            contrasena: password,
            idUsuario: 0
        });

        return { ok: true, user: user.data };

    } catch (error) {
        return { ok: false, message: "Usuario o contraseña incorrectos" };
    }

};

export const userService = {
    getAll,
    login,
    register,
    getUserByID
}