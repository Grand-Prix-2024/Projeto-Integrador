import { createRepublica, showRepublicas, updateRepublica, deleteRepublica, showOneRepublica, getRepublicaWithFotos } from "../Models/RepublicaModel.js";

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

export async function fetchRepublica(req, res) {
    const { id } = req.params; // ID da república passado como parâmetro na URL

    try {
        // Valida se o ID foi fornecido
        if (!id) {
            return res.status(400).json({ message: 'ID da república é obrigatório.' });
        }

        // Chama a função do model para buscar os dados
        const republica = await getRepublicaWithFotos(id);

        // Retorna os dados da república e suas fotos
        return res.status(200).json(republica);
    } catch (error) {
        console.error('Erro ao buscar república:', error);

        // Retorna erro para o cliente
        return res.status(500).json({
            message: 'Erro ao buscar república.',
            error: error.message,
        });
    }
}

export async function imagens(req,res) {
    const arrayImagens = req.files;
    console.log(arrayImagens);
    return res.status(200).json(arrayImagens);
}