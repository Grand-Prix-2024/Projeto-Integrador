import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { criarUsuario, logarUsuario } from './Controllers/UsuarioController.js';
import { mostrarUsuario } from './Controllers/UsuarioController.js';
import { atualizarUsuario } from './Controllers/UsuarioController.js';
import { deletarUsuario, mostrarUmUsuario } from './Controllers/UsuarioController.js';
import { criarPerfil, mostrarPerfil, atualizarPerfil, deletarPerfil, buscarPerfilPorUsuario } from './Controllers/PerfilController.js';
import {  editarImagem } from './Controllers/ImagemPerfilController.js';



const app = express();
const porta = 5000;

app.use(fileUpload());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('API Hive funcionando :)')
});

var corsOptions = {
    origin: 'http://localhost',
    optionSuccessStatus: 200
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
//app.put('/imagem/:id_imagem', editarImagemPerfil);

// CRUD IMAGEM PERFIL
app.put('/img_perfil/:id_perfil', editarImagem)
app.get('/img_perfil/:id_perfil', )

app.get('/perfil/:id_usuario', (req, res) => {
    const { id_usuario } = req.params;
    const query = 'SELECT caminho_perfil_foto FROM perfil WHERE id_usuario = ?';
  
    db.query(query, [id_usuario], (err, results) => {
      if (err) return res.status(500).json({ error: 'Erro no servidor' });
  
      if (results.length > 0) {
        res.json({ caminho_perfil_foto: results[0].caminho_perfil_foto });
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    });
  });


// CRUD REPUBLICA






app.listen(porta, ()=>{
    console.log(`API RODANDO NA PORTA: ${porta}`)
});


