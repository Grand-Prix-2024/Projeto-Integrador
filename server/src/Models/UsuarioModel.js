import mysql from 'mysql2/promise'
import db from '../conexao.js'

export async function createUsuario(usuario) {
    const conexao = mysql.createPool(db);
    const sql = `INSERT INTO usuarios(
        email,
        senha,
        nome,
        sobrenome,
        data_nasc,
        cpf
        )
        VALUES(?,?,?,?,?,?)`;

    const params = [
        usuario.email,
        usuario.senha,
        usuario.nome,
        usuario.sobrenome,
        usuario.data_nasc,
        usuario.cpf
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Usuário cadastrado');
        return [201,'Usuário cadastrado']
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function showUsuarios(usuario) {
    const conexao = mysql.createPool(db);
    const sql = `SELECT * FROM usuarios`;

    const params = [
        usuario.email,
        usuario.senha,
        usuario.nome,
        usuario.sobrenome,
        usuario.data_nasc,
        usuario.cpf
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Mostrando usuários');
        return[200, retorno];
    } catch (error) {
        console.log(error);
        return[502, error];
    }
}

export async function updateUsuario(usuario, id) {
    const conexao = mysql.createPool(db);
    console.log('Atualizando usuário');

    const sql = `UPDATE usuarios SET email = ?,
    senha = ?,
    nome = ?,
    sobrenome = ?,
    data_nasc = ?,
    cpf = ?
    WHERE id_usuario = ?
    `
    const params = [
        usuario.email,
        usuario.senha,
        usuario.nome,
        usuario.sobrenome,
        usuario.data_nasc,
        usuario.cpf,
        id
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Atualizando usuário');
        return[200, retorno]
    } catch (error) {
        console.log(error);
        return[500, error];
    }
}

export async function deleteUsuario(id) {
    const conexao = mysql.createPool(db);
    console.log('Deletando usuário');
    const sql = `DELETE FROM usuarios WHERE id_usuario = ?`;

    const params = [id];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Deletando usuário');
        return[200, retorno];
    } catch (error) {
        console.log(error);
        return[500, error];
    }
}

export async function showOneUsuario(id_usuario) {
    console.log('UsuarioModel :: showOneUsuario');
    const conexao = mysql.createPool(db);
    const sql = 'SELECT * FROM usuarios WHERE id_usuario = ?';
    const params = [id_usuario];

    try {
        const [retorno] = await conexao.query(sql, params);
        if(retorno.length < 1){
            return [404, {message: 'Não foi possivel localizar o usuário'}];
        }else{
            return[200, retorno[0]];
        }
    } catch (error) {
        console.log(error);
        return[500, {message:'Erro ao exibir o usuário'}];
    }
}

export async function findUserByLoginPassword(email, senha) {
    console.log('UsuarioModel :: findUserByLoginPassword');
    const conexao = mysql.createPool(db);
    const sql = 'SELECT id_usuario FROM usuarios WHERE email = ? AND senha = ?';
    const params = [email, senha];

    try {
        const [retorno] = await conexao.query(sql,params);
        if(retorno.length < 1){
            return[404, {message: 'E-mail ou senha inválidos'}];
        }else{
            return[200, retorno[0]];
        }
    } catch (error) {
        console.log(error);
        return[500, {message: 'Erro ao mostrar usuário'}];
    }
}