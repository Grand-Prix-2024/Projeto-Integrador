import { useEffect, useState } from "react";
import TabelaUsuarios from "./TabelaUsuarios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";

function GestaoUser(){
    const{tipo} = useParams();
    const[exibeAlerta, setExibeAlerta] = useState(false);
    const[tipoMensagem, setTipoMensagem] = useState(tipo);
    const[classeMensagem, setClasseMensagem] = useState('');
    const[textoMensagem, setTextoMensagem] = useState('');

    useEffect(()=>{
        if(tipoMensagem){
            setExibeAlerta(true);
            atualizaMensagem();
            setTimeout(()=>{
                setExibeAlerta(false);
                setTipoMensagem('');
            }, 5000)
        }
    }, [tipoMensagem]);

    function mensagemDelete(){
        setTipoMensagem('deletada');
    }

    function atualizaMensagem(){
        switch(tipoMensagem){
            case 'cadastrada':
                setClasseMensagem('alert alert-success');
                setTextoMensagem('Usuário Cadastro');
                break;
            case 'deletada':
                setClasseMensagem('alert alert-danger');
                setTextoMensagem('Usuário Deletado')
                break;
            case 'editada':
                setClasseMensagem('alert alert-primary');
                setTextoMensagem('Usuário Editada');
            break;
        }
    };

    return(
        <>
            <Navbar/>
            <div className='container'>
                <h1 className='text-center mt-3'>Gestão de usuários</h1>
                {exibeAlerta && <div className={classeMensagem}>{textoMensagem}</div>}
                <div className="col-12 text-end my-2">
                    <Link to={'/cadastro'} className="btn btn-primary ms-auto">Cadastro Usuário</Link>
                </div>
                <TabelaUsuarios tipo='edit' onDeleteSuccess={mensagemDelete}/>
            </div>
        </>
    )

}

export default GestaoUser;