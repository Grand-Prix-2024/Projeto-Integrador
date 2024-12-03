import express from 'express';
import cors from 'cors';
import { criarUsuario, logarUsuario } from './Controllers/UsuarioController.js';
import { mostrarUsuario } from './Controllers/UsuarioController.js';
import { atualizarUsuario } from './Controllers/UsuarioController.js';
import { deletarUsuario, mostrarUmUsuario } from './Controllers/UsuarioController.js';
import { criarPerfil, mostrarPerfil, atualizarPerfil, deletarPerfil, buscarPerfilPorUsuario } from './Controllers/PerfilController.js';
import { criarRepublica, mostrarRepublica, atualizarRepublica, deletarRepublica, mostrarUmaRepublica } from './Controllers/RepublicaController.js';
import { cadastrarImagens, listarRepublicas, detalhesRepublica, excluirImagem } from './Controllers/ImagemController.js';

const app = express();
const porta = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Hive funcionando :)')
});

var corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));



// CRUD USUARIO
app.post('/usuarios', criarUsuario);
app.get('/usuarios', mostrarUsuario);
app.put('/usuarios/:id', atualizarUsuario);
app.delete('/usuarios/:id', deletarUsuario);
app.get('/usuarios/:id', mostrarUmUsuario);

// CRUD LOGIN
app.post('/login', logarUsuario);

// CRUD PERFIL
app.post('/perfil', criarPerfil);
app.get('/perfil', mostrarPerfil);
app.put('/perfil/:id', atualizarPerfil);
app.get('/perfil/:id_usuario', buscarPerfilPorUsuario);
app.delete('/perfil/:id', deletarPerfil);

// CRUD REPUBLICA
app.post('/republicas', criarRepublica);
app.get('/republicas', mostrarRepublica);
app.put('/republicas/:id', atualizarRepublica);
app.delete('/republicas/:id', deletarRepublica);
app.get('/republicas/:id', mostrarUmaRepublica);

app.post('/imagens', cadastrarImagens);
app.get('/imagens', listarRepublicas);
app.delete('/imagens/:id', excluirImagem);
app.get('/imagens/:id', detalhesRepublica);


app.listen(porta, () => {
    console.log(`API RODANDO NA PORTA: ${porta}`)
});