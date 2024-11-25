import { createUsuario } from "../Models/UsuarioModel.js";
import { showUsuarios } from "../Models/UsuarioModel.js";
import { updateUsuario } from "../Models/UsuarioModel.js";
import { deleteUsuario, showOneUsuario, findUserByLoginPassword } from "../Models/UsuarioModel.js";

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

export async function atualizarUsuario(req, res) {
    console.log('Controller Atualizar usuário');
    const usuario = req.body;
    const {id} = req.params;

    try {
        const [status, resposta] = await updateUsuario(usuario, id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function deletarUsuario(req, res) {
    console.log('Controller deletar usuário');
    const {id} = req.params;

    try {
        const [status, resposta] = await deleteUsuario(id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function mostrarUmUsuario(req, res) {
    console.log('UsuarioController :: mostrarUmUsuario');
    const {id} = req.params;
    console.log(`O id está aqui ${id}`)
    if(!id){
        res.status(400).json({message: 'ID inválido'})
    }else{
        try {
            const [status, resposta] = await showOneUsuario(id);
            res.status(status).json(resposta);
        } catch (error) {
            res.status(500).json({message: 'Erro ao mostrar usuário'})
        }
    }
}

export async function logarUsuario(req,res) {
    console.log('UsuarioController :: logarUusuario');
    const {email, senha} = req.body;

    if(!email || !senha){
        res.status(400).json({message:'E-mail e senha são obrigatórios'});
    }else{
        try {
            const [status, resposta] = await findUserByLoginPassword(email, senha);
            res.status(status).json(resposta);
        } catch (error) {
            res.status(500).json({message: 'Erro ao efetuar login'})
        }
    }
}