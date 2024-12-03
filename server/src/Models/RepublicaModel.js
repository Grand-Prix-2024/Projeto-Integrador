import mysql from 'mysql2/promise'
import db from '../conexao.js'


export async function createRepublica(republica) {
    const conexao = mysql.createPool(db);
    const sql = `INSERT INTO republicas(
        tipo_republica,
        tipo_distribuicao,
        qtd_moradores,
        qtd_quartos,
        qtd_banheiros,
        qtd_camas,
        descricao,
        valor,
        wifi,
        televisao,
        cozinha,
        ar_condicionado,
        canto_de_estudo,
        chuveiro_quente,
        banheira,
        extintor,
        camera,
        alarme,
        piscina,
        churrasqueira,
        academia,
        varanda,
        jardim,
        pais,
        cep,
        endereco,
        bairro,
        cidade,
        estado,
        apto,
        id_usuario
        )
        VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    const params = [
        republica.tipo_republica,
        republica.tipo_distribuicao,
        republica.qtd_moradores,
        republica.qtd_quartos,
        republica.qtd_banheiros,
        republica.qtd_camas,
        republica.descricao,
        republica.valor,
        republica.wifi,
        republica.televisao,
        republica.cozinha,
        republica.ar_condicionado,
        republica.canto_de_estudo,
        republica.chuveiro_quente,
        republica.banheira,
        republica.extintor,
        republica.camera,
        republica.alarme,
        republica.piscina,
        republica.churrasqueira,
        republica.academia,
        republica.varanda,
        republica.jardim,
        republica.pais,
        republica.cep,
        republica.endereco,
        republica.bairro,
        republica.cidade,
        republica.estado,
        republica.apto,
        republica.id_usuario
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log(retorno);
        console.log('República cadastrado');

        return [201, 'República cadastrada']
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function showRepublicas(republica) {
    const conexao = mysql.createPool(db);
    const sql = `SELECT * FROM republicas`;

    const params = [
        republica.tipo_republica,
        republica.tipo_distribuicao,
        republica.qtd_moradores,
        republica.qtd_quartos,
        republica.qtd_banheiros,
        republica.qtd_camas,
        republica.descricao,
        republica.valor,
        republica.wifi,
        republica.televisao,
        republica.cozinha,
        republica.ar_condicionado,
        republica.canto_de_estudo,
        republica.chuveiro_quente,
        republica.banheira,
        republica.extintor,
        republica.camera,
        republica.alarme,
        republica.piscina,
        republica.churrasqueira,
        republica.academia,
        republica.varanda,
        republica.jardim,
        republica.pais,
        republica.cep,
        republica.endereco,
        republica.bairro,
        republica.cidade,
        republica.estado,
        republica.apto,
        republica.id_usuario
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Mostrando republicas');
        return[200, retorno];
    } catch (error) {
        console.log(error);
        return[502, error];
    }
}

export async function updateRepublica(republica, id) {
    const conexao = mysql.createPool(db);
    console.log('Atualizando usuário');

    const sql = `UPDATE republicas SET tipo_republica = ?,
        tipo_distribuicao = ?,
        qtd_moradores = ?,
        qtd_quartos = ?,
        qtd_banheiros = ?,
        qtd_camas = ?,
        descricao = ?,
        valor = ?,
        wifi = ?,
        televisao = ?,
        cozinha = ?,
        ar_condicionado = ?,
        canto_de_estudo = ?,
        chuveiro_quente = ?,
        banheira = ?,
        extintor = ?,
        camera = ?,
        alarme = ?,
        piscina = ?,
        churrasqueira = ?,
        academia = ?,
        varanda = ?,
        jardim = ?,
        pais = ?,
        cep = ?,
        endereco = ?,
        bairro = ?,
        cidade = ?,
        estado = ?,
        apto = ?
    WHERE id_republica = ?
    `
    const params = [
        republica.tipo_republica,
        republica.tipo_distribuicao,
        republica.qtd_moradores,
        republica.qtd_quartos,
        republica.qtd_banheiros,
        republica.qtd_camas,
        republica.descricao,
        republica.valor,
        republica.wifi,
        republica.televisao,
        republica.cozinha,
        republica.ar_condicionado,
        republica.canto_de_estudo,
        republica.chuveiro_quente,
        republica.banheira,
        republica.extintor,
        republica.camera,
        republica.alarme,
        republica.piscina,
        republica.churrasqueira,
        republica.academia,
        republica.varanda,
        republica.jardim,
        republica.pais,
        republica.cep,
        republica.endereco,
        republica.bairro,
        republica.cidade,
        republica.estado,
        republica.apto,
        republica.id_usuario,
        id
    ];

    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Atualizando república');
        return[200, retorno]
    } catch (error) {
        console.log(error);
        return[500, error];
    }
}

export async function deleteRepublica(id) {
    const conexao = mysql.createPool(db);
    console.log('Deletando usuário');
    const sql = `DELETE FROM republicas WHERE id_republica = ?`;

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

export async function showOneRepublica(id_republica) {
    console.log('UsuarioModel :: showOneUsuario');
    const conexao = mysql.createPool(db);
    const sql = 'SELECT * FROM republicas WHERE id_republica = ?';
    const params = [id_republica];
    try {
        const [retorno] = await conexao.query(sql, params);
        if(retorno.length < 1){
            return [404, {message: 'Não foi possivel localizar a república'}];
        }else{
            return[200, retorno[0]];
        }
    } catch (error) {
        console.log(error);
        return[500, {message:'Erro ao exibir a república'}];
    }
}

