import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function ProximaTela() {
    const location = useLocation();
    const objetoRecebido = location.state || {};
    const [objetoParcial,setObjetoParcial] = useState(objetoRecebido);

    function alterarObjeto(event) {
        const { name, value } = event.target;
        setObjetoParcial((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }

    return (
        <>
            <h1>Cadastro Sequencial</h1>
            <p>Nome: {objetoRecebido.nome}</p>
            <p>Sobrenome: {objetoRecebido.sobrenome}</p>
        </>
    );
}

export default ProximaTela;
