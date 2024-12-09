import path from 'path';
import url from 'url';
import {  updateImagemPerfil } from '../Models/ImagemPerfilModel.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function editarImagem(req, res) {
    console.log('ImagemController :: Criando imagem');
    const { id_perfil } = req.params;
    const { imagem } = req.files;

    if (!id_perfil || !imagem) {
        res.status(400).json({ message: 'ID e imagem são obrigatórios' });
    } else {
        const extensao = path.extname(imagem.name).toLocaleLowerCase();
        const extensoesPermitidas = ['.jpg', '.png', '.jpeg'];

        if (extensoesPermitidas.includes(extensao)) {
            const nomeImg = `${Date.now()}${extensao}`;
            try {
                const [status, resposta] = await updateImagemPerfil(id_perfil, nomeImg, imagem);
                res.status(status).json(resposta);
            } catch (error) {
                console.log(error);
                res.status(500).json({ message: 'ImagemController:: Erro' });
            }

        } else {
            res.status(415).json({ message: 'Arquivo inválido' })
        }

    }

}