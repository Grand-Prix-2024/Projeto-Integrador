import mysql from 'mysql2/promise'
import db from '../conexao.js'

export async function createPerfil(perfil) {
    const conexao = mysql.createPool(db);
    const sql = `INSERT INTO perfil(
        pronome,
        descricao,
        idioma,
        estado_civil,
        local_moradia,
        telefone,
        redes,
        bio
        )
        VALUES(?,?,?,?,?,?,?,?)`;

    const params = [
        perfil.pronome,
        perfil.descricao,
        perfil.estado_civil,
        perfil.local_moradia,
        perfil.telefone,
        perfil.redes,
        perfil.bio
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Perfil cadastrado');
        return [201,'Perfil cadastrado'];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function showPerfil(perfil) {
    const conexao = mysql.createPool(db);
    const sql = `SELECT * FROM perfil`;

    const params = [
        perfil.pronome,
        perfil.descricao,
        perfil.estado_civil,
        perfil.local_moradia,
        perfil.telefone,
        perfil.redes,
        perfil.bio
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Mostrando perfis');
        return[200, retorno];
    } catch (error) {
        console.log(error);
        return[502, error];
    }
}

export async function updatePerfil(perfil, id) {
    const conexao = mysql.createPool(db);
    console.log('Atualizando usuário');

    const sql = `UPDATE usuarios SET pronome = ?,
    descricao = ?,
    estado_civil = ?,
    local_moradia = ?,
    telefone = ?,
    redes = ?,
    bio = ?
    WHERE id_perfil = ?
    `
    const params = [
        perfil.email,
        perfil.senha,
        perfil.nome,
        perfil.sobrenome,
        perfil.data_nascimento,
        perfil.cpf,
        id
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Atualizando perfil');
        return[200, retorno]
    } catch (error) {
        console.log(error);
        return[500, error];
    }
}

export async function deletePerfil(id) {
    const conexao = mysql.createPool(db);
    console.log('Deletando usuário');
    const sql = `DELETE FROM usuarios WHERE id_perfil = ?`;

    const params = [id];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Deletando Perfil');
        return[200, retorno];
    } catch (error) {
        console.log(error);
        return[500, error];
    }
}