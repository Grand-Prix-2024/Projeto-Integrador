import { createImagens, listRepublicas, detailRepublica, deleteImagem} from "../Models/ImagemModel.js";

/**
 * Cadastrar imagens para uma república.
 * @param {Object} req - Requisição HTTP.
 * @param {Object} res - Resposta HTTP.
 */
export async function cadastrarImagens(req, res) {
    const { id_republica } = req.params;
    const imagens = req.files?.imagens; // Supondo que as imagens vêm de um formulário.

    if (!id_republica || !imagens) {
        return res.status(400).json({ message: 'ID da república e imagens são obrigatórios.' });
    }

    // Garante que as imagens sejam tratadas como um array (mesmo que seja uma única imagem).
    const imagensArray = Array.isArray(imagens) ? imagens : [imagens];

    const [status, resultado] = await createImagens(id_republica, imagensArray);
    return res.status(status).json({ message: resultado });
}

/**
 * Listar todas as repúblicas com imagens destacadas.
 * @param {Object} req - Requisição HTTP.
 * @param {Object} res - Resposta HTTP.
 */
export async function listarRepublicas(req, res) {
    const [status, republicas] = await listRepublicas();
    return res.status(status).json(republicas);
}

/**
 * Recuperar detalhes de uma república com suas imagens.
 * @param {Object} req - Requisição HTTP.
 * @param {Object} res - Resposta HTTP.
 */
export async function detalhesRepublica(req, res) {
    const { id_republica } = req.params;

    if (!id_republica) {
        return res.status(400).json({ message: 'ID da república é obrigatório.' });
    }

    const [status, resultado] = await detailRepublica(id_republica);
    return res.status(status).json(resultado);
}

/**
 * Excluir uma imagem específica de uma república.
 * @param {Object} req - Requisição HTTP.
 * @param {Object} res - Resposta HTTP.
 */
export async function excluirImagem(req, res) {
    const { id_foto } = req.params;

    if (!id_foto) {
        return res.status(400).json({ message: 'ID da foto é obrigatório.' });
    }

    const [status, resultado] = await deleteImagem(id_foto);
    return res.status(status).json(resultado);
}
