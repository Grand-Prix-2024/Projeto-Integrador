import express from 'express';
import cors from 'cors';
import { criarUsuario, logarUsuario } from './Controllers/UsuarioController.js';
import { mostrarUsuario } from './Controllers/UsuarioController.js';
import { atualizarUsuario } from './Controllers/UsuarioController.js';
import { deletarUsuario, mostrarUmUsuario } from './Controllers/UsuarioController.js';
import { criarPerfil, mostrarPerfil, atualizarPerfil, deletarPerfil, buscarPerfilPorUsuario } from './Controllers/PerfilController.js';
import { criarRepublica, mostrarRepublica, atualizarRepublica, deletarRepublica, mostrarUmaRepublica } from './Controllers/RepublicaController.js';

const app = express();
const porta = 5000;

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('API Hive funcionando :)')
});

app.use(cors());

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


app.listen(porta, ()=>{
    console.log(`API RODANDO NA PORTA: ${porta}`)
});