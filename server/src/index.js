import express from 'express';
import cors from 'cors';
import { criarUsuario } from './Controllers/UsuarioController.js';
import { mostrarUsuario } from './Controllers/UsuarioController.js';
import { atualizarUsuario } from './Controllers/UsuarioController.js';
import { deletarUsuario } from './Controllers/UsuarioController.js';

const app = express();
const porta = 5000;

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('API Hive funcionando :)')
});

app.use(cors());

app.post('/usuarios', criarUsuario);
app.get('/usuarios', mostrarUsuario);
app.put('/usuarios/:id', atualizarUsuario);
app.delete('/usuarios/:id', deletarUsuario);


app.listen(porta, ()=>{
    console.log(`API RODANDO NA PORTA: ${porta}`)
});