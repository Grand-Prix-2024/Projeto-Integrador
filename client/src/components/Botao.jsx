import React from 'react'
import './Botao.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];


export const Botao = ({ children, type, onClick, buttonStyle, buttonSize }) => { const checkBotaoEstilo = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; const checkBotaoTamanho = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; return(
    <Link to='/registrar' className='btn-mobile'>
        <button className={`btn ${checkBotaoEstilo} ${checkBotaoTamanho}`} onClick={onClick} type={type}>
            {children}
        </button>

    </Link>
) };
export default Botao