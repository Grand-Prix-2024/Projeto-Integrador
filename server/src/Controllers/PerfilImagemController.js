import { atualizarImagemPerfil } from "../models/PerfilModel.js";
import multer from "multer";
import path from "path";

// Configuração do multer para salvar imagens no diretório "uploads"
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve("uploads"));
    },
    filename: (req, file, callback) => {
        const uniqueName = `${Date.now()}_${file.originalname}`;
        callback(null, uniqueName);
    },
});

// Middleware do multer para processar o upload da imagem
const upload = multer({ storage });

// Função para processar o upload e atualizar o banco
export const atualizarImagemController = [
    upload.single("imagem"), // Processa o upload de um único arquivo chamado "imagem"
    async (req, res) => {
        const idPerfil = req.body.id_perfil; // ID do perfil enviado na requisição
        const caminhoImagem = `/uploads/${req.file.filename}`; // Caminho da imagem salva

        if (!idPerfil) {
            return res.status(400).json({ error: "ID do perfil é obrigatório." });
        }

        try {
            // Atualizar o banco de dados com o caminho da imagem
            await atualizarImagemPerfil(idPerfil, caminhoImagem);

            res.status(200).json({
                message: "Imagem do perfil atualizada com sucesso!",
                caminhoImagem,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
];
