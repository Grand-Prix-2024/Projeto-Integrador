import mysql from 'mysql2/promise';
import path from 'path';
import url from 'url';
import fs from 'fs/promises';
import db from '../conexao.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createImagemPerfil() {
    const conexao = mysql.createPool(db);
    console.log('ImagemPerfilModel :: createImagemPerfil');
    const sql = 'INSERT INTO perfil (caminho_foto_perfil) VALUES (?);';
    

    try {
        await imagem.mv(path.join(__dirname, '..', '..', 'public', 'img', nomeImg));
        const [retorno] = await conexao.query(sql, params);
        return [201, 'Imagem Cadastrada'];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}
export async function readImagemPerfil() {
    const conexao = mysql.createPool(db);
    console.log('ImagemPerfilModel :: readImagemPerfil');
    const sql = 'SELECT caminho_foto_perfil FROM perfil';

    try {
        const [retorno] = await conexao.query(sql);
        return [200, retorno];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function readOneImagePerfil(id_perfil) {
    const conexao = mysql.createPool(db);
    console.log('ImagemPerfilModel :: readOneImagemPerfil');
    const sql = 'SELECT caminho_foto_perfil FROM perfil WHERE id_perfil = ?';
    const params = [id_perfil];

    try {
        const [retorno] = await conexao.query(sql, params);

        if (retorno.length < 1) {
            return [404, { message: 'Imagem não encontrada' }];
        }
        return [200, { message: 'Uma imagem foi mostrada' }];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function updateImagemPerfil(id_perfil) {
    const conexao = mysql.createPool(db);
    console.log('ImagemPerfilModel :: updateImagemPerfil');
    const sql = 'UPDATE perfil SET caminho_foto_perfil=? WHERE id_perfil =?';
    const params = [id_perfil];

    try {
        const [retorno] = await conexao.query(sql, params);

        if (retorno.affectedRows < 1) {
            return [404, { message: 'Imagem não encontrada' }];
        }
        return [200, { message: 'Imagem atualizada' }];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}
// export async function deleteImagemPerfil(id_foto) {
//     console.log('ImagemModel :: deleteImagem');
//     const conexao = mysql.createPool(db);
//     const sqlImagem = 'SELECT * FROM foto_republica WHERE id_foto=?'
//     const sql = 'DELETE FROM foto_republica WHERE id_foto =?';
//     const params = [id_foto];

//     try {
//         const [imagem] = await conexao.query(sqlImagem,params);
//         if (imagem.length > 0) {
//             const nomeImg = imagem[0].caminho;
//             await conexao.query(sql, params);
//          await fs.unlink(path.join(__dirname, '..', '..', 'public', 'img', nomeImg));
//          return [200, {message:'Imagem deletada'}];
//         }else{
//             return [404, {message:'Imagem não encontrada'}];
//         }
//     } catch (error) {
//         console.log(error);
//         return [500, error];
//     }
// }