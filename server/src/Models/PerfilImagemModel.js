import { pool } from "./db.js";

export async function atualizarImagemPerfil(idPerfil, caminhoImagem) {
    const sql = `
        UPDATE Perfil
        SET caminho_imagens_perfil = ?
        WHERE id_perfil = ?
    `;

    const params = [caminhoImagem, idPerfil];

    try {
        const [resultado] = await pool.query(sql, params);
        return resultado;
    } catch (error) {
        throw new Error("Erro ao atualizar imagem do perfil: " + error.message);
    }
}