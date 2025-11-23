import mysql from 'mysql2/promise';
import path from 'path';
import url from 'url';
import fs from 'fs/promises';
import db from '../conexao.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const conexao = mysql.createPool(db);

/**
 * Cria imagens associadas a uma república.
 * @param {number} id_republica - ID da república.
 * @param {Array} imagens - Lista de imagens enviadas.
 */
export async function createImagens(id_republica, imagens) {
    const conexao = mysql.createPool(db);
    console.log('ImagemModel :: createImagens');

    const sql = 'INSERT INTO foto_projeto (caminho_foto, id_projeto, destaque) VALUES (?, ?, ?)';
    try {
        for (const [index, imagem] of imagens.entries()) {
            const nomeImg = `${id_republica}_${Date.now()}_${index}.jpg`;
            const destaque = index === 0; // Marca a primeira imagem como destaque.

            // Salva o arquivo localmente
            await imagem.mv(path.join(__dirname, '..', '..', 'public', 'img', nomeImg));

            // Insere os dados no banco
            await conexao.query(sql, [nomeImg, id_republica, destaque]);
        }
        return [201, 'Imagens cadastradas com sucesso.'];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

/**
 * Lista todas as repúblicas com imagens destacadas.
 */
export async function listRepublicas() {
    const conexao = mysql.createPool(db);
    console.log('ImagemModel :: listarRepublicas');

    const sql = `
        SELECT 
            r.id_projeto, 
            r.nome_projeto, 
            r.descricao, 
            f.caminho_foto AS imagem_destaque 
        FROM projetos r
        LEFT JOIN foto_projeto f ON r.id_projeto = f.id_projeto AND f.destaque = true
    `;

    try {
        const [republicas] = await conexao.query(sql);
        return [200, republicas];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

/**
 * Recupera detalhes de uma república com todas as imagens.
 * @param {number} id_republica - ID da república.
 */
export async function detailRepublica(id_republica) {
    const conexao = mysql.createPool(db);
    console.log('ImagemModel :: detalhesRepublica');

    const sqlRepublica = 'SELECT * FROM projetos WHERE id_projeto = ?';
    const sqlImagens = 'SELECT caminho_foto FROM foto_projeto WHERE id_projeto = ?';

    try {
        const [republica] = await conexao.query(sqlRepublica, [id_republica]);
        const [imagens] = await conexao.query(sqlImagens, [id_republica]);

        if (republica.length < 1) {
            return [404, { message: 'República não encontrada.' }];
        }

        return [200, { ...republica[0], imagens }];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

/**
 * Exclui uma imagem de uma república.
 * @param {number} id_foto - ID da foto a ser excluída.
 */
export async function deleteImagem(id_foto) {
    console.log('ImagemModel :: excluirImagem');
    const conexao = mysql.createPool(db);

    const sqlImagem = 'SELECT caminho_foto FROM foto_projeto WHERE id_foto = ?';
    const sqlDeleteImagem = 'DELETE FROM foto_projeto WHERE id_foto = ?';

    try {
        const [imagens] = await conexao.query(sqlImagem, [id_foto]);

        if (imagens.length > 0) {
            const caminhoFoto = imagens[0].caminho_foto;

            // Exclui do banco
            await conexao.query(sqlDeleteImagem, [id_foto]);

            // Exclui o arquivo local
            await fs.unlink(path.join(__dirname, '..', '..', 'public', 'img', caminhoFoto));

            return [200, { message: 'Imagem excluída com sucesso.' }];
        } else {
            return [404, { message: 'Imagem não encontrada.' }];
        }
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}
