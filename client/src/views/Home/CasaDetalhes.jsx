import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

function CasaDetalhes() {
    const { id } = useParams(); 
    const [republica, setRepublica] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRepublica() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND}/republicas/${id}`);
                setRepublica(response.data);
            } catch (error) {
                console.error("Erro ao buscar os detalhes da república:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchRepublica();
    }, [id]);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <h4>Carregando...</h4>
            </div>
        );
    }

    if (!republica) {
        return (
            <div className="text-center mt-5">
                <h4>República não encontrada.</h4>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h1>{republica.nome}</h1>
                <div className="row">
                    <div className="col-md-8">
                        <img
                            src={republica.imagem || "https://via.placeholder.com/300"}
                            alt={republica.nome}
                            className="img-fluid"
                            style={{ maxHeight: "400px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-4">
                        <h4>Detalhes</h4>
                        <p><strong>Bairro:</strong> {republica.bairro}</p>
                        <p><strong>Estado:</strong> {republica.estado}</p>
                        <p><strong>Preço:</strong> R$ {republica.preco}</p>
                        <p><strong>Descrição:</strong> {republica.descricao}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CasaDetalhes;
