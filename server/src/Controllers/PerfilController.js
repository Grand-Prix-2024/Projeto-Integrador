import { 
    createPerfil, 
    showPerfil, 
    updatePerfil, 
    deletePerfil, 
    getPerfilByIdUsuario 
} from "../Models/PerfilModel.js";
import path from 'path';
import url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export async function criarPerfil(req, res) {
    console.log('Chamando criarPerfil');
    const perfil = req.body;

    try {
        const [status, resposta] = await createPerfil(perfil);
        res.status(status).json({ mensagem: resposta });
    } catch (error) {
        console.error('Erro ao criar perfil:', error);
        res.status(500).json({ mensagem: "Erro interno ao criar perfil", detalhes: error.message });
    }
}

export async function mostrarPerfil(req, res) {
    console.log('Chamando mostrarPerfil');

    try {
        const [status, resposta] = await showPerfil();
        res.status(status).json(resposta);
    } catch (error) {
        console.error('Erro ao mostrar perfis:', error);
        res.status(502).json({ mensagem: "Erro ao buscar perfis", detalhes: error.message });
    }
}

export async function atualizarPerfil(req, res) {
    console.log('Chamando atualizarPerfil');
    const perfil = JSON.parse(req.body.infoPerfil); // Parse do corpo da requisição para obter os dados do perfil
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ mensagem: "ID do perfil não fornecido" });
    }

    try {
        const file = req.files?.image; // Verifica se uma imagem foi enviada

        if (file) {
            // Validação de formato de imagem
            if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.mimetype)) {
                return res.status(400).json({ mensagem: 'Apenas arquivos JPEG ou PNG são permitidos.' });
            }

            // Salva o arquivo no servidor
            const savePath = `./public/img/${Date.now()}_${file.name}`;
            const nomeImg = `${Date.now()}_${file.name}`;
            console.log('Caminho da imagem:', savePath);

            try {
                await file.mv(savePath); // Salva a imagem no diretório
                perfil.caminho_foto_perfil = nomeImg; // Atualiza o caminho da imagem no objeto perfil
            } catch (err) {
                console.error('Erro ao salvar a imagem:', err);
                return res.status(500).json({ mensagem: 'Erro ao salvar a imagem.' });
            }
        }

        // Chama a função do model para atualizar o perfil no banco de dados
        const [status, resposta] = await updatePerfil(perfil, id);
        res.status(status).json({ mensagem: resposta });
    } catch (error) {
        console.error('Erro ao atualizar perfil:', error);
        res.status(500).json({ mensagem: "Erro interno ao atualizar perfil", detalhes: error.message });
    }
}


export async function deletarPerfil(req, res) {
    console.log('Chamando deletarPerfil');
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ mensagem: "ID do perfil não fornecido" });
    }

    try {
        const [status, resposta] = await deletePerfil(id);
        res.status(status).json({ mensagem: resposta });
    } catch (error) {
        console.error('Erro ao deletar perfil:', error);
        res.status(500).json({ mensagem: "Erro interno ao deletar perfil", detalhes: error.message });
    }
}

export const buscarPerfilPorUsuario = async (req, res) => {
    const { id_usuario } = req.params; 
    
    try {
      const [status, perfil] = await getPerfilByIdUsuario(id_usuario);
      
      if (!perfil) {
        return res.status(404).json({ message: "Perfil não encontrado" });
      }
  
      return res.status(status).json(perfil);
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);
      return res.status(500).json({ message: "Erro ao buscar perfil" });
    }
  };
