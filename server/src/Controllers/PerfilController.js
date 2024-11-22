import { 
    createPerfil, 
    showPerfil, 
    updatePerfil, 
    deletePerfil, 
    getPerfilByIdUsuario 
} from "../Models/PerfilModel.js";

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
    const perfil = req.body;
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ mensagem: "ID do perfil não fornecido" });
    }

    try {
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
