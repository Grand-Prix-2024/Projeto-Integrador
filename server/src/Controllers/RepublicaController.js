import { createRepublica, showRepublicas, updateRepublica, deleteRepublica, showOneRepublica } from "../Models/RepublicaModel.js";

export async function criarRepublica(req, res) {
    console.log('RepublicaController funcionando');
    const republica = req.body;
    console.log(republica);
    
    try {
        const [status, resposta] = await createRepublica(republica);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function mostrarRepublica(req, res) {
    const republica = req.body;

    try {
        const [status, resposta] = await showRepublicas(republica);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(502).json(error);
    }
}

export async function atualizarRepublica(req, res) {
    console.log('Controller Atualizar usuário');
    const republica = req.body;
    const {id} = req.params;

    try {
        const [status, resposta] = await updateRepublica(republica, id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function deletarRepublica(req, res) {
    console.log('Controller deletar republica');
    const {id} = req.params;

    try {
        const [status, resposta] = await deleteRepublica(id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function mostrarUmaRepublica(req, res) {
    console.log('RepublicaContoller :: mostrarUmaRepublica');
    const {id} = req.params;
    console.log(`O id está aqui ${id}`)
    if(!id){
        res.status(400).json({message: 'ID inválido'})
    }else{
        try {
            const [status, resposta] = await showOneRepublica(id);
            res.status(status).json(resposta);
        } catch (error) {
            res.status(500).json({message: 'Erro ao mostrar usuário'})
        }
    }
}