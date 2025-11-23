import { createprojeto, showprojetos, updateprojeto, deleteprojeto, showOneprojeto, getprojetoWithFotos } from "../Models/RepublicaModel.js";
import path from 'path';
import url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function criarprojeto(req, res) {
    try {
        const projeto = JSON.parse(req.body.infoprojeto);
        console.log(projeto);

        const file = req.files?.image; // Alterado para receber apenas um arquivo com chave 'image'

        console.log(req.files?.image.mv);
        
        if (!file) {
            return res.status(400).json({ error: 'Nenhuma imagem foi enviada.' });
        }

        // Validação de imagem (opcional)
        if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.mimetype)) {
            return res.status(400).json({ error: 'Apenas arquivos JPEG ou PNG são permitidos.' });
        }

        // Salve o arquivo no servidor (ou use um serviço externo como S3)
        const savePath = `./public/img/${Date.now()}_${file.name}`;
        const nomeImg = `${Date.now()}_${file.name}`;
        console.log(savePath);
       file.mv(`${savePath}`, (err) => {
            if (err) {
                console.error('Erro ao salvar a imagem:', err);
                return res.status(500).json({ error: 'Erro ao salvar a imagem.' });
            }
        });

        // Passar informações para o modelo
        const [status, resposta] = await createprojeto(projeto, nomeImg);
        res.status(status).json(resposta);
    } catch (error) {
        console.error('Erro no controlador:', error);
        res.status(500).json({ error: error.message });
    }
}

  

export async function mostrarprojeto(req, res) {
    const projeto = req.body;

    try {
        const [status, resposta] = await showprojetos(projeto);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(502).json(error);
    }
}

export async function atualizarprojeto(req, res) {
    console.log('Controller Atualizar usuário');
    const projeto = req.body;
    const { id } = req.params;

    try {
        const [status, resposta] = await updateprojeto(projeto, id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function deletarprojeto(req, res) {
    console.log('Controller deletar projeto');
    const { id } = req.params;

    try {
        const [status, resposta] = await deleteprojeto(id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function mostrarUmaprojeto(req, res) {
    console.log('projetoContoller :: mostrarUmaprojeto');
    const { id } = req.params;
    console.log(`O id está aqui ${id}`)
    if (!id) {
        res.status(400).json({ message: 'ID inválido' })
    } else {
        try {
            const [status, resposta] = await showOneprojeto(id);
            res.status(status).json(resposta);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao mostrar usuário' })
        }
    }
}

// export async function fetchprojeto(req, res) {
//     const { id } = req.params; // ID da república passado como parâmetro na URL

//     try {
//         // Valida se o ID foi fornecido
//         if (!id) {
//             return res.status(400).json({ message: 'ID da república é obrigatório.' });
//         }

//         // Chama a função do model para buscar os dados
//         const projeto = await getprojetoWithFotos(id);

//         // Retorna os dados da república e suas fotos
//         return res.status(200).json(projeto);
//     } catch (error) {
//         console.error('Erro ao buscar república:', error);

//         // Retorna erro para o cliente
//         return res.status(500).json({
//             message: 'Erro ao buscar república.',
//             error: error.message,
//         });
//     }
// }

export async function downloadImagem(req,res) {
    console.log('ImagemController :: Mostrando Imagem');
    
    const {nomeImg} = req.params;
    const caminho = path.join(__dirname,'..','..','public','img',nomeImg);
    
    console.log(caminho);
    
    res.sendFile(caminho,(erro)=>{
        if(erro){
            console.log(erro)
            res.status(404).json({message:'Imagem não encontrada'})
        }
    });
}