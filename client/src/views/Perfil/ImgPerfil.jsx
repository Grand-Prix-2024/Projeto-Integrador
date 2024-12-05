import React, { useState } from "react";
import axios from "axios";

function AtualizarImagemPerfil() {
    const [imagem, setImagem] = useState(null);

    const handleUpload = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("imagem", imagem);
        formData.append("id_perfil", ); // ID do perfil (exemplo)

        try {
            const response = await axios.post(
                "http://localhost:5000/perfil/imagem",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );

            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert("Erro ao atualizar imagem do perfil.");
        }
    };

    return (
        <div>
            <form onSubmit={handleUpload}>
                <input
                    type="file"
                    onChange={(e) => setImagem(e.target.files[0])}
                />
                <button type="submit">Atualizar Imagem</button>
            </form>
        </div>
    );
}

export default AtualizarImagemPerfil;
