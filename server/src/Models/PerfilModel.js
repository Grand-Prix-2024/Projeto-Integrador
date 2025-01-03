import mysql from 'mysql2/promise';
import db from '../conexao.js';
import path from 'path';
import fs from 'fs';

const conexao = mysql.createPool(db);

export async function createPerfil(perfil) {
    // const conexao = mysql.createPool(db);
    const sql = `
        INSERT INTO perfil (
            pronome, descricao, idioma, estado_civil, local_moradia,
            telefone, redes, bio, curso, faculdade, musicaFavorita, caminho_foto_perfil, id_usuario
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [
        perfil.pronome, perfil.descricao, perfil.idioma,
        perfil.estado_civil, perfil.local_moradia, perfil.telefone,
        perfil.redes, perfil.bio, perfil.curso, perfil.faculdade, perfil.musicaFavorita, perfil.caminho_foto_perfil, perfil.id_usuario
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log(retorno);
        console.log('Perfil cadastrado');
        return [201, 'Perfil cadastrado'];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}


export async function showPerfil() {
    // const conexao = mysql.createPool(db);
    const sql = `SELECT * FROM perfil`;

    try {
        const [retorno] = await conexao.query(sql);
        console.log('Perfis encontrados');
        return [200, retorno];
    } catch (error) {
        console.error('Erro ao buscar perfis:', error);
        return [502, error];
    }
}


export async function updatePerfil(perfil, imageFile, id) {
    console.log('Atualizando perfil...');

    if (!id) {
        throw new Error("ID do usuário é obrigatório.");
    }

    let imagePath = perfil.caminho_foto_perfil; // Caminho existente da imagem, se fornecido.

    if (imageFile) {
        // Salvando a nova imagem no servidor
        const publicFolder = path.join(process.cwd(), "public", "img");
        if (!fs.existsSync(publicFolder)) {
            fs.mkdirSync(publicFolder, { recursive: true });
        }

        // Define o caminho completo para salvar a imagem
        const newImagePath = `/img/${imageFile}`;
        const fullPath = path.join(publicFolder, newImagePath);

        try {
            // Salva a imagem no diretório definido
            // await imageFile.mv(fullPath);
            imagePath = newImagePath; // Atualiza o caminho para o novo arquivo
        } catch (error) {
            throw new Error(`Erro ao salvar a imagem: ${error.message}`);
        }
    }

    const sql = `UPDATE perfil SET 
        pronome = ?,
        descricao = ?,
        idioma = ?,
        estado_civil = ?,
        local_moradia = ?,
        telefone = ?,
        redes = ?,
        bio = ?,
        curso = ?,
        faculdade = ?,
        caminho_foto_perfil = ?
        WHERE id_usuario = ?`;

    const params = [
        perfil.pronome,
        perfil.descricao,
        perfil.idioma,
        perfil.estado_civil,
        perfil.local_moradia,
        perfil.telefone,
        perfil.redes,
        perfil.bio,
        perfil.curso,
        perfil.faculdade,
        imagePath, 
        id
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Perfil atualizado com sucesso');
        return [200, 'Perfil atualizado com sucesso'];
    } catch (error) {
        console.error('Erro ao atualizar perfil:', error);
        return [500, error];
    }
}


export async function deletePerfil(id) {
    // const conexao = mysql.createPool(db);
    console.log('Deletando perfil...');

    const sql = `DELETE FROM perfil WHERE id_perfil = ?`;

    try {
        const [retorno] = await conexao.query(sql, [id]);
        console.log('Perfil deletado com sucesso');
        return [200, 'Perfil deletado com sucesso'];
    } catch (error) {
        console.error('Erro ao deletar perfil:', error);
        return [500, error];
    }
}

export async function getPerfilByIdUsuario(id_usuario) {
    // const conexao = mysql.createPool(db);
    const sql = `SELECT * FROM perfil WHERE id_usuario = ?`;

    try {
        const [retorno] = await conexao.query(sql, [id_usuario]);
        if (retorno.length === 0) {
            console.log('Perfil não encontrado');
            return [404, 'Perfil não encontrado'];
        }
        console.log('Perfil encontrado');
        return [200, retorno[0]];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}
