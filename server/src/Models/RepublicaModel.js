import mysql from 'mysql2/promise'
import db from '../conexao.js'


export async function createRepublica(republica) {
    if (!republica.id_usuario) {
        throw new Error('ID do usuário é obrigatório.');
    }

    const conexao = mysql.createPool(db);
    const featureMapping = {
        wifi: 'Wi-fi',
        televisao: 'Televisão',
        chuveiro_quente: 'Chuveiro quente',
        churrasqueira: 'Churrasqueira',
        camera: 'Câmeras',
        extintor: 'Extintor',
    };

    const features = Object.fromEntries(
        Object.keys(featureMapping).map((key) => [
            key,
            republica.Features.includes(featureMapping[key]) ? true : false,
        ])
    );

    const images = republica.images.map((image) => image.path);

    const campos = {
        titulo: republica.titulo,
        preco: republica.preco,
        id_usuario: republica.id_usuario,
        pais: republica.pais,
        cep: republica.cep,
        endereco: republica.endereco,
        bairro: republica.bairro,
        cidade: republica.cidade,
        estado: republica.estado,
        apto: republica.apto,
        ...features,
    };

    const colunas = Object.keys(campos).join(', ');
    const valores = Object.values(campos);
    const placeholders = valores.map(() => '?').join(', ');

    const sql = `INSERT INTO republicas (${colunas}) VALUES (${placeholders})`;

    try {
        const [resultado] = await conexao.query(sql, valores);
        const idRepublica = resultado.insertId;

        const imageSql = `INSERT INTO foto_republica (caminho_foto, id_republica) VALUES ?`;
        const imageValues = images.map((path) => [path, idRepublica]);

        await conexao.query(imageSql, [imageValues]);

        console.log('República e imagens cadastradas com sucesso');
        return [201, 'República cadastrada com sucesso!'];
    } catch (error) {
        console.error('Erro ao cadastrar república e imagens:', error);
        return [500, error.message];
    }
}



export async function showRepublicas(republica) {
    const conexao = mysql.createPool(db);
    const sql = `SELECT * FROM republicas`;

    const params = [
        republica.titulo,
        republica.preco,
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
        return [200, retorno];
    } catch (error) {
        console.log(error);
        return [502, error];
    }
}

export async function updateRepublica(republica, id) {
    const conexao = mysql.createPool(db);
    console.log('Atualizando usuário');

    const sql = `UPDATE republicas SET
        titulo = ?,
        preco = ?,
        tipo_republica = ?,
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
        republica.titulo,
        republica.preco,
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
        return [200, retorno]
    } catch (error) {
        console.log(error);
        return [500, error];
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
        return [200, retorno];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function showOneRepublica(id_republica) {
    console.log('UsuarioModel :: showOneUsuario');
    const conexao = mysql.createPool(db);
    const sql = 'SELECT * FROM republicas WHERE id_republica = ?';
    const params = [id_republica];
    try {
        const [retorno] = await conexao.query(sql, params);
        if (retorno.length < 1) {
            return [404, { message: 'Não foi possivel localizar a república' }];
        } else {
            return [200, retorno[0]];
        }
    } catch (error) {
        console.log(error);
        return [500, { message: 'Erro ao exibir a república' }];
    }
}

