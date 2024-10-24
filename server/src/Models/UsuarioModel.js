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