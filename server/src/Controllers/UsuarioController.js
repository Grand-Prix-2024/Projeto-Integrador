import { createUsuario } from "../Models/UsuarioModel.js";
import { showUsuarios } from "../Models/UsuarioModel.js";

export async function criarUsuario(req, res) {
    console.log('UsuarioController funcionando');
    const usuario = req.body;
    console.log(usuario);

    try {
        const [status, resposta] = await createUsuario(usuario);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function mostrarUsuario(req, res) {
    const usuario = req.body;

    try {
        const [status, resposta] = await showUsuarios(usuario);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(502).json(error);
    }
}
