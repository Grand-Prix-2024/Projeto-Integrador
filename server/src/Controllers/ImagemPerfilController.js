import path from 'path';
import url from 'url';
import { createImagemPerfil, updateImagemPerfil, readImagemPerfil, readOneImagePerfil} from '../models/ImagemPerfilModel.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function criarImagemPerfil(req, res) {
    console.log('ImagemPerfilController :: Criando Imagem')
    const { imagemPerfil } = req.files;

    if (!imagemPerfil) {
        // res.status(400).json({ message: 'Imagem e descrição são obrigatórias' });
    } else {
        const extensao = path.extname(imagem.name).toLocaleLowerCase();
        const extensoePermitidas = ['.jpg', '.png', '.jpeg'];
        if (extensoePermitidas.includes(extensao)) {
            const nomeImg = `${Date.now()}${extensao}`;

            try {
                const [status, resposta] = await createImagemPerfil(nomeImg, imagem);
                res.status(status).json(resposta);
            } catch (error) {
                console.log(error);
                res.status(500).json({ message: 'ImagemPerfilController :: Erro' });
            }
        } else {
            res.status(415).json({ message: 'Arquivo invalido!' })
        }
    }
}

export async function downloadImagemPerfil(req, res) {
    console.log('ImagemPerfilController :: Mostrando imagem');

    const { nomeImg } = req.params;
    const caminho = path.join(__dirname, '..', '..', 'public', 'img', nomeImg);

    console.log(caminho);

    res.sendFile(caminho, (erro) => {
        if (erro) {
            console.log(erro);
            res.status(404).json({ message: 'Imagem não encontrada' });
        }
    });
    

}

export async function mostrarImagensPerfil(req, res) {
    console.log('ImagemPerfilController :: Mostrando lista de imagens')

    try {
        const [status, resposta] = await readImagemPerfil();
        res.status(status).json(resposta);
    } catch (error) {
        res.status(500).json({ message: 'ImagemPerfilController : Erro' });
    }
}
export async function mostrarUmaImagemPerfil(req, res) {
    console.log('ImagemPerfilController :: Mostrando uma imagem');
    const { id_perfil } = req.params;

    try {
        const [status, resposta] = await readOneImagePerfil(id_perfil);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'ImagemPerfilController :: Erro'})
    }
}
export async function editarImagemPerfil(req, res) {
    console.log('ImagemPerfilController :: Editando uma imagem');
    const { id_perfil } = req.params;

    try {
        const [status, resposta] = await updateImagemPerfil(id_perfil);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'ImagemPerfilController :: Erro'})
    }
}

// export async function deletarImagem(req,res) {
//     console.log('ImagemController :: Deletando Imagem');
//     const {id_imagem} = req.params;
    
//     try {
//         const [status, resposta] = await deleteImagem(id_imagem);
//         res.status(status).json(resposta);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message:'ImagemController :: Erro'})
//     }
// }

// export async function downloadImagem(req, res) {
//     console.log('ImagemController :: Mostrando Imagem')
//     const { nomeImg } = req.params;
//     const caminho = path.join(__dirname, '..', '..', 'public', 'img', nomeImg)

//     console.log(caminho);

//     res.sendFile(caminho, (erro) => {
//         if (erro) {
//             console.log(erro)
//             res.status(404).json({ message: 'Imagem não encontrada' })
//         }
//     });
// }
