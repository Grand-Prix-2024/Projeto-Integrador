import { createPerfil, showPerfil, updatePerfil, deletePerfil } from "../Models/PerfilModel.js";

export async function criarPerfil(req, res) {
    console.log('UsuarioPerfil funcionando');
    const perfil = req.body;
    console.log(usuario);

    try {
        const [status, resposta] = await createPerfil(perfil);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function mostrarPerfil(req, res) {
    const perfil = req.body;

    try {
        const [status, resposta] = await showPerfil(perfil);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(502).json(error);
    }
}

export async function atualizarPerfil(req, res) {
    console.log('Controller Atualizar Perfil');
    const perfil = req.body;
    const {id} = req.params;

    try {
        const [status, resposta] = await updatePerfil(perfil, id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function deletarPerfil(req, res) {
    console.log('Controller deletar perfil');
    const {id} = req.params;

    try {
        const [status, resposta] = await deletePerfil(id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}