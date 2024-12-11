import multer from "multer";
import path from "path";

// Configuração do destino e nome do arquivo
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve("public", "img")); 
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const uniqueName = `${timestamp}-${file.originalname}`;
        cb(null, uniqueName); // Define o nome único para o arquivo
    },
});

// Filtrando os tipos de arquivos permitidos
const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Tipo de arquivo não permitido. Apenas imagens são aceitas."));
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, 
});

export default upload;
